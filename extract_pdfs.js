const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const leisDir = path.join(__dirname, 'leis_jacarei');
const outputPath = path.join(__dirname, 'src', 'data', 'lawsGCM.ts');

const files = {
  estatuto_gcm: 'LEI COMPLEMENTAR 97_2017 29_11_2017.pdf',
  plano_carreira: 'LEI COMPLEMENTAR 98_2017 29_11_2017.pdf',
  estatuto_servidor: 'C131993.pdf',
  estatuto_geral: 'LEI-No-13.022.pdf',
  decreto_444: 'decreto_444_2018.pdf'
};

const metadata = {
  estatuto_gcm: { title: 'Estatuto da GCM (LC 97/2017)', description: 'Estatuto da Guarda Civil Municipal de Jacareí' },
  plano_carreira: { title: 'Plano de Carreira (LC 98/2017)', description: 'Plano de Carreira e Vencimentos da GCM' },
  estatuto_servidor: { title: 'Estatuto do Servidor Municipal', description: 'Regime Jurídico dos Servidores de Jacareí' },
  estatuto_geral: { title: 'Estatuto Geral (Lei 13.022/14)', description: 'Estatuto Geral das Guardas Municipais (Federal)' },
  decreto_444: { title: 'Decreto 444/2018', description: 'Regulamento de Uniformes e Equipamentos da GCM' }
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
      // Clean up text
      let cleanText = data.text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n');
      // Escape backticks and dollars
      cleanText = cleanText.replace(/`/g, '\\`').replace(/\$/g, '\\$');
      
      lawsArray.push(`  {
    id: '${id}',
    title: '${metadata[id].title}',
    description: '${metadata[id].description}',
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
