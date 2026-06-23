const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const leisDir = path.join(__dirname, 'leis_jacarei');
const newFiles = [
  'LEI N° 18(5).PDF',
  'Lei Ordinária 4729 2003 de Jacareí SP.PDF'
];

async function checkPDFs() {
  for (const filename of newFiles) {
    const pdfPath = path.join(leisDir, filename);
    if (!fs.existsSync(pdfPath)) continue;
    const dataBuffer = fs.readFileSync(pdfPath);
    try {
      const data = await pdf(dataBuffer);
      console.log(`\n--- ${filename} ---`);
      console.log(data.text.substring(0, 300).replace(/\n/g, ' '));
    } catch (e) {
      console.error(`Erro: ${filename}`);
    }
  }
}
checkPDFs();
