const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'infractions.ts');
let content = fs.readFileSync(filePath, 'utf8');

const arrayStart = content.indexOf('export const infractionsData: Infraction[] = [');
let jsCode = content.substring(arrayStart).replace('export const infractionsData: Infraction[] = ', '').trim();
if (jsCode.endsWith(';')) jsCode = jsCode.slice(0, -1);

let infractionsArray;
try {
  infractionsArray = eval(`(${jsCode})`);
} catch (e) {
  console.error("Error parsing infractions array", e);
  process.exit(1);
}

// Helper to check if string contains any of the keywords
const contains = (text, keywords) => {
  const lower = text.toLowerCase();
  return keywords.some(kw => lower.includes(kw));
};

infractionsArray.forEach(infraction => {
  const desc = infraction.descricao.toLowerCase();
  const art = infraction.artigo.toLowerCase();
  let obs = [];

  // 1. Estacionamento / Parada
  if (contains(desc, ['estacionar', 'estacionamento', 'parar'])) {
    if (contains(desc, ['calçada', 'passeio'])) {
      obs = [
        "Veículo estacionado inteiramente sobre o passeio, bloqueando a passagem de pedestres. Condutor ausente.",
        "Veículo com duas rodas sobre a calçada. Autuação realizada sem abordagem pois o condutor não se encontrava no local.",
        "Estacionamento irregular sobre a calçada em frente ao número X. Condutor não identificado.",
        "Veículo estacionado sobre o passeio público, forçando pedestres a transitar pela via."
      ];
    } else if (contains(desc, ['faixa de pedestre', 'cruzamento'])) {
      obs = [
        "Veículo estacionado sobre a faixa de pedestres, prejudicando a travessia segura.",
        "Estacionamento a menos de 5 metros do alinhamento da via transversal. Condutor ausente.",
        "Veículo imobilizado na área de cruzamento prejudicando a fluidez do trânsito.",
        "Condutor estacionou sobre a faixa de pedestres e evadiu-se do local."
      ];
    } else if (contains(desc, ['vaga', 'idoso', 'deficiente'])) {
      obs = [
        "Veículo estacionado em vaga regulamentada para idoso sem a devida credencial exposta no painel.",
        "Estacionamento em vaga de pessoa com deficiência. Veículo não possuía cartão de autorização.",
        "Condutor estacionou em vaga especial regulamentada e recusou-se a retirar o veículo.",
        "Veículo flagrado em vaga de idoso. Nenhuma credencial visível no painel do veículo."
      ];
    } else {
      obs = [
        "Veículo estacionado em local proibido pela sinalização (Placa R-6a). Condutor não estava presente.",
        "Estacionamento irregular constatado. Condutor ausente do local no momento da autuação.",
        "Veículo imobilizado em local proibido, prejudicando o fluxo de veículos na via.",
        "Autuação por estacionamento irregular. Veículo trancado e sem condutor no local."
      ];
    }
  }
  // 2. Cinto de Segurança
  else if (contains(desc, ['cinto de segurança'])) {
    obs = [
      "Condutor flagrado conduzindo o veículo sem a utilização do cinto de segurança.",
      "Passageiro do banco dianteiro direito (carona) não utilizava o cinto de segurança no momento da abordagem.",
      "Passageiro do banco traseiro flagrado sem o uso do cinto de segurança.",
      "Condutor visualizado claramente sem o cinto de segurança. Abordagem não realizada por questões de segurança viária."
    ];
  }
  // 3. Uso do Celular
  else if (contains(desc, ['celular', 'telefone'])) {
    if (contains(desc, ['manuseando', 'segurando'])) {
      obs = [
        "Condutor flagrado segurando aparelho celular com a mão direita na altura do volante com o veículo em movimento.",
        "Condutor manuseando (digitando) no aparelho celular enquanto aguardava a abertura do semáforo.",
        "Condutor visualizado com a cabeça baixa, segurando e manuseando smartphone durante a condução.",
        "Veículo em movimento e condutor segurando telefone celular próximo ao ouvido esquerdo."
      ];
    } else {
      obs = [
        "Condutor falando ao telefone celular encostado no ouvido esquerdo durante a marcha do veículo.",
        "Flagrado uso de telefone celular durante a condução. Vidro do veículo estava abaixado permitindo clara visualização.",
        "Condutor utilizando telefone celular. Não foi possível abordagem devido ao fluxo intenso.",
        "Condutor falando ao celular utilizando fones de ouvido conectados ao aparelho em suas mãos."
      ];
    }
  }
  // 4. Semáforo / Parada Obrigatória
  else if (contains(desc, ['vermelho', 'parada obrigatória'])) {
    obs = [
      "Veículo avançou o foco vermelho do semáforo no cruzamento, sem reduzir a velocidade.",
      "Condutor não respeitou a placa de 'PARE' (R-1), cruzando a via sem imobilizar o veículo.",
      "Avanço de sinal vermelho constatado visualmente. Veículo seguiu marcha colocando outros em risco.",
      "O condutor ignorou a ordem de parada obrigatória e cruzou a via preferencial."
    ];
  }
  // 5. Motocicleta / Capacete / Malabarismo
  else if (contains(desc, ['capacete', 'viseira'])) {
    obs = [
      "Condutor da motocicleta transitava sem o capacete de segurança.",
      "Passageiro da motocicleta não utilizava capacete no momento da abordagem.",
      "Condutor flagrado com o capacete de segurança levantado (sem viseira/óculos de proteção) em movimento.",
      "Capacete do condutor não estava devidamente fixado (jugular destravada)."
    ];
  } else if (contains(desc, ['malabarismo', 'equilibrando', 'empin'])) {
    obs = [
      "Condutor flagrado conduzindo a motocicleta com a roda dianteira elevada (empinando) por aproximadamente 20 metros.",
      "Motociclista realizando manobra de malabarismo (empinando) em via pública, colocando em risco a própria segurança.",
      "Veículo transitando apoiado apenas na roda traseira no momento da constatação.",
      "Condutor realizando exibição de manobra perigosa (empinando a moto) na via."
    ];
  }
  // 6. Velocidade
  else if (contains(desc, ['velocidade', 'radar'])) {
    obs = [
      "Excesso de velocidade constatado por equipamento medidor de velocidade regulamentado.",
      "Velocidade do veículo incompatível com a segurança do trecho, constatada por radar móvel.",
      "Condutor transitando em velocidade visivelmente superior à máxima permitida da via (aferido por equipamento).",
      "Autuação registrada por equipamento eletrônico de controle de velocidade."
    ];
  }
  // 7. CNH / CRLV / Documentação
  else if (contains(desc, ['cnh', 'licenciamento', 'registro', 'documento'])) {
    obs = [
      "Veículo abordado em blitz. Constatado licenciamento (CRLV) em atraso referente ao ano anterior.",
      "Condutor abordado não possuía CNH ou Permissão para Dirigir.",
      "Condutor apresentou CNH com validade vencida há mais de 30 dias.",
      "Veículo retido e removido ao pátio devido a falta de licenciamento anual obrigatório."
    ];
  }
  // 8. Álcool / Bafômetro
  else if (contains(desc, ['álcool', 'alcoolemia', 'bafômetro', 'influência'])) {
    obs = [
      "Condutor abordado apresentou forte odor etílico e olhos vermelhos. Recusou-se a realizar o teste do etilômetro.",
      "Realizado teste de etilômetro (marca X, nº Y) com resultado positivo de Z mg/L. Constatada embriaguez.",
      "Condutor com sinais visíveis de alteração psicomotora devido a ingestão de bebida alcoólica.",
      "Condutor recusou o teste do bafômetro. Lavrado Termo de Constatação de Embriaguez por sinais visíveis."
    ];
  }
  // 9. Calçado inadequado / Braço de fora
  else if (contains(desc, ['calçado'])) {
    obs = [
      "Condutor flagrado dirigindo utilizando chinelo de dedo, calçado que não se firma aos pés.",
      "Durante abordagem, constatado que o condutor dirigia de salto alto, comprometendo os pedais.",
      "Condutor dirigindo com calçado inadequado (chinelo) que compromete a segurança na utilização dos pedais.",
      "Autuado por dirigir de chinelos. Foi solicitada a troca do calçado ou a condução por pessoa habilitada."
    ];
  } else if (contains(desc, ['braço do lado de fora'])) {
    obs = [
      "Condutor flagrado dirigindo com o braço esquerdo apoiado na porta, do lado de fora do veículo.",
      "Veículo em movimento e condutor com o braço para o lado de fora da janela.",
      "Braço do condutor projetado para fora da janela enquanto o veículo estava em movimento na via.",
      "Condutor conduzindo veículo com uma só mão no volante e o braço esquerdo na janela externa."
    ];
  }
  // 10. Ultrapassagem e Contramão
  else if (contains(desc, ['ultrapass', 'contramão'])) {
    obs = [
      "Condutor realizou ultrapassagem em local proibido por faixa contínua amarela.",
      "Veículo transitando na contramão de direção em via com sentido único.",
      "Ultrapassagem forçada pelo acostamento, colocando outros veículos em risco.",
      "Veículo flagrado realizando ultrapassagem em trecho de ponte/viaduto sem visibilidade."
    ];
  }
  // 11. Escapamento / Som
  else if (contains(desc, ['descarga', 'escapamento', 'silenciador'])) {
    obs = [
      "Motocicleta abordada com escapamento modificado (descarga livre), produzindo ruído excessivamente alto.",
      "Veículo transitando com silenciador do motor de explosão defeituoso/ausente.",
      "Constatada alteração no sistema de escapamento original do veículo (torbal).",
      "Veículo emitindo ruído muito superior ao normal devido à troca do escapamento original por esportivo."
    ];
  } else if (contains(desc, ['som', 'volume'])) {
    obs = [
      "Veículo autuado por som automotivo em volume audível pelo lado externo, perturbando o sossego público.",
      "Condutor com equipamento de som no porta-malas aberto, gerando ruído excessivo na via pública.",
      "Autuação conforme medição de decibelímetro que apontou volume superior ao permitido.",
      "Veículo transitando com som em volume alto, perceptível a vários metros de distância."
    ];
  }
  // 12. Farol / Iluminação
  else if (contains(desc, ['farol', 'luz', 'iluminação'])) {
    obs = [
      "Veículo transitando em rodovia durante o dia com os faróis de luz baixa desligados.",
      "Veículo flagrado transitando no período noturno com farol dianteiro esquerdo queimado.",
      "Condutor transitando com as luzes de posição desligadas durante a noite.",
      "Motocicleta transitando com o farol principal apagado, prejudicando a própria visibilidade e a de terceiros."
    ];
  }
  // Fallback Genérico, porém mais inteligente ligando à descrição da infração.
  else {
    const descTratada = infraction.descricao.split(',')[0].toLowerCase(); // Pega a primeira parte da descrição
    obs = [
      `Infração flagrada: veículo estava ${descTratada}. Condutor não abordado devido ao fluxo.`,
      `Constatado no local o veículo ${descTratada}. Autuação preenchida com base na visualização clara do agente.`,
      `Veículo flagrado na prática de: ${descTratada}. Condutor não acatou ou não houve possibilidade de abordagem.`,
      `Durante patrulhamento, constatou-se que o veículo estava ${descTratada}, contrariando a legislação viária.`
    ];
  }

  infraction.exemplosObservacao = obs;
});

const outputCode = `export interface Infraction {
  id: string;
  codigo: string;
  descricao: string;
  penalidade: string;
  medidaAdministrativa: string;
  infrator: string;
  pontos: number;
  valor: number;
  gravidade: string;
  competencia: string;
  artigo: string;
  exemplosObservacao: string[];
}

export const infractionsData: Infraction[] = ${JSON.stringify(infractionsArray, null, 2)};
`;

fs.writeFileSync(filePath, outputCode, 'utf8');
console.log('Infrações atualizadas com observações específicas de alta qualidade!');
