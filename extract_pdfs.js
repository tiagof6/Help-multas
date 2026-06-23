const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const leisDir = path.join(__dirname, 'leis_jacarei');
const outputPath = path.join(__dirname, 'src', 'data', 'lawsGCM.ts');

const files = {
  // Estatuto e Carreira GCM
  estatuto_gcm: 'LEI COMPLEMENTAR 97_2017 29_11_2017.pdf',
  plano_carreira: 'LEI COMPLEMENTAR 98_2017 29_11_2017.pdf',
  estatuto_servidor: 'C131993.pdf',
  estatuto_geral: 'LEI-No-13.022.pdf',
  decreto_444: 'decreto_444_2018.pdf',
  // Posturas Municipais
  codigo_posturas: 'Lei Complementar 68 2008 de Jacareí SP.PDF',
  // Meio Ambiente e Causa Animal
  codigo_florestal: 'L12651.PDF',
  crimes_ambientais: 'L9605.PDF',
  comp_ambientais: 'Lcp 140.PDF',
  abandono_animais: 'LEI 5(4).PDF',
  acorrentamento_animais: 'LEI N° 18(5).PDF',
  caes_ferozes: 'Lei Ordinária 4729 2003 de Jacareí SP.PDF',
  residuos_construcao: 'Lei Ordinária 4854 2005 de Jacareí SP.PDF',
  proib_queimadas: 'Lei Ordinária 6471 2022 de Jacareí SP.PDF',
  protecao_arvores: 'Lei Ordinária 6481 2022 de Jacareí SP.PDF'
};

const metadata = {
  estatuto_gcm: { title: 'Estatuto da GCM (LC 97/2017)', description: 'Estatuto da Guarda Civil Municipal de Jacareí', category: 'Estatuto e Carreira GCM' },
  plano_carreira: { title: 'Plano de Carreira (LC 98/2017)', description: 'Plano de Carreira e Vencimentos da GCM', category: 'Estatuto e Carreira GCM' },
  estatuto_servidor: { title: 'Estatuto do Servidor', description: 'Regime Jurídico dos Servidores de Jacareí', category: 'Estatuto e Carreira GCM' },
  estatuto_geral: { title: 'Estatuto Geral (Lei 13.022/14)', description: 'Estatuto Geral das Guardas Municipais (Federal)', category: 'Estatuto e Carreira GCM' },
  decreto_444: { title: 'Decreto 444/2018', description: 'Regulamento de Uniformes e Equipamentos da GCM', category: 'Estatuto e Carreira GCM' },
  
  codigo_posturas: { title: 'Código de Posturas (LC 68/2008)', description: 'Código de Normas, Posturas e Instalações', category: 'Posturas Municipais' },

  codigo_florestal: { title: 'Código Florestal Federal', description: 'Lei 12.651/2012 - Proteção da Vegetação Nativa', category: 'Meio Ambiente e Causa Animal' },
  crimes_ambientais: { title: 'Lei de Crimes Ambientais', description: 'Lei 9.605/1998 - Sanções penais e administrativas', category: 'Meio Ambiente e Causa Animal' },
  comp_ambientais: { title: 'Competências Ambientais', description: 'LC 140/2011 - Cooperação entre os entes', category: 'Meio Ambiente e Causa Animal' },
  abandono_animais: { title: 'Abandono de Animais', description: 'Lei 5.970/2015 - Jacareí', category: 'Meio Ambiente e Causa Animal' },
  acorrentamento_animais: { title: 'Acorrentamento de Animais', description: 'Lei Estadual 18.184/2025 - SP', category: 'Meio Ambiente e Causa Animal' },
  caes_ferozes: { title: 'Circulação de Cães Ferozes', description: 'Lei 4.729/2003 - Jacareí', category: 'Meio Ambiente e Causa Animal' },
  residuos_construcao: { title: 'Resíduos da Construção Civil', description: 'Lei 4.854/2005 - Jacareí', category: 'Meio Ambiente e Causa Animal' },
  proib_queimadas: { title: 'Proibição de Queimadas', description: 'Lei 6.471/2022 - Jacareí', category: 'Meio Ambiente e Causa Animal' },
  protecao_arvores: { title: 'Proteção e Supressão de Árvores', description: 'Lei 6.481/2022 - Jacareí', category: 'Meio Ambiente e Causa Animal' }
};

async function processPDFs() {
  let lawsArray = [];
  
  for (const [id, filename] of Object.entries(files)) {
    const pdfPath = path.join(leisDir, filename);
    if (!fs.existsSync(pdfPath)) {
      console.log(`Arquivo não encontrado: ${filename}`);
      continue;
    }
    
    console.log(`Extraindo texto de: ${filename}...`);
    const dataBuffer = fs.readFileSync(pdfPath);
    try {
      const data = await pdf(dataBuffer);
      let cleanText = data.text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n');
      
      // Smart law formatting: insert blank line before Artigo, Art., Parágrafo, §, or Roman Numerals
      cleanText = cleanText.replace(/\n(?=Artigo\s|Art\.\s|§\s|Parágrafo\s|[IVX]+\s*-)/g, '\n\n');
      
      cleanText = cleanText.replace(/`/g, '\\`').replace(/\$/g, '\\$');
      
      lawsArray.push(`  {
    id: '${id}',
    title: '${metadata[id].title}',
    description: '${metadata[id].description}',
    category: '${metadata[id].category}',
    text: \`${cleanText}\`
  }`);
    } catch (e) {
      console.error(`Erro ao processar ${filename}:`, e);
    }
  }

  const fileContent = `export const leisGCM = [\n${lawsArray.join(',\n')}\n];\n`;
  
  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log('Arquivo lawsGCM.ts atualizado com sucesso com todos os textos completos!');
}

processPDFs();
