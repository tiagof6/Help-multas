const axios = require('axios');
const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'regulamentacao', name: 'Regulamentação', wikicategory: 'Category:SVG_regulatory_road_signs_of_Brazil' },
  { id: 'advertencia', name: 'Advertência', wikicategory: 'Category:SVG_warning_road_signs_of_Brazil' }
];

const API_URL = 'https://commons.wikimedia.org/w/api.php';
const HEADERS = { 'User-Agent': 'HelpMultasBot/1.0 (contact@helpmultas.com)' };

async function fetchCategoryMembers(category) {
  try {
    const res = await axios.get(API_URL, {
      headers: HEADERS,
      params: {
        action: 'query',
        list: 'categorymembers',
        cmtitle: category,
        cmlimit: 500,
        cmtype: 'file',
        format: 'json'
      }
    });
    return res.data.query.categorymembers;
  } catch (err) {
    console.error('Error fetching members for', category, err.message);
    return [];
  }
}

async function fetchImageUrls(titles) {
  // O MediaWiki aceita um limite de 50 titles por vez
  const chunks = [];
  for (let i = 0; i < titles.length; i += 50) {
    chunks.push(titles.slice(i, i + 50));
  }

  const results = [];
  for (const chunk of chunks) {
    try {
      const res = await axios.get(API_URL, {
        headers: HEADERS,
        params: {
          action: 'query',
          prop: 'imageinfo',
          iiprop: 'url',
          titles: chunk.join('|'),
          format: 'json'
        }
      });
      const pages = res.data.query.pages;
      for (const pageId in pages) {
        if (pages[pageId].imageinfo && pages[pageId].imageinfo.length > 0) {
          results.push({
            title: pages[pageId].title,
            url: pages[pageId].imageinfo[0].url
          });
        }
      }
    } catch (err) {
      console.error('Error fetching URLs:', err.message);
    }
  }
  return results;
}

function parseTitle(title) {
  // Title format: "File:Brazil sign R-1.svg" or "File:Brazil sign A-21.svg"
  let cleanTitle = title.replace('File:', '').replace('.svg', '').replace('.SVG', '');
  
  // Extrai o código (ex: R-1, A-21)
  const regex = /([R|A]-[0-9]+[A-Z]?)/i;
  const match = cleanTitle.match(regex);
  
  const code = match ? match[1].toUpperCase() : cleanTitle;
  
  return {
    code: code,
    description: `Placa ${code}` // A descrição exata precisaria de uma tabela, mas o código já serve bem
  };
}

async function run() {
  console.log('Buscando placas do Wikimedia Commons...');
  const allSigns = [];

  for (const cat of CATEGORIES) {
    console.log(`Buscando categoria: ${cat.name}`);
    const members = await fetchCategoryMembers(cat.wikicategory);
    
    // Pega só SVGs
    const svgTitles = members.map(m => m.title).filter(t => t.toLowerCase().endsWith('.svg'));
    console.log(`- Encontrados ${svgTitles.length} SVGs`);

    const imagesInfo = await fetchImageUrls(svgTitles);
    
    for (const img of imagesInfo) {
      const parsed = parseTitle(img.title);
      // Alguns não são placas padrão (ignora se não achou código padrão e for lixo)
      if (parsed.code.includes('Brazil')) continue;

      allSigns.push({
        id: parsed.code,
        code: parsed.code,
        category: cat.id,
        categoryName: cat.name,
        description: parsed.description,
        svgUrl: img.url
      });
    }
  }

  // Ordena
  allSigns.sort((a, b) => a.code.localeCompare(b.code));

  // Remove duplicatas baseadas no código
  const uniqueSigns = [];
  const codesSeen = new Set();
  for (const s of allSigns) {
    if (!codesSeen.has(s.code)) {
      codesSeen.add(s.code);
      uniqueSigns.push(s);
    }
  }

  const outputPath = path.join(__dirname, '../src/data/signs.json');
  fs.writeFileSync(outputPath, JSON.stringify(uniqueSigns, null, 2), 'utf-8');
  console.log(`\nBase de dados gerada com sucesso em ${outputPath}`);
  console.log(`Total de Placas Únicas Baixadas: ${uniqueSigns.length}`);
}

run();
