const fs = require('fs');
const path = require('path');

// Este script converte uma planilha CSV oficial de infrações (ex: do DETRAN/SENATRAN)
// para o formato TypeScript que o aplicativo utiliza.
// 
// Como usar:
// 1. Baixe a Tabela de Enquadramentos do CTB em formato CSV.
// 2. Salve o arquivo como "infracoes_oficial.csv" nesta mesma pasta (scripts).
// 3. Rode no terminal: node scripts/import_ctb.js

const csvFilePath = path.join(__dirname, 'infracoes_oficial.csv');
const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'infractions.ts');

if (!fs.existsSync(csvFilePath)) {
  console.log('❌ Arquivo infracoes_oficial.csv não encontrado!');
  console.log('Por favor, adicione o CSV na pasta scripts para gerar a base completa.');
  process.exit(1);
}

const csvData = fs.readFileSync(csvFilePath, 'utf8');
const lines = csvData.split('\n');

const infractions = [];

// Ajuste os índices (0, 1, 2...) de acordo com as colunas do seu arquivo CSV oficial
// Exemplo de colunas: Código, Desdobramento, Artigo, Descrição, Gravidade, Valor, Pontos...
lines.forEach((line, index) => {
  if (index === 0 || !line.trim()) return; // Pula o cabeçalho e linhas vazias

  const cols = line.split(';'); // Ou ',' dependendo do seu CSV

  if (cols.length > 5) {
    const infracao = {
      id: index.toString(),
      codigo: cols[0]?.trim() || '',
      artigo: cols[1]?.trim() || '',
      descricao: cols[2]?.trim() || '',
      gravidade: cols[3]?.trim() || 'Média',
      pontos: parseInt(cols[4]) || 4,
      valor: cols[5]?.trim() || 'R$ 130,16',
      penalidade: 'Multa', // Ajustar conforme CSV
      medidaAdministrativa: 'Não há', // Ajustar conforme CSV
      competencia: 'Órgão de Trânsito', // Ajustar conforme CSV
      infrator: 'Condutor', // Ajustar conforme CSV
      observacoes: ''
    };
    infractions.push(infracao);
  }
});

const tsContent = `export interface Infraction {
  id: string;
  codigo: string;
  artigo: string;
  descricao: string;
  gravidade: string;
  pontos: number;
  valor: string;
  penalidade: string;
  medidaAdministrativa: string;
  competencia: string;
  infrator: string;
  observacoes: string;
}

export const infractionsData: Infraction[] = ${JSON.stringify(infractions, null, 2)};
`;

fs.writeFileSync(outputFilePath, tsContent, 'utf8');
console.log(`✅ Base de dados atualizada! ${infractions.length} infrações foram importadas com sucesso.`);
