export interface Infraction {
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
  sinonimos?: string[];
}

export const infractionsData: Infraction[] = [
  // VELOCIDADE
  {
    id: "1", codigo: "745-50", artigo: "218, I",
    descricao: "Transitar em velocidade superior à máxima permitida em até 20%.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Equipamento controlador de velocidade (radar) código/marca X, aferição INMETRO em DD/MM/AAAA.\nExemplo 2: Local devidamente sinalizado com placas R-19 regulamentando a velocidade.\nExemplo 3: Medição registrada fotograficamente com a velocidade medida de 70km/h e velocidade considerada de 63km/h.",
    sinonimos: ["radar", "pardal", "correndo", "velocidade", "excesso", "lombada eletronica", "apressadinho"]
  },
  {
    id: "2", codigo: "746-30", artigo: "218, II",
    descricao: "Transitar em velocidade superior à máxima permitida em mais de 20% até 50%.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Aferição pelo radar móvel X, certificado pelo INMETRO no prazo de validade.\nExemplo 2: Local ostensivamente sinalizado conforme resolução do CONTRAN.\nExemplo 3: Veículo transitando a 90km/h em via de 60km/h, velocidade considerada 83km/h.",
    sinonimos: ["radar", "pardal", "correndo", "velocidade", "excesso", "lombada eletronica", "rapido"]
  },
  {
    id: "3", codigo: "747-10", artigo: "218, III",
    descricao: "Transitar em velocidade superior à máxima permitida em mais de 50%.",
    gravidade: "Gravíssima (Multiplicador 3x)", pontos: 7, valor: "R$ 880,41",
    penalidade: "Multa e Suspensão", medidaAdministrativa: "Recolhimento da CNH",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Medição por equipamento eletrônico. Velocidade da via 60km/h, velocidade registrada 100km/h.\nExemplo 2: Retido o documento de habilitação nº XXXXXXX do condutor durante a abordagem.\nExemplo 3: Auto lavrado com base em imagem capturada por equipamento aferido pelo INMETRO.",
    sinonimos: ["radar", "pardal", "correndo", "velocidade", "excesso", "voando", "racha", "pega"]
  },

  // SINALIZAÇÃO E PREFERÊNCIA
  {
    id: "4", codigo: "605-01", artigo: "208",
    descricao: "Avançar o sinal vermelho do semáforo ou o de parada obrigatória.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo avançou a fase vermelha do semáforo no cruzamento das vias A e B.\nExemplo 2: O condutor ignorou a placa de parada obrigatória (R-1) sem esboçar redução de velocidade.\nExemplo 3: Autuação efetuada sem abordagem. Semáforo encontrava-se em perfeito funcionamento.",
    sinonimos: ["sinal", "semaforo", "pare", "passou no vermelho", "furou sinal", "cruzamento", "parada obrigatoria"]
  },
  {
    id: "32", codigo: "612-20", artigo: "214, I",
    descricao: "Deixar de dar preferência de passagem a pedestre e a veículo não motorizado que se encontre na faixa a ele destinada.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Pedestre já havia iniciado a travessia na faixa não semaforizada e o veículo não reduziu a velocidade.\nExemplo 2: Condutor avançou sobre a faixa de pedestres obrigando o transeunte a recuar.\nExemplo 3: Ciclista transitando na ciclovia teve a preferência cortada por veículo que convergia à direita.",
    sinonimos: ["pedestre", "atropelar", "faixa de pedestre", "nao parou na faixa", "preferencia"]
  },
  {
    id: "33", codigo: "604-11", artigo: "207",
    descricao: "Executar operação de conversão à direita em local proibido pela sinalização.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo convergiu à direita desrespeitando a placa R-4a (Proibido virar à direita).\nExemplo 2: Sinalização vertical perfeitamente visível. Autuação sem abordagem.\nExemplo 3: Condutor realizou conversão proibida forçando fluxo transversal a frear.",
    sinonimos: ["conversao proibida", "virar a direita", "virar errado", "entrou na contra mao"]
  },

  // ESTADO DO CONDUTOR E MANUSEIOS
  {
    id: "5", codigo: "736-62", artigo: "252, VI",
    descricao: "Dirigir o veículo utilizando-se de telefone celular.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor visualizado manuseando o aparelho celular na altura do volante com a mão direita.\nExemplo 2: Condutor flagrado segurando aparelho celular encostado na orelha esquerda e falando.\nExemplo 3: Veículo em movimento com condutor digitando mensagem, iluminação natural favorável para visualização.",
    sinonimos: ["telefone", "celular", "whatsapp", "zap", "ligação", "mexendo no celular", "digitando"]
  },
  {
    id: "34", codigo: "734-00", artigo: "252, IV",
    descricao: "Dirigir o veículo usando calçado que não se firme nos pés ou que comprometa a utilização dos pedais.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor abordado dirigindo com chinelos de dedo (sandálias de tiras).\nExemplo 2: Condutor utilizando calçado de salto alto incompatível com os pedais.\nExemplo 3: Veículo abordado, condutor trocou de calçado no local antes de prosseguir.",
    sinonimos: ["chinelo", "descalço", "salto alto", "calcado", "sapato", "havaianas"]
  },
  {
    id: "35", codigo: "731-50", artigo: "252, I",
    descricao: "Dirigir o veículo com o braço do lado de fora.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor transitando pela via com o braço esquerdo totalmente apoiado na porta pelo lado de fora.\nExemplo 2: Autuação realizada com o veículo em movimento, iluminação diurna favorável.\nExemplo 3: Condutor não estava realizando sinalização regulamentar de braço.",
    sinonimos: ["braço de fora", "braço na janela", "escorado na janela", "braco de fora"]
  },
  {
    id: "50", codigo: "520-70", artigo: "169",
    descricao: "Dirigir sem atenção ou sem os cuidados indispensáveis à segurança.",
    gravidade: "Leve", pontos: 3, valor: "R$ 88,38",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor flagrado lendo documento de papel sobre o volante com o veículo em movimento.\nExemplo 2: Condutor ziguezagueando na faixa de rolamento por falta de atenção.\nExemplo 3: Comer ou beber ao volante com o veículo em circulação.",
    sinonimos: ["sem atencao", "distraido", "comendo", "bebendo", "maquiagem", "lendo"]
  },

  // EQUIPAMENTOS DE SEGURANÇA (CINTO)
  {
    id: "6", codigo: "518-51", artigo: "167",
    descricao: "Deixar o condutor de usar o cinto de segurança.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor visualizado sem o cinto de segurança com clareza. Autuação sem abordagem por questões de fluxo.\nExemplo 2: Veículo abordado; cinto encontrava-se afivelado e passado por trás das costas do condutor.\nExemplo 3: Condutor não fazia uso do cinto. Veículo liberado após a colocação do equipamento.",
    sinonimos: ["cinto", "sem cinto", "cinto de segurança", "desafivelado"]
  },
  {
    id: "7", codigo: "518-52", artigo: "167",
    descricao: "Deixar o passageiro de usar o cinto de segurança.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Passageiro do banco dianteiro direito sem utilizar o cinto de segurança.\nExemplo 2: Dois passageiros do banco traseiro não utilizavam o equipamento de segurança.\nExemplo 3: Abordagem efetuada. Falta do cinto constatada no passageiro. Situação regularizada no local.",
    sinonimos: ["cinto", "sem cinto", "passageiro sem cinto", "carona sem cinto"]
  },

  // ESTACIONAMENTO E PARADA
  {
    id: "8", codigo: "538-00", artigo: "181, I",
    descricao: "Estacionar o veículo nas esquinas e a menos de 5m do alinhamento.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Remoção do veículo",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo estacionado a cerca de 2 metros do alinhamento da via transversal.\nExemplo 2: Condutor ausente do local. Acionado serviço de guincho para desobstrução da via.\nExemplo 3: Estacionamento sobre a esquina, prejudicando a visibilidade e raio de giro no cruzamento.",
    sinonimos: ["esquina", "estacionamento", "parado na esquina", "estacionado", "cruzamento"]
  },
  {
    id: "9", codigo: "545-21", artigo: "181, VIII",
    descricao: "Estacionar o veículo no passeio (calçada) ou faixa de pedestres.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Remoção do veículo",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo estacionado com quatro rodas sobre o passeio destinado a pedestres.\nExemplo 2: Veículo bloqueando parcialmente a faixa de travessia de pedestres.\nExemplo 3: Estacionamento sobre calçada forçando os pedestres a utilizarem a rua para transitar.",
    sinonimos: ["calçada", "passeio", "faixa de pedestre", "estacionamento irregular", "em cima da calçada"]
  },
  {
    id: "36", codigo: "546-00", artigo: "181, IX",
    descricao: "Estacionar o veículo onde houver guia de calçada (meio-fio) rebaixada destinada à entrada ou saída de veículos.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Remoção do veículo",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo obstruindo totalmente a saída da garagem da residência nº 100.\nExemplo 2: Acionado via COPOM por morador impedido de sair com seu carro. Guincho acionado.\nExemplo 3: Condutor chegou ao local durante o acionamento do guincho, retirando o veículo.",
    sinonimos: ["garagem", "guia rebaixada", "porta da garagem", "trancando garagem", "meio fio"]
  },
  {
    id: "37", codigo: "552-50", artigo: "181, XV",
    descricao: "Estacionar o veículo na contramão de direção.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo estacionado perfeitamente paralelo ao bordo da pista, porém com a frente voltada contra o sentido regulamentado da via.\nExemplo 2: Estacionamento contramão em rua de duplo sentido.\nExemplo 3: Autuação sem abordagem por veículo estacionado desrespeitando o fluxo.",
    sinonimos: ["estacionado na contramao", "parado na contramao", "direcao contraria"]
  },
  {
    id: "10", codigo: "554-12", artigo: "181, XVII",
    descricao: "Estacionar em vaga de deficiente sem credencial.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Remoção do veículo",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo estacionado em vaga sinalizada para PCD (placa R-6b), não exibindo credencial no painel.\nExemplo 2: Exibia credencial de PCD porém vencida na data de DD/MM/AAAA.\nExemplo 3: Local devidamente sinalizado horizontalmente e verticalmente. Condutor não encontrado.",
    sinonimos: ["vaga especial", "deficiente", "pcd", "cadeirante", "sem cartao", "sem credencial"]
  },
  {
    id: "11", codigo: "555-00", artigo: "181, XVIII",
    descricao: "Estacionar em vaga de idoso sem credencial.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Remoção do veículo",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo posicionado em vaga de idoso, sem nenhuma credencial obrigatória visível no painel.\nExemplo 2: Condutor abordado ao chegar ao veículo, informou não possuir credencial de idoso.\nExemplo 3: Vaga com demarcação e sinalização R-6b perfeita. Veículo removido ao pátio.",
    sinonimos: ["vaga especial", "idoso", "sem cartao", "velho", "sem credencial"]
  },

  // DOCUMENTAÇÃO E ESTADO DO CONDUTOR (CNH / ALCOOL)
  {
    id: "12", codigo: "501-00", artigo: "162, I",
    descricao: "Dirigir veículo sem possuir CNH, PPD ou ACC.",
    gravidade: "Gravíssima (Multiplicador 3x)", pontos: 7, valor: "R$ 880,41",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo",
    competencia: "Estadual", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor consultado via sistema e constatado que não possui registro de CNH.\nExemplo 2: Veículo retido no local e liberado posteriormente a condutor habilitado.\nExemplo 3: Lavrado Termo de Constatação pois condutor alegou não portar documentos, mas na consulta confirmou-se ser inabilitado.",
    sinonimos: ["sem cnh", "nao habilitado", "sem carteira", "inabilitado", "menor", "sem documento"]
  },
  {
    id: "13", codigo: "502-91", artigo: "162, II",
    descricao: "Dirigir veículo com CNH, PPD ou ACC cassada ou suspensa.",
    gravidade: "Gravíssima (Multiplicador 3x)", pontos: 7, valor: "R$ 880,41",
    penalidade: "Multa e Recolhimento da CNH", medidaAdministrativa: "Retenção do veículo",
    competencia: "Estadual", infrator: "Condutor",
    observacoes: "Exemplo 1: Constatado via sistema suspensão do direito de dirigir ativa (Processo XXXXX).\nExemplo 2: CNH física recolhida mediante recibo e encaminhada ao DETRAN.\nExemplo 3: Veículo entregue para pessoa habilitada apresentada no local após lavratura do auto.",
    sinonimos: ["cnh suspensa", "cassada", "carteira bloqueada", "direito de dirigir suspenso"]
  },
  {
    id: "14", codigo: "503-71", artigo: "162, III",
    descricao: "Dirigir veículo com CNH de categoria diferente.",
    gravidade: "Gravíssima (Multiplicador 2x)", pontos: 7, valor: "R$ 586,94",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo",
    competencia: "Estadual", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor habilitado na categoria B conduzindo motocicleta (exige A).\nExemplo 2: Condutor categoria C dirigindo ônibus de transporte de passageiros (exige D).\nExemplo 3: Veículo não sofreu remoção pois o condutor apresentou pessoa habilitada na categoria exigida.",
    sinonimos: ["categoria errada", "cat b na moto", "cat a no carro", "cnh diferente"]
  },
  {
    id: "15", codigo: "504-50", artigo: "162, V",
    descricao: "Dirigir veículo com validade da CNH vencida há mais de 30 dias.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Recolhimento CNH e Retenção",
    competencia: "Estadual", infrator: "Condutor",
    observacoes: "Exemplo 1: CNH do condutor vencida em DD/MM/AAAA (há mais de 30 dias).\nExemplo 2: Recolhimento físico do documento CNH número XXXX.\nExemplo 3: Condutor ciente de que só poderá voltar a dirigir após renovação. Veículo liberado a terceiro.",
    sinonimos: ["cnh vencida", "carteira vencida", "mais de 30 dias", "validade expirada"]
  },
  {
    id: "16", codigo: "516-91", artigo: "165",
    descricao: "Dirigir sob a influência de álcool.",
    gravidade: "Gravíssima (Multiplicador 10x)", pontos: 7, valor: "R$ 2.934,70",
    penalidade: "Multa e Suspensão", medidaAdministrativa: "Recolhimento CNH e Retenção",
    competencia: "Estadual/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Teste do etilômetro marca X, nº de série Y, mediu 0,20 mg/L de ar alveolar às HH:MM.\nExemplo 2: Condutor apresentou sinais notórios: olhos vermelhos, odor etílico e agressividade, conforme Termo de Constatação.\nExemplo 3: CNH recolhida. Condutor encaminhado à delegacia (se crime de trânsito - art. 306).",
    sinonimos: ["bebado", "alcool", "bafometro", "embriagado", "etilometro", "cerveja", "bebeu"]
  },
  {
    id: "17", codigo: "516-92", artigo: "165-A",
    descricao: "Recusar-se a ser submetido a teste (Bafômetro).",
    gravidade: "Gravíssima (Multiplicador 10x)", pontos: 7, valor: "R$ 2.934,70",
    penalidade: "Multa e Suspensão", medidaAdministrativa: "Recolhimento CNH e Retenção",
    competencia: "Estadual/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Oferecido teste do etilômetro marca X série Y, o condutor recusou-se verbalmente.\nExemplo 2: Condutor não apresentava sinais visíveis de embriaguez, mas recusou submissão ao equipamento.\nExemplo 3: CNH recolhida. Veículo liberado para condutor habilitado Z que realizou teste constando 0,00 mg/L.",
    sinonimos: ["recusa", "nao soprou", "bafometro", "recusou bafometro", "etilometro", "alcool"]
  },

  // ESTADO DO VEÍCULO E DOCUMENTAÇÃO
  {
    id: "18", codigo: "659-92", artigo: "230, V",
    descricao: "Conduzir o veículo não registrado e licenciado.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa e Apreensão", medidaAdministrativa: "Remoção do Veículo",
    competencia: "Estadual", infrator: "Proprietário",
    observacoes: "Exemplo 1: Veículo consultado via sistema apresentando último licenciamento no ano de 2021.\nExemplo 2: CRLV apresentado não estava atualizado e no sistema constam restrições financeiras impedindo o licenciamento.\nExemplo 3: Veículo foi removido pelo guincho da corporação ao pátio municipal.",
    sinonimos: ["licenciamento atrasado", "ipva", "documento atrasado", "sem crlv", "doc atrasado", "veiculo atrasado"]
  },
  {
    id: "19", codigo: "661-02", artigo: "230, VII",
    descricao: "Conduzir o veículo com a cor ou característica alterada sem certificado.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo para regularização",
    competencia: "Estadual", infrator: "Proprietário",
    observacoes: "Exemplo 1: Veículo com suspensão rebaixada fixamente, constando altura de 80mm e sem anotação no CRLV.\nExemplo 2: Veículo originalmente prata, totalmente envelopado de preto fosco sem regularização documental.\nExemplo 3: Faróis com instalação de luz de xenônio não original de fábrica, cor incompatível.",
    sinonimos: ["rebaixado", "suspensao ar", "envelopado", "xenon", "led", "caracteristica alterada", "cor diferente", "tunado"]
  },
  {
    id: "20", codigo: "663-71", artigo: "230, IX",
    descricao: "Conduzir o veículo sem equipamento obrigatório ou estando este ineficiente ou inoperante.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo para regularização",
    competencia: "Estadual/Rodoviário", infrator: "Proprietário",
    observacoes: "Exemplo 1: Pneu traseiro esquerdo desgastado abaixo dos sulcos de segurança (TWI) apresentando arames.\nExemplo 2: Veículo transitando à noite sem iluminação do farol dianteiro direito.\nExemplo 3: Limpador de para-brisa inoperante durante chuva, gerando risco.",
    sinonimos: ["pneu careca", "sem estepe", "farol queimado", "luz de freio", "retrovisor quebrado", "equipamento ineficiente", "twi"]
  },
  {
    id: "21", codigo: "672-61", artigo: "230, XVIII",
    descricao: "Conduzir o veículo em mau estado de conservação, comprometendo a segurança.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo para regularização",
    competencia: "Estadual/Rodoviário", infrator: "Proprietário",
    observacoes: "Exemplo 1: Para-brisa com trinca severa em formato de teia na linha de visão do condutor.\nExemplo 2: Lataria dianteira amassada com pontas cortantes expondo risco a pedestres.\nExemplo 3: Vazamento contínuo de óleo de motor na pista durante a circulação.",
    sinonimos: ["parabrisa trincado", "lata rasgada", "vazamento de oleo", "lataria solta", "podre", "caindo aos pedaços", "sucata"]
  },
  {
    id: "22", codigo: "640-80", artigo: "221",
    descricao: "Portar no veículo placas de identificação em desacordo com as especificações e modelos do CONTRAN.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Retenção e apreensão das placas irregulares",
    competencia: "Estadual", infrator: "Proprietário",
    observacoes: "Exemplo 1: Placa traseira Mercosul sem legibilidade nas duas últimas letras devido a desgaste.\nExemplo 2: Placa dianteira com película refletiva descascada e furos nos caracteres.\nExemplo 3: Uso de fonte não oficial nas placas veiculares.",
    sinonimos: ["placa ilegivel", "placa apagada", "letra torta", "placa fora do padrao", "adesivo na placa"]
  },
  {
    id: "23", codigo: "665-31", artigo: "230, XI",
    descricao: "Conduzir o veículo com descarga livre ou silenciador de motor de explosão defeituoso, deficiente ou inoperante.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo para regularização",
    competencia: "Estadual/Rodoviário", infrator: "Proprietário",
    observacoes: "Exemplo 1: Motocicleta com escapamento tipo 'torbal', emitindo ruído excessivo em descarga livre.\nExemplo 2: Veículo automóvel com silenciador perfurado (podre) emitindo fumaça e barulho anormal.\nExemplo 3: Equipamento silenciador removido de propósito pelo condutor.",
    sinonimos: ["escapamento", "torbal", "barulhento", "sem escape", "cano de descarga", "estourando", "silenciador", "so o cano"]
  },
  {
    id: "40", codigo: "653-00", artigo: "228",
    descricao: "Usar no veículo equipamento com som em volume ou freqüência que não sejam autorizados pelo CONTRAN.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Retenção do veículo",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo com porta-malas aberto emitindo som audível pelo lado de externo perturbando o sossego.\nExemplo 2: Som automotivo (paredão) em volume excessivo em via pública.\nExemplo 3: Autuação conforme Resolução 624/16 do CONTRAN, ruído audível do lado de fora do veículo.",
    sinonimos: ["som alto", "paredao", "caixa de som", "perturbacao", "musica alta"]
  },

  // MANOBRAS E CONTRAMÃO
  {
    id: "24", codigo: "581-91", artigo: "193",
    descricao: "Transitar com o veículo em calçadas, passeios, passarelas, ciclovias, divisores de pista de rolamento e acostamentos.",
    gravidade: "Gravíssima (Multiplicador 3x)", pontos: 7, valor: "R$ 880,41",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Motocicleta utilizou calçada lateral por 20 metros para furar o congestionamento.\nExemplo 2: Veículo transitando pela ciclovia demarcada, forçando o desvio de ciclistas.\nExemplo 3: Transitar sobre o passeio, causando iminente perigo aos pedestres no local.",
    sinonimos: ["pela calçada", "ciclovia", "andando no passeio", "cortando caminho", "furando fila na calçada"]
  },
  {
    id: "25", codigo: "572-00", artigo: "186, I",
    descricao: "Transitar pela contramão de direção em vias com duplo sentido de circulação.",
    gravidade: "Grave", pontos: 5, valor: "R$ 195,23",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo transitou por faixa amarela na contramão apenas para desviar de buracos.\nExemplo 2: Invadiu a pista contrária por 50 metros em uma reta (via de duplo sentido não separada por canteiro).\nExemplo 3: Condutor cortou trecho na contramão para entrar no posto de gasolina rapidamente.",
    sinonimos: ["contramão", "pista contraria", "sentido oposto"]
  },
  {
    id: "26", codigo: "573-80", artigo: "186, II",
    descricao: "Transitar pela contramão de direção em vias com sinalização de regulamentação de sentido único.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo trafegando sentido centro-bairro em via regulamentada com placa R-24a de sentido único inverso.\nExemplo 2: Entrou na rua ignorando a sinalização R-3 (sentido proibido).\nExemplo 3: Deu marcha à ré prolongada contramão, configurando trânsito em sentido proibido.",
    sinonimos: ["contramão", "sentido proibido", "rua errada", "na contra mao", "entrando errado"]
  },
  {
    id: "27", codigo: "596-70", artigo: "203, V",
    descricao: "Ultrapassar pela contramão outro veículo onde houver marcação viária longitudinal contínua amarela.",
    gravidade: "Gravíssima (Multiplicador 5x)", pontos: 7, valor: "R$ 1.467,35",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Rodoviário/Municipal", infrator: "Condutor",
    observacoes: "Exemplo 1: Ultrapassagem realizada sobre linha dupla amarela contínua (LFO-3).\nExemplo 2: Veículo forçou ultrapassagem em aclive sem visibilidade nenhuma do fluxo contrário.\nExemplo 3: Ultrapassou caminhão sobre a ponte de faixa contínua, forçando veículos a frearem.",
    sinonimos: ["faixa continua", "ultrapassagem proibida", "cortando em linha amarela", "ultrapassar na curva", "ponte"]
  },
  {
    id: "28", codigo: "527-41", artigo: "175",
    descricao: "Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento ou arrastamento de pneus.",
    gravidade: "Gravíssima (Multiplicador 10x)", pontos: 7, valor: "R$ 2.934,70",
    penalidade: "Multa, Suspensão e Apreensão", medidaAdministrativa: "Recolhimento CNH e Remoção",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor efetuou arrancada brusca cantando pneus excessivamente.\nExemplo 2: Veículo fez manobra tipo 'cavalo de pau' na via pública próximo a pedestres.\nExemplo 3: Condutor de motocicleta efetuando exibicionismo com derrapagem e perda de tração traseira (zerinho).",
    sinonimos: ["manobra", "cavalo de pau", "borrachao", "zerinho", "cantando pneu", "drift", "exibicao", "racha"]
  },

  // MOTOCICLETAS
  {
    id: "29", codigo: "703-01", artigo: "244, I",
    descricao: "Conduzir motocicleta, motoneta ou ciclomotor sem usar capacete de segurança ou vestuário de acordo com as normas.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa e Suspensão", medidaAdministrativa: "Retenção e recolhimento CNH",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor pilotando motocicleta sem qualquer capacete protetor.\nExemplo 2: Capacete repousando sobre o tanque da motocicleta enquanto transitava.\nExemplo 3: Condutor autuado sem capacete; abordado, CNH recolhida para posterior processo de suspensão.",
    sinonimos: ["sem capacete", "capacete no braço", "cabeça descoberta"]
  },
  {
    id: "30", codigo: "704-81", artigo: "244, II",
    descricao: "Conduzir motocicleta transportando passageiro sem o capacete de segurança.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa e Suspensão", medidaAdministrativa: "Retenção e recolhimento CNH",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Passageiro na garupa transitando sem capacete protetor, enquanto o condutor utilizava.\nExemplo 2: Garupa segurando o capacete no braço sem fazer o uso correto da fixação jugular.\nExemplo 3: Falta de capacete no passageiro resultou na retenção da moto e recolhimento da CNH do condutor responsável.",
    sinonimos: ["garupa sem capacete", "passageiro moto", "carona sem capacete"]
  },
  {
    id: "31", codigo: "705-61", artigo: "244, III",
    descricao: "Conduzir motocicleta/motoneta/ciclomotor fazendo malabarismo/equilibrando-se em uma roda.",
    gravidade: "Gravíssima", pontos: 7, valor: "R$ 293,47",
    penalidade: "Multa e Suspensão", medidaAdministrativa: "Retenção do veículo e Recolhimento da CNH",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor flagrado empinando a motocicleta por cerca de 30 metros na via pública.\nExemplo 2: Motociclista acelerou bruscamente levantando a roda dianteira (dando grau) perante a viatura.\nExemplo 3: Condutor realizando malabarismo em cima do banco da motocicleta em movimento.",
    sinonimos: ["grau", "dando grau", "empinando", "uma roda", "malabarismo", "empinar", "cortando giro na roda"]
  },
  {
    id: "41", codigo: "706-40", artigo: "244, IV",
    descricao: "Conduzir motocicleta com os faróis apagados.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Condutor pilotando motocicleta durante o dia com o farol dianteiro totalmente apagado.\nExemplo 2: Farol com defeito na lâmpada não acendendo o feixe de luz obrigatório.\nExemplo 3: Condutor avisado, não consertou e seguiu viagem com farol apagado.",
    sinonimos: ["farol apagado moto", "sem luz na moto", "lampada queimada moto"]
  },
  
  // FARÓIS (CARRO)
  {
    id: "42", codigo: "723-40", artigo: "250, I, a",
    descricao: "Quando o veículo estiver em movimento, deixar de manter acesa a luz baixa durante a noite.",
    gravidade: "Média", pontos: 4, valor: "R$ 130,16",
    penalidade: "Multa", medidaAdministrativa: "Não há",
    competencia: "Estadual/Municipal/Rodoviário", infrator: "Condutor",
    observacoes: "Exemplo 1: Veículo transitando às 21h com os faróis totalmente apagados em via pública iluminada.\nExemplo 2: Condutor utilizando apenas a luz de posição (lanterna/farolete) à noite, contrariando o uso da luz baixa.\nExemplo 3: Autuação realizada sem abordagem.",
    sinonimos: ["farol apagado", "noite", "sem luz", "farolete", "lanterna"]
  }
];
