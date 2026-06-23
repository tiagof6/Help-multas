const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');

const filesToCreate = {
  'res940.ts': `export const resolucao940Text = \`RESOLUÇÃO CONTRAN Nº 940, DE 28 DE MARÇO DE 2022

Dispõe sobre o uso do capacete motociclístico.

Art. 2º É obrigatório, para circular na via pública, o uso de capacete motociclístico pelo condutor e passageiro de motocicleta, motoneta, ciclomotor, triciclo motorizado e quadriciclo motorizado.

Art. 3º O capacete tem de estar devidamente afixado à cabeça pelo conjunto formado pela cinta jugular e engate, por debaixo do maxilar inferior.

Art. 4º O capacete motociclístico deve ser dotado de dispositivo retrátil (viseira) ou estar acompanhado de óculos de proteção. No período noturno, a viseira ou óculos devem ser no padrão cristal.\`;\n`,
  
  'res969.ts': `export const resolucao969Text = \`RESOLUÇÃO CONTRAN Nº 969, DE 20 DE JUNHO DE 2022

Dispõe sobre o sistema de Placas de Identificação Veicular (PIV) no padrão Mercosul.

Art. 3º Após o registro no RENAVAM, cada veículo será identificado por placa veicular padrão Mercosul, que deverá conter 7 caracteres alfanuméricos.

Art. 18. O uso da PIV no padrão Mercosul é obrigatório para o primeiro emplacamento, mudança de categoria, roubo/furto/extravio da placa, ou mudança de município/estado.

Os veículos com placa no padrão anterior podem continuar circulando até que ocorra uma das situações de obrigatoriedade de troca.\`;\n`,

  'res819.ts': `export const resolucao819Text = \`RESOLUÇÃO CONTRAN Nº 819, DE 17 DE MARÇO DE 2021

Dispõe sobre o transporte de crianças com idade inferior a dez anos que não tenham atingido 1,45m de altura.

Art. 2º O transporte de criança com idade inferior a dez anos que não tenha atingido 1,45m de altura deve ser realizado no banco traseiro, com o uso de dispositivo de retenção adequado:
I - bebê conforto: crianças de até 1 ano de idade;
II - cadeirinha: crianças de 1 a 4 anos;
III - assento de elevação: crianças de 4 a 7 anos e meio;
IV - cinto de segurança do veículo: crianças com mais de 7 anos e meio até 10 anos que ainda não atingiram 1,45m.

Art. 9º O descumprimento sujeita o condutor à infração gravíssima (art. 168 do CTB).\`;\n`,

  'res798.ts': `export const resolucao798Text = \`RESOLUÇÃO CONTRAN Nº 798, DE 2 DE SETEMBRO DE 2020

Dispõe sobre os requisitos técnicos para a fiscalização da velocidade de veículos automotores, reboques e semirreboques.

Art. 3º Os medidores de velocidade devem ser do tipo:
I - fixo (controlador ou redutor);
II - portátil;
III - estático;
IV - móvel.

Art. 6º A fiscalização deve ser ostensiva. É proibido o uso de equipamentos sem sinalização prévia (placas R-19) indicando o limite de velocidade da via ou o uso de medidores de velocidade ocultos ou camuflados.

A autuação de velocidade tem margem de tolerância (erro máximo admitido) de 7 km/h para velocidades até 100 km/h, e de 7% para velocidades acima de 100 km/h.\`;\n`
};

for (const [filename, content] of Object.entries(filesToCreate)) {
  fs.writeFileSync(path.join(dataDir, filename), content, 'utf8');
}

const screenPath = path.join(__dirname, 'src', 'screens', 'ResolutionScreen.tsx');
let screenContent = fs.readFileSync(screenPath, 'utf8');

// Add imports
if (!screenContent.includes('resolucao940Text')) {
  const importsToAdd = `import { resolucao940Text } from '../data/res940';\nimport { resolucao969Text } from '../data/res969';\nimport { resolucao819Text } from '../data/res819';\nimport { resolucao798Text } from '../data/res798';\n`;
  screenContent = screenContent.replace(/(import { resolucao923Text } from '\.\.\/data\/res923';\n)/, '$1' + importsToAdd);
}

// Replace the flat list with the new descriptions swapped and new items
const regex = /const RESOLUTIONS = \[[\s\S]*?\];/;
const newResolutions = `const RESOLUTIONS = [
  {
    id: '996',
    title: 'Ciclomotores e Bicicletas Elétricas',
    description: 'Resolução 996/23',
    text: resolucao996Text
  },
  {
    id: '985',
    title: 'Manual Brasileiro de Fiscalização (MBFT)',
    description: 'Resolução 985/22',
    text: resolucao985Text
  },
  {
    id: '960',
    title: 'Requisitos para Vidros (Insulfilm)',
    description: 'Resolução 960/22',
    text: resolucao960Text
  },
  {
    id: '916',
    title: 'Modificações (Rebaixamento, Cor, LED)',
    description: 'Resolução 916/22',
    text: resolucao916Text
  },
  {
    id: '432',
    title: 'Fiscalização de Álcool (Lei Seca)',
    description: 'Resolução 432/13',
    text: resolucao432Text
  },
  {
    id: '923',
    title: 'Exame Toxicológico (Cat. C, D, E)',
    description: 'Resolução 923/22',
    text: resolucao923Text
  },
  {
    id: '940',
    title: 'Uso de Capacete Motociclístico',
    description: 'Resolução 940/22',
    text: resolucao940Text
  },
  {
    id: '969',
    title: 'Placas Padrão Mercosul (PIV)',
    description: 'Resolução 969/22',
    text: resolucao969Text
  },
  {
    id: '819',
    title: 'Transporte de Crianças (Cadeirinha)',
    description: 'Resolução 819/21',
    text: resolucao819Text
  },
  {
    id: '798',
    title: 'Fiscalização de Velocidade (Radares)',
    description: 'Resolução 798/20',
    text: resolucao798Text
  }
];`;

screenContent = screenContent.replace(regex, newResolutions);

fs.writeFileSync(screenPath, screenContent, 'utf8');
console.log('Script concluded.');
