const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'infractions.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Extract the array content
const interfaceRegex = /export interface Infraction \{[\s\S]*?\}/;
let interfaceDef = content.match(interfaceRegex)[0];

if (!interfaceDef.includes('exemplosObservacao')) {
  interfaceDef = interfaceDef.replace('}', '  exemplosObservacao?: string[];\n}');
  content = content.replace(interfaceRegex, interfaceDef);
}

const arrayStart = content.indexOf('export const infractionsData: Infraction[] = [');
const arrayContentStr = content.substring(arrayStart + 45); // After the '='
let infractionsArray;
try {
  // Convert string to actual array (assuming it's valid JSON format inside)
  // We'll replace the starting part and eval
  let jsCode = content.substring(arrayStart).replace('export const infractionsData: Infraction[] = ', '').trim();
  if (jsCode.endsWith(';')) jsCode = jsCode.slice(0, -1);
  infractionsArray = eval(`(${jsCode})`);
} catch (e) {
  console.error("Error parsing infractions array", e);
  process.exit(1);
}

function generateExamples(descricao) {
  const desc = descricao.toLowerCase();
  let examples = [];

  if (desc.includes('estacionar') || desc.includes('estacionamento')) {
    examples = [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ];
  } else if (desc.includes('cinto')) {
    examples = [
      "Condutor visualizado conduzindo o veículo em via pública sem o uso do cinto de segurança.",
      "Passageiro do banco dianteiro direito sem utilizar o cinto de segurança no momento da abordagem.",
      "Passageiro do banco traseiro não utilizava o cinto de segurança.",
      "Condutor não utilizava cinto de segurança. Abordagem não realizada por motivo de segurança."
    ];
  } else if (desc.includes('celular') || desc.includes('telefone')) {
    examples = [
      "Condutor flagrado manuseando telefone celular com a mão enquanto dirigia.",
      "Condutor visualizado segurando aparelho celular na altura do volante.",
      "Condutor flagrado utilizando telefone celular junto ao ouvido.",
      "Autuação por constatação visual do uso do celular. Impossibilidade de abordagem."
    ];
  } else if (desc.includes('velocidade')) {
    examples = [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ];
  } else if (desc.includes('vermelho') || desc.includes('sinal') || desc.includes('semáforo')) {
    examples = [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ];
  } else if (desc.includes('capacete')) {
    examples = [
      "Condutor da motocicleta visualizado transitando sem o capacete de segurança.",
      "Passageiro da motocicleta flagrado sem o uso do capacete.",
      "Condutor utilizando capacete sem viseira/óculos de proteção baixados.",
      "Motociclista com capacete não afivelado corretamente sob o queixo."
    ];
  } else if (desc.includes('habilitação') || desc.includes('cnh')) {
    examples = [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ];
  } else if (desc.includes('placa') || desc.includes('identificação')) {
    examples = [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ];
  } else if (desc.includes('alcool') || desc.includes('embriaguez') || desc.includes('psicoativa') || desc.includes('álcool')) {
    examples = [
      "Condutor apresentou sinais notórios de embriaguez: hálito etílico e fala alterada.",
      "Condutor recusou-se a realizar o teste do etilômetro (bafômetro).",
      "Teste do etilômetro realizado com resultado positivo para alcoolemia.",
      "Condutor encaminhado à delegacia devido ao alto teor alcoólico constatado."
    ];
  } else if (desc.includes('contramão')) {
    examples = [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ];
  } else {
    examples = [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ];
  }

  return examples;
}

infractionsArray = infractionsArray.map(inf => {
  if (!inf.exemplosObservacao || inf.exemplosObservacao.length === 0) {
    inf.exemplosObservacao = generateExamples(inf.descricao);
  }
  return inf;
});

const newArrayStr = JSON.stringify(infractionsArray, null, 2);
const finalContent = content.substring(0, arrayStart) + 'export const infractionsData: Infraction[] = ' + newArrayStr + ';\n';

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Observações adicionadas com sucesso a " + infractionsArray.length + " infrações.");
