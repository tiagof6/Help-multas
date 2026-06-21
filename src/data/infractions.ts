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
  exemplosObservacao?: string[];
}

export const infractionsData: Infraction[] = [
  {
    "id": "751-01",
    "codigo": "751-01",
    "artigo": "Art. 95.",
    "descricao": "Iniciar obra perturbe/interrompa circulação/segurança veíc/pedestre s/permissão.",
    "gravidade": "Não aplicável",
    "pontos": 0,
    "valor": "Não aplicável",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "751-02",
    "codigo": "751-02",
    "artigo": "Art. 95.",
    "descricao": "Iniciar evento perturbe/interrompa circulação/segurança veíc/pedestre s/permissão.",
    "gravidade": "Não aplicável",
    "pontos": 0,
    "valor": "Não aplicável",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "752-81",
    "codigo": "752-81",
    "artigo": "Art. 95, §1º.",
    "descricao": "Não sinalizar a execução ou manutenção da obra.",
    "gravidade": "Não aplicável",
    "pontos": 0,
    "valor": "Não aplicável",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "752-82",
    "codigo": "752-82",
    "artigo": "Art. 95, §1º.",
    "descricao": "Não sinalizar a execução ou manutenção do evento.",
    "gravidade": "Não aplicável",
    "pontos": 0,
    "valor": "Não aplicável",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "501-00",
    "codigo": "501-00",
    "artigo": "Art. 162, I.",
    "descricao": "Dirigir veículo sem possuir CNH, PPD ou ACC.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "502-91",
    "codigo": "502-91",
    "artigo": "Art. 162, II.",
    "descricao": "Dirigir veículo com CNH, PPD ou ACC cassada.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "502-92",
    "codigo": "502-92",
    "artigo": "Art. 162, II.",
    "descricao": "Dirigir veículo com CNH, PPD ou ACC com suspensão do direito de dirigir.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "503-71",
    "codigo": "503-71",
    "artigo": "Art. 162, III.",
    "descricao": "Dirigir veículo com CNH de categoria diferente da do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "503-72",
    "codigo": "503-72",
    "artigo": "Art. 162, III.",
    "descricao": "Dirigir veículo com PPD de categoria diferente da do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "505-31",
    "codigo": "505-31",
    "artigo": "Art. 162, VI.",
    "descricao": "Dirigir veículo sem usar lentes corretoras de visão.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até o saneamento da irregularidade ou apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "505-32",
    "codigo": "505-32",
    "artigo": "Art. 162, VI.",
    "descricao": "Dirigir veículo sem usar aparelho auxiliar de audição.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até o saneamento da irregularidade ou apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "505-33",
    "codigo": "505-33",
    "artigo": "Art. 162, VI.",
    "descricao": "Dirigir veículo sem usar aparelho auxiliar de prótese física.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até o saneamento da irregularidade ou apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "505-34",
    "codigo": "505-34",
    "artigo": "Art. 162, VI.",
    "descricao": "Dirigir veículo s/ adaptações impostas na concessão/renovação licença conduzir.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até o saneamento da irregularidade ou apresentação de condutor habilitado. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "774-91",
    "codigo": "774-91",
    "artigo": "Art. 162, VII.",
    "descricao": "Dirigir veículo sem possuir cursos especializados obrigatórios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "774-92",
    "codigo": "774-92",
    "artigo": "Art. 162, VII.",
    "descricao": "Dirigir veículo sem possuir cursos específicos obrigatórios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "506-10",
    "codigo": "506-10",
    "artigo": "Art. 163 c/c 162, I.",
    "descricao": "Entregar veículo a pessoa sem CNH, PPD ou ACC.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "507-01",
    "codigo": "507-01",
    "artigo": "Art. 163 c/c 162, II.",
    "descricao": "Entregar veículo a pessoa com CNH, PPD ou ACC Cassada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "507-02",
    "codigo": "507-02",
    "artigo": "Art. 163 c/c 162, II.",
    "descricao": "Entregar veículo a pessoa com CNH, PPD ou ACC com Suspensão do Direito de Dirigir.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "508-81",
    "codigo": "508-81",
    "artigo": "Art. 163 c/c 162, III",
    "descricao": "Entregar veículo a pessoa com CNH de categoria diferente da do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "508-82",
    "codigo": "508-82",
    "artigo": "Art. 163 c/c 162, III.",
    "descricao": "Entregar veículo a pessoa com PPD de categoria diferente da do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "509-60",
    "codigo": "509-60",
    "artigo": "Art. 163 c/c 162, V.",
    "descricao": "Entregar veículo a pessoa com CNH vencida há mais de 30 dias.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "510-01",
    "codigo": "510-01",
    "artigo": "Art. 163 c/c 162, VI.",
    "descricao": "Entregar o veículo a pessoa sem usar lentes corretoras de visão.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "510-02",
    "codigo": "510-02",
    "artigo": "Art. 163 c/c 162, VI.",
    "descricao": "Entregar o veículo a pessoa sem usar aparelho auxiliar de audição.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "510-03",
    "codigo": "510-03",
    "artigo": "Art. 163 c/c 162, VI.",
    "descricao": "Entregar o veículo a pessoa sem aparelho de prótese física.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "510-04",
    "codigo": "510-04",
    "artigo": "Art. 163 c/c 162, VI.",
    "descricao": "Entregar veíc pessoa s/ adaptações impostas concessão/renovação licença conduzir.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "777-31",
    "codigo": "777-31",
    "artigo": "Art. 163 c/c 162, VII.",
    "descricao": "Entregar veículo a pessoa sem possuir cursos especializados obrigatórios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "777-32",
    "codigo": "777-32",
    "artigo": "Art. 163 c/c 162, VII.",
    "descricao": "Entregar veículo a pessoa sem possuir cursos específicos obrigatórios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "511-80",
    "codigo": "511-80",
    "artigo": "Art. 164 c/c 162, I.",
    "descricao": "Permitir posse e condução do veículo a pessoa sem CNH, PPD ou ACC.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "512-61",
    "codigo": "512-61",
    "artigo": "Art. 164 c/c 162, II.",
    "descricao": "Permitir posse e condução do veículo à pessoa com CNH, PPD ou ACC Cassada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "512-62",
    "codigo": "512-62",
    "artigo": "Art. 164 c/c 162, II.",
    "descricao": "Permitir posse/condução do veículo a pessoa com CNH, PPD ou ACC c/ susp. direito de dirigir.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "513-41",
    "codigo": "513-41",
    "artigo": "Art. 164 c/c 162, III.",
    "descricao": "Permitir posse e condução do veículo a pessoa com CNH de categoria diferente da do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "513-42",
    "codigo": "513-42",
    "artigo": "Art. 164 c/c 162, III.",
    "descricao": "Permitir posse e condução do veículo à pessoa com PPD de categoria diferente da do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "514-20",
    "codigo": "514-20",
    "artigo": "Art. 164 c/c 162, V.",
    "descricao": "Permitir posse e condução do veículo à pessoa com CNH vencida há mais de 30 dias.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "515-01",
    "codigo": "515-01",
    "artigo": "Art. 164 c/c 162, VI.",
    "descricao": "Permitir posse e condução do veículo a pessoa sem usar lentes corretoras de visão.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "515-02",
    "codigo": "515-02",
    "artigo": "Art. 164 c/c 162, VI.",
    "descricao": "Permitir posse e condução do veículo a pessoa sem usar aparelho auxiliar de audição.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "515-03",
    "codigo": "515-03",
    "artigo": "Art. 164 c/c 162, VI.",
    "descricao": "Permitir posse/condução do veículo à pessoa sem usar aparelho de prótese física.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "515-04",
    "codigo": "515-04",
    "artigo": "Art. 164 c/c 162, VI.",
    "descricao": "Permitir posse/cond veíc. s/ adaptações impostas concessão/renovação licença cond.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "778-11",
    "codigo": "778-11",
    "artigo": "Art. 164 c/c 162, VII.",
    "descricao": "Permitir posse e condução do veículo à pessoa sem possuir cursos especializados obrigatórios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "778-12",
    "codigo": "778-12",
    "artigo": "Art. 164 c/c 162, VII.",
    "descricao": "Permitir posse e condução do veículo à pessoa sem possuir cursos específicos obrigatórios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação de condutor habilitado. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "516-92",
    "codigo": "516-92",
    "artigo": "Art. 165.",
    "descricao": "Dirigir sob influência de substância psicoativa que determine dependência.",
    "gravidade": "Gravíssima (10x)",
    "pontos": 0,
    "valor": "R$ 2934,70",
    "penalidade": "Multa (10 vezes) e suspensão do direito de dirigir por 12 (doze) meses.",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e retenção do veículo, observado o disposto no § 4º do art. 270 do CTB. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor apresentou sinais notórios de embriaguez: hálito etílico e fala alterada.",
      "Condutor recusou-se a realizar o teste do etilômetro (bafômetro).",
      "Teste do etilômetro realizado com resultado positivo para alcoolemia.",
      "Condutor encaminhado à delegacia devido ao alto teor alcoólico constatado."
    ]
  },
  {
    "id": "757-90",
    "codigo": "757-90",
    "artigo": "Art. 165-A.",
    "descricao": "Rec sub test, ex clin, peric ou proc q perm cert infl álc/sub psic for art. 277.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X) e suspensão do direito de dirigir por 12 (doze) meses",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e retenção do veículo, observado o disposto no § 4º do art. 270. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "764-10",
    "codigo": "764-10",
    "artigo": "Art. 165-B.",
    "descricao": "Cond veíc exig hab C, D ou E sem realizar ex toxic prev no § 2º do art 148-A, após 30 dias do venc.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X) e suspensão do direito de dirigir por 3 (três) meses.",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "765-00",
    "codigo": "765-00",
    "artigo": "Art. 165-B, parágrafo único.",
    "descricao": "Exerc at rem veíc e não compr a real ex toxic per ex p § 2º do art 148-A por oc ren hab C, D ou E",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X) e suspensão do direito de dirigir por 3 (três) meses.",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "517-70",
    "codigo": "517-70",
    "artigo": "Art. 166.",
    "descricao": "Confiar/entregar veíc pess c/estado físico/psíquico s/ condições dirigir segur.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "518-51",
    "codigo": "518-51",
    "artigo": "Art. 167.",
    "descricao": "Deixar o condutor de usar o cinto de segurança.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a colocação do cinto pelo infrator (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor visualizado conduzindo o veículo em via pública sem o uso do cinto de segurança.",
      "Passageiro do banco dianteiro direito sem utilizar o cinto de segurança no momento da abordagem.",
      "Passageiro do banco traseiro não utilizava o cinto de segurança.",
      "Condutor não utilizava cinto de segurança. Abordagem não realizada por motivo de segurança."
    ]
  },
  {
    "id": "518-52",
    "codigo": "518-52",
    "artigo": "Art. 167.",
    "descricao": "Deixar o passageiro de usar o cinto de segurança.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a colocação do cinto pelo infrator. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor visualizado conduzindo o veículo em via pública sem o uso do cinto de segurança.",
      "Passageiro do banco dianteiro direito sem utilizar o cinto de segurança no momento da abordagem.",
      "Passageiro do banco traseiro não utilizava o cinto de segurança.",
      "Condutor não utilizava cinto de segurança. Abordagem não realizada por motivo de segurança."
    ]
  },
  {
    "id": "520-70",
    "codigo": "520-70",
    "artigo": "Art. 169.",
    "descricao": "Dirigir sem atenção ou sem os cuidados indispensáveis à segurança.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "521-51",
    "codigo": "521-51",
    "artigo": "Art. 170.",
    "descricao": "Dirigir ameaçando os pedestres que estejam atravessando a via pública.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo e recolhimento do documento de habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "521-52",
    "codigo": "521-52",
    "artigo": "Art. 170.",
    "descricao": "Dirigir ameaçando os demais veículos.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo e recolhimento do documento de habilitação. (Vide Parte Geral deste Código).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "522-31",
    "codigo": "522-31",
    "artigo": "Art. 171.",
    "descricao": "Usar veículo para arremessar sobre os pedestres água ou detritos.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "522-32",
    "codigo": "522-32",
    "artigo": "Art. 171.",
    "descricao": "Usar veículo para arremessar sobre os veículos água ou detritos.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "523-11",
    "codigo": "523-11",
    "artigo": "Art. 172.",
    "descricao": "Atirar do veículo objetos ou substâncias.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "523-12",
    "codigo": "523-12",
    "artigo": "Art. 172.",
    "descricao": "Abandonar na via objetos ou substâncias.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "524-00",
    "codigo": "524-00",
    "artigo": "Art. 173.",
    "descricao": "Disputar corrida.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10x) Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "525-81",
    "codigo": "525-81",
    "artigo": "Art. 174.",
    "descricao": "Promover na via competição sem permissão.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X)",
    "medidaAdministrativa": "Não Aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoas Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "525-82",
    "codigo": "525-82",
    "artigo": "Art. 174.",
    "descricao": "Promover na via eventos organizados sem permissão.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X)",
    "medidaAdministrativa": "Não Aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoas Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "525-83",
    "codigo": "525-83",
    "artigo": "Art. 174.",
    "descricao": "Promover na via exibição e demonstração de perícia em manobra de veículo s/perm.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X)",
    "medidaAdministrativa": "Não Aplicável",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoas Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "526-61",
    "codigo": "526-61",
    "artigo": "Art. 174.",
    "descricao": "Participar na via como condutor em competição sem permissão.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X) suspensão do direito de dirigir",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e remoção do veículo (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "526-62",
    "codigo": "526-62",
    "artigo": "Art. 174.",
    "descricao": "Participar na via como condutor em evento organizado, sem permissão.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X) e suspensão do direito de dirigir.",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e remoção do veículo (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "526-63",
    "codigo": "526-63",
    "artigo": "Art. 174.",
    "descricao": "Participar como condutor exib/demonst perícia em manobra de veic, s/ permissão.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10X) e suspensão do direito de dirigir.",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e remoção do veículo (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "527-41",
    "codigo": "527-41",
    "artigo": "Art. 175.",
    "descricao": "Utiliz veíc demonst/exibir manobra perigosa mediante arrancada brusca.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (dez vezes), suspensão do direito de dirigir",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e remoção do veículo. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "527-42",
    "codigo": "527-42",
    "artigo": "Art. 175.",
    "descricao": "Utiliz veíc dem/exibir manob perig med derrap/frenag c/ desliz/arrast pneus.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (dez vezes), suspensão do direito de dirigir",
    "medidaAdministrativa": "Recolhimento do documento de habilitação e remoção do veículo. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "528-20",
    "codigo": "528-20",
    "artigo": "Art. 176, I.",
    "descricao": "Deixar o cond envolvido em acidente, de prestar ou providenciar socorro à vítima.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X) e Suspensão do direito de dirigir",
    "medidaAdministrativa": "Recolhimento do Documento de Habilitação.",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "529-00",
    "codigo": "529-00",
    "artigo": "Art. 176, II.",
    "descricao": "Deixar o cond envolvido em acid, de adotar provid p/ evitar perigo p/o trânsito.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X) e Suspensão do direito de dirigir",
    "medidaAdministrativa": "Recolhimento do Documento de Habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "530-40",
    "codigo": "530-40",
    "artigo": "Art. 176, III.",
    "descricao": "Deixar o cond envolvido em acidente de preservar local p/ trab polícia/perícia.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X) e Suspensão do direito de dirigir",
    "medidaAdministrativa": "",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "531-20",
    "codigo": "531-20",
    "artigo": "Art. 176, IV.",
    "descricao": "Deixar o cond envolvido em acid, de remover o veíc local qdo determ polic/agente.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X) e Suspensão do direito de dirigir",
    "medidaAdministrativa": "Recolhimento do Documento de Habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "532-00",
    "codigo": "532-00",
    "artigo": "Art. 176, V.",
    "descricao": "Deixar o cond envolvido em acid, de identificar-se policial e prestar inf p/o BO.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X e Suspensão do direito de dirigir)",
    "medidaAdministrativa": "Recolhimento do Documento de Habilitação.",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "533-90",
    "codigo": "533-90",
    "artigo": "Art. 177.",
    "descricao": "Deixar o cond de prestar socorro vítima acid de trânsito, qdo solicit p/ agente.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "534-70",
    "codigo": "534-70",
    "artigo": "Art. 178.",
    "descricao": "Deixar o condutor envolvido em acidente s/ vítima, de remover o veículo do local.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "535-50",
    "codigo": "535-50",
    "artigo": "Art. 179, I.",
    "descricao": "Fazer ou deixar que se faça reparo em veíc, em rodovia e via de trânsito rápido.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "536-30",
    "codigo": "536-30",
    "artigo": "Art. 179, II",
    "descricao": "Fazer/deixar que se faça reparo em veíc nas vias (q não rodovia/trânsito rápido)",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "537-10",
    "codigo": "537-10",
    "artigo": "Art. 180.",
    "descricao": "Ter seu veículo imobilizado na via por falta de combustível.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "538-00",
    "codigo": "538-00",
    "artigo": "Art. 181, I.",
    "descricao": "Estacionar nas esquinas e a menos de 5m do alinhamento da via transversal.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "539-80",
    "codigo": "539-80",
    "artigo": "Art. 181, II",
    "descricao": "Estacionar afastado da guia da calçada (meio-fio) de 50cm a 1m.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "540-10",
    "codigo": "540-10",
    "artigo": "Art. 181, III.",
    "descricao": "Estacionar afastado da guia da calçada (meio-fio) a mais de 1m.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "541-00",
    "codigo": "541-00",
    "artigo": "Art. 181, IV.",
    "descricao": "Estacionar em desacordo com as posições estabelecidas no CTB.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "542-81",
    "codigo": "542-81",
    "artigo": "Art. 181, V.",
    "descricao": "Estacionar na pista de rolamento das estradas.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "542-82",
    "codigo": "542-82",
    "artigo": "Art. 181, V.",
    "descricao": "Estacionar na pista de rolamento das rodovias.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "542-83",
    "codigo": "542-83",
    "artigo": "Art. 181, V.",
    "descricao": "Estacionar na pista de rolamento das vias de trânsito rápido.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "542-84",
    "codigo": "542-84",
    "artigo": "Art. 181, V.",
    "descricao": "Estacionar na pista de rolamento das vias dotadas de acostamento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "543-60",
    "codigo": "543-60",
    "artigo": "Art. 181, VI.",
    "descricao": "Estacionar junto/sobre hidrantes de incêndio, reg. de água/tampa de poço visit gal sub.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "544-40",
    "codigo": "544-40",
    "artigo": "Art. 181, VII.",
    "descricao": "Estacionar nos acostamentos.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-21",
    "codigo": "545-21",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar no passeio.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-22",
    "codigo": "545-22",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar sobre faixa destinada a pedestre.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-23",
    "codigo": "545-23",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar sobre ciclovia ou ciclofaixa.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-24",
    "codigo": "545-24",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar nas ilhas ou refúgios.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-25",
    "codigo": "545-25",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar ao lado ou sobre canteiro central/divisores de pista de rolamento.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-26",
    "codigo": "545-26",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar ao lado ou sobre marcas de canalização.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "545-27",
    "codigo": "545-27",
    "artigo": "Art. 181, VIII.",
    "descricao": "Estacionar ao lado ou sobre gramado ou jardim público.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "546-00",
    "codigo": "546-00",
    "artigo": "Art. 181, IX.",
    "descricao": "Estacionar em guia de calçada rebaixada destinada à entrada/saída de veículos.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "547-90",
    "codigo": "547-90",
    "artigo": "Art. 181, X.",
    "descricao": "Estacionar impedindo a movimentação de outro veículo.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "548-70",
    "codigo": "548-70",
    "artigo": "Art. 181, XI.",
    "descricao": "Estacionar ao lado de outro veículo em fila dupla.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "549-50",
    "codigo": "549-50",
    "artigo": "Art. 181, XII.",
    "descricao": "Estacionar na área de cruzamento de vias.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "550-90",
    "codigo": "550-90",
    "artigo": "Art. 181, XIII.",
    "descricao": "Estacionar no ponto de embarque/desembarque de passageiros de transporte coletivo.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "551-72",
    "codigo": "551-72",
    "artigo": "Art. 181, XIV.",
    "descricao": "Estacionar nas pontes.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "551-73",
    "codigo": "551-73",
    "artigo": "Art. 181, XIV.",
    "descricao": "Estacionar nos túneis.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "552-50",
    "codigo": "552-50",
    "artigo": "Art. 181, XV.",
    "descricao": "Estacionar na contramão de direção.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "553-30",
    "codigo": "553-30",
    "artigo": "Art. 181, XVI.",
    "descricao": "Estacionar aclive/declive ñ freado e sem calço segurança, PBT superior a 3500 kg.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "554-11",
    "codigo": "554-11",
    "artigo": "Art. 181, XVII.",
    "descricao": "Estacionar em desacordo com a regulamentação especificada pela sinalização.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "554-12",
    "codigo": "554-12",
    "artigo": "Art. 181, XVII.",
    "descricao": "Estacionar em desacordo com a regulamentação - estacionamento rotativo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "554-13",
    "codigo": "554-13",
    "artigo": "Art. 181, XVII.",
    "descricao": "Estacionar em desacordo com a regulamentação - ponto ou vaga de táxi.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "554-14",
    "codigo": "554-14",
    "artigo": "Art. 181, XVII.",
    "descricao": "Estacionar em desacordo com a regulamentação - vaga de carga/descarga.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "554-17",
    "codigo": "554-17",
    "artigo": "Art. 181, XVII.",
    "descricao": "Estacionar em desacordo com a regulamentação - vaga de curta duração.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "555-00",
    "codigo": "555-00",
    "artigo": "Art. 181, XVIII.",
    "descricao": "Estacionar em local/horário proibido especificamente pela sinalização.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou entidade de trânsito municipal e rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "556-80",
    "codigo": "556-80",
    "artigo": "Art. 181, XIX.",
    "descricao": "Estacionar local/horário de estacionamento e parada proibidos pela sinalização.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo. (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "762-51",
    "codigo": "762-51",
    "artigo": "Art. 181, XX.",
    "descricao": "Estacionar nas vagas reserv às pess c/ deficiência, s/ credencial.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "762-52",
    "codigo": "762-52",
    "artigo": "Art. 181, XX.",
    "descricao": "Estacionar nas vagas reserv a idosos, s/ credencial.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo estacionado em local proibido pela sinalização, condutor ausente.",
      "Veículo flagrado estacionado de forma irregular, prejudicando a fluidez do trânsito.",
      "Autuação feita por constatação visual, veículo estacionado sobre a calçada.",
      "Condutor estacionou o veículo em área de cruzamento e ausentou-se do local."
    ]
  },
  {
    "id": "557-60",
    "codigo": "557-60",
    "artigo": "Art. 182, I.",
    "descricao": "Parar nas esquinas e a menos de 5m do bordo do alinhamento da via transversal.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "558-40",
    "codigo": "558-40",
    "artigo": "Art. 182, II.",
    "descricao": "Parar afastado da guia da calçada (meio-fio) de 50cm a 1m.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "559-20",
    "codigo": "559-20",
    "artigo": "Art. 182, III.",
    "descricao": "Parar afastado da guia da calçada (meio-fio) a mais de 1m.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "560-60",
    "codigo": "560-60",
    "artigo": "Art. 182, IV.",
    "descricao": "Parar em desacordo com as posições estabelecidas no CTB.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "561-41",
    "codigo": "561-41",
    "artigo": "Art. 182, V.",
    "descricao": "Parar na pista de rolamento das estradas.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "561-42",
    "codigo": "561-42",
    "artigo": "Art. 182, V.",
    "descricao": "Parar na pista de rolamento das rodovias.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "561-43",
    "codigo": "561-43",
    "artigo": "Art. 182, V.",
    "descricao": "Parar na pista de rolamento das vias de trânsito rápido.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de trânsito municipal e rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "561-44",
    "codigo": "561-44",
    "artigo": "Art. 182, V.",
    "descricao": "Parar na pista de rolamento das demais vias dotadas de acostamento.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "562-21",
    "codigo": "562-21",
    "artigo": "Art. 182, VI.",
    "descricao": "Parar no passeio.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "562-22",
    "codigo": "562-22",
    "artigo": "Art. 182, VI.",
    "descricao": "Parar sobre faixa destinada a pedestres.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "562-23",
    "codigo": "562-23",
    "artigo": "Art. 182, VI.",
    "descricao": "Parar nas ilhas ou refúgios.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "562-24",
    "codigo": "562-24",
    "artigo": "Art. 182, VI.",
    "descricao": "Parar nos canteiros centrais/divisores de pista de rolamento.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "562-25",
    "codigo": "562-25",
    "artigo": "Art. 182, VI.",
    "descricao": "Parar nas marcas de canalização.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "563-00",
    "codigo": "563-00",
    "artigo": "Art. 182, VII.",
    "descricao": "Parar na área de cruzamento de vias.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "564-91",
    "codigo": "564-91",
    "artigo": "Art. 182, VIII.",
    "descricao": "Parar nos viadutos.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "564-92",
    "codigo": "564-92",
    "artigo": "Art. 182, VIII.",
    "descricao": "Parar nas pontes.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "564-93",
    "codigo": "564-93",
    "artigo": "Art. 182, VIII.",
    "descricao": "Parar nos túneis.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "565-70",
    "codigo": "565-70",
    "artigo": "Art. 182, IX.",
    "descricao": "Parar na contramão de direção.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "767-00",
    "codigo": "767-00",
    "artigo": "Art. 182, XI.",
    "descricao": "Parar o veículo sobre ciclovia ou ciclofaixa.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "568-10",
    "codigo": "568-10",
    "artigo": "Art. 184, I.",
    "descricao": "Transitar na faixa/pista da direita regul circulação exclusiva determ veículo.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "569-00",
    "codigo": "569-00",
    "artigo": "Art. 184, II.",
    "descricao": "Transitar na faixa/pista da esquerda regul circulação exclusiva determ veículo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "758-70",
    "codigo": "758-70",
    "artigo": "Art. 184, III.",
    "descricao": "Transitar na faixa ou via exclusiva regulam. p/transp. públ. coletivo passageiro.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "570-30",
    "codigo": "570-30",
    "artigo": "Art. 185, I.",
    "descricao": "Deixar de conservar o veículo na faixa a ele destinada pela sinalização de regul.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "571-10",
    "codigo": "571-10",
    "artigo": "Art. 185, II.",
    "descricao": "Deixar de conservar nas faixas da direita o veículo lento e de maior porte.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "572-00",
    "codigo": "572-00",
    "artigo": "Art. 186, I.",
    "descricao": "Transitar pela contramão de direção em via com duplo sentido de circulação.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "573-80",
    "codigo": "573-80",
    "artigo": "Art. 186, II.",
    "descricao": "Transitar pela contramão de direção em via c/ sinalização de regul sentido único.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "574-61",
    "codigo": "574-61",
    "artigo": "Art. 187, I.",
    "descricao": "Transitar em local/horário não permitido pela regul estabelecida p/autoridade.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "574-62",
    "codigo": "574-62",
    "artigo": "Art. 187, I.",
    "descricao": "Transitar em local/horário não permitido pela regulamentação - Rodízio.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "574-63",
    "codigo": "574-63",
    "artigo": "Art. 187, I.",
    "descricao": "Transitar em local/horário não permitido pela regulamentação - Caminhão.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "576-20",
    "codigo": "576-20",
    "artigo": "Art. 188.",
    "descricao": "Transitar ao lado de outro veículo, interrompendo ou perturbando o trânsito.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "577-01",
    "codigo": "577-01",
    "artigo": "Art. 189.",
    "descricao": "Deixar de dar passagem a veíc precedido de batedores devidamente identificados.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "577-02",
    "codigo": "577-02",
    "artigo": "Art. 189.",
    "descricao": "Deixar de dar passagem a veíc socorro incêndio/salv serv urgência devid identif.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "577-03",
    "codigo": "577-03",
    "artigo": "Art. 189.",
    "descricao": "Deixar de dar passagem a veíc de polícia em serviço de urgência devid identif.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "577-04",
    "codigo": "577-04",
    "artigo": "Art. 189.",
    "descricao": "Deixar de dar passagem a veíc de operação e fiscalização de trânsito devid ident.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "577-05",
    "codigo": "577-05",
    "artigo": "Art. 189.",
    "descricao": "Deixar de dar passagem a ambulância em serviço de urgência devid identificada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "578-90",
    "codigo": "578-90",
    "artigo": "Art. 190.",
    "descricao": "Seguir veículo em serv urgência devid identific p/ alarme sonoro/ilum.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "579-70",
    "codigo": "579-70",
    "artigo": "Art. 191.",
    "descricao": "Forçar passagem entre veícs trans sent opostos na iminência realiz ultrapassagem.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (10x) e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "580-00",
    "codigo": "580-00",
    "artigo": "Art. 192.",
    "descricao": "Deixar guardar dist segurança lat/front entre seu veíc e demais e ao bordo pista.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-91",
    "codigo": "581-91",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em calçadas, passeios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-92",
    "codigo": "581-92",
    "artigo": "193.",
    "descricao": "Transitar com o veículo em ciclovias, ciclofaixas.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-93",
    "codigo": "581-93",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em ajardinamentos, gramados e jardins públicos.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-94",
    "codigo": "581-94",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em canteiros centrais/divisores de pista de rolamento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-95",
    "codigo": "581-95",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em ilhas, refúgios.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-96",
    "codigo": "581-96",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em marcas de canalização.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-97",
    "codigo": "581-97",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em acostamentos.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "581-98",
    "codigo": "581-98",
    "artigo": "Art. 193.",
    "descricao": "Transitar com o veículo em passarelas.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "582-70",
    "codigo": "582-70",
    "artigo": "Art. 194.",
    "descricao": "Transitar em marcha ré, salvo na distância necessária a pequenas manobras.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "583-50",
    "codigo": "583-50",
    "artigo": "Art. 195.",
    "descricao": "Desobedecer às ordens emanadas da autorid compet de trânsito ou de seus agentes.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "584-31",
    "codigo": "584-31",
    "artigo": "Art. 196.",
    "descricao": "Deixar de indicar c/antec, med gesto de braço/luz indicadora, início da marcha.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "584-32",
    "codigo": "584-32",
    "artigo": "Art. 196.",
    "descricao": "Deixar de indicar c/antec, med gesto de braço/luz indicadora, manobra de parar.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "584-33",
    "codigo": "584-33",
    "artigo": "Art. 196.",
    "descricao": "Deixar de indicar c/antec, med gesto de braço/luz indicadora, mudança direção.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "584-34",
    "codigo": "584-34",
    "artigo": "Art. 196.",
    "descricao": "Deixar de indicar c/antec, med gesto de braço/luz indicadora, mudança de faixa.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "585-11",
    "codigo": "585-11",
    "artigo": "Art. 197.",
    "descricao": "Deixar de deslocar c/antecedência veíc p/faixa mais à esquerda qdo for manobrar.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "585-12",
    "codigo": "585-12",
    "artigo": "Art. 197.",
    "descricao": "Deixar de deslocar c/antecedência veíc p/faixa mais à direita qdo for manobrar.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "586-00",
    "codigo": "586-00",
    "artigo": "Art. 198.",
    "descricao": "Deixar de dar passagem pela esquerda, quando solicitado.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "587-80",
    "codigo": "587-80",
    "artigo": "Art. 199.",
    "descricao": "Ultrapassar pela direita, salvo quando o veículo da frente sinalizar que vai entrar à esquerda.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "588-60",
    "codigo": "588-60",
    "artigo": "Art. 200.",
    "descricao": "Ultrap pela direita veíc transp colet/escolar parado para emb/desemb passageiros.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "589-40",
    "codigo": "589-40",
    "artigo": "Art. 201.",
    "descricao": "Deixar de guardar a distância lateral de 1,50 m ao passar/ultrapassar bicicleta.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "590-80",
    "codigo": "590-80",
    "artigo": "Art. 202, I.",
    "descricao": "Ultrapassar pelo acostamento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "591-61",
    "codigo": "591-61",
    "artigo": "Art. 202, II.",
    "descricao": "Ultrapassar em interseções.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "591-62",
    "codigo": "591-62",
    "artigo": "Art. 202, II.",
    "descricao": "Ultrapassar em passagem de nível.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "592-41",
    "codigo": "592-41",
    "artigo": "Art. 203, I.",
    "descricao": "Ultrapassar pela contramão nas curvas sem visibilidade suficiente.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "592-42",
    "codigo": "592-42",
    "artigo": "Art. 203, I.",
    "descricao": "Ultrapassar pela contramão nos aclives ou declives, sem visibilidade suficiente.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "593-20",
    "codigo": "593-20",
    "artigo": "Art. 203, II.",
    "descricao": "Ultrapassar pela contramão nas faixas de pedestre.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "594-02",
    "codigo": "594-02",
    "artigo": "Art. 203, III.",
    "descricao": "Ultrapassar pela contramão nos viadutos.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "594-03",
    "codigo": "594-03",
    "artigo": "Art. 203, III.",
    "descricao": "Ultrapassar pela contramão nos túneis.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "595-91",
    "codigo": "595-91",
    "artigo": "Art. 203, IV.",
    "descricao": "Ultrapassar pela contramão veículo parado em fila junto sinal luminoso.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "595-92",
    "codigo": "595-92",
    "artigo": "Art. 203, IV.",
    "descricao": "Ultrapassar pela contramão veículo parado em fila junto a cancela/porteira.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "595-93",
    "codigo": "595-93",
    "artigo": "Art. 203, IV.",
    "descricao": "Ultrapassar pela contramão veículo parado em fila junto a cruzamento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "595-94",
    "codigo": "595-94",
    "artigo": "Art. 203, IV.",
    "descricao": "Ultrapassar pela contramão veíc parado em fila junto qq impedimento à circulação.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "596-70",
    "codigo": "596-70",
    "artigo": "Art. 203, V.",
    "descricao": "Ultrapassar pela contramão linha de divisão de fluxos opostos, contínua amarela.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo flagrado transitando na contramão de direção em via de sentido único.",
      "Condutor realizou manobra ingressando na contramão da via.",
      "Veículo transitando na contramão em trecho com linha de divisão amarela contínua.",
      "Constatado trânsito em contramão, prejudicando a segurança dos demais veículos."
    ]
  },
  {
    "id": "597-50",
    "codigo": "597-50",
    "artigo": "Art. 204.",
    "descricao": "Deixar de parar no acostamento à direita, p/ cruzar pista ou entrar à esquerda.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "598-30",
    "codigo": "598-30",
    "artigo": "Art. 205.",
    "descricao": "Ultrapassar veículo em movimento que integre cortejo/desfile/formação militar.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "601-71",
    "codigo": "601-71",
    "artigo": "Art. 206, III.",
    "descricao": "Executar operação de retorno passando por cima de calçada, passeio.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "601-72",
    "codigo": "601-72",
    "artigo": "Art. 206, III.",
    "descricao": "Executar operação de retorno passando por cima de ilha, refúgio.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "601-73",
    "codigo": "601-73",
    "artigo": "Art. 206, III.",
    "descricao": "Executar operação de retorno passando por cima de ajardinamento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "601-74",
    "codigo": "601-74",
    "artigo": "Art. 206, III.",
    "descricao": "Executar operação de retorno passando por cima de canteiro de divisor de pista.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "601-75",
    "codigo": "601-75",
    "artigo": "Art. 206, III.",
    "descricao": "Executar operação de retorno passando por cima de faixa de pedestres.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "601-76",
    "codigo": "601-76",
    "artigo": "Art. 206, III.",
    "descricao": "Executar operação de retorno passando por cima de faixa de veíc não motorizados.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "604-11",
    "codigo": "604-11",
    "artigo": "Art. 207.",
    "descricao": "Executar operação de conversão à direita em local proibido pela sinalização.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "604-12",
    "codigo": "604-12",
    "artigo": "Art. 207.",
    "descricao": "Executar operação de conversão à esquerda em local proibido pela sinalização.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "605-01",
    "codigo": "605-01",
    "artigo": "Art. 208.",
    "descricao": "Avançar o sinal vermelho do semáforo, exc onde houver sinaliz que perm livre conv à direita.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "605-02",
    "codigo": "605-02",
    "artigo": "Art. 208.",
    "descricao": "Avançar o sinal de parada obrigatória.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "606-81",
    "codigo": "606-81",
    "artigo": "Art. 209.",
    "descricao": "Transpor bloqueio viário com ou sem sinalização ou dispositivos auxiliares.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "606-82",
    "codigo": "606-82",
    "artigo": "Art. 209.",
    "descricao": "Deixar de adentrar as áreas destinadas à pesagem de veículos.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "606-85",
    "codigo": "606-85",
    "artigo": "Art. 209 e Art. 1º, §5º da Lei 13.711/2018.",
    "descricao": "Circular com eixos indevidamente suspensos os veículos de transporte de carga.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "773-01",
    "codigo": "773-01",
    "artigo": "Art. 209-A.",
    "descricao": "Evadir-se da cobrança pelo uso de rodovias e vias urbanas para não efetuar seu pagamento.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "773-02",
    "codigo": "773-02",
    "artigo": "Art. 209-A.",
    "descricao": "Deixar de efetuar pagamento, pelo uso de rodovias e vias urbanas, na forma estabelecida.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "607-60",
    "codigo": "607-60",
    "artigo": "Art. 210.",
    "descricao": "Transpor bloqueio viário policial.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa e suspensão do direito de dirigir",
    "medidaAdministrativa": "Remoção do veículo e recolhimento do documento de habilitação (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "608-42",
    "codigo": "608-42",
    "artigo": "Art. 211.",
    "descricao": "Ultrapassar veículos motorizados em fila, parados em razão de cancela.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "608-43",
    "codigo": "608-43",
    "artigo": "Art. 211.",
    "descricao": "Ultrapassar veículos motorizados em fila parado em razão de bloqueio viário parcial.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "608-44",
    "codigo": "608-44",
    "artigo": "Art. 211.",
    "descricao": "Ultrapassar veículos motorizados em fila parado em razão de qualquer obstáculo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "609-20",
    "codigo": "609-20",
    "artigo": "Art. 212.",
    "descricao": "Deixar de parar o veículo antes de transpor linha férrea.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "610-60",
    "codigo": "610-60",
    "artigo": "Art. 213, I.",
    "descricao": "Deixar de parar o veículo sempre que a marcha for interceptada por agrupamento de pessoas.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "611-40",
    "codigo": "611-40",
    "artigo": "Art. 213, II.",
    "descricao": "Deixar de parar o veículo sempre que a marcha for interceptada por agrupamento de veículos.",
    "gravidade": "Grave",
    "pontos": 7,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "612-20",
    "codigo": "612-20",
    "artigo": "Art. 214, I.",
    "descricao": "Deixar de dar preferência a pedestre/veic ñ motorizado na faixa a ele destinada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "613-00",
    "codigo": "613-00",
    "artigo": "Art. 214, II.",
    "descricao": "Deixar de dar preferência a pedestre/veic ñ mot que ñ haja concluído a travessia.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "614-90",
    "codigo": "614-90",
    "artigo": "Art. 214, III.",
    "descricao": "Deixar de dar preferência a pedestre port deficiência fís/criança/idoso/gestante.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "615-70",
    "codigo": "615-70",
    "artigo": "Art. 214, IV.",
    "descricao": "Deixar de dar preferência a pedestre/veic ñ mot qdo iniciada travessia s/sinaliz.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de trânsito Estadual, Municipal e Rodoviário Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "616-50",
    "codigo": "616-50",
    "artigo": "Art. 214, V.",
    "descricao": "Deixar de dar preferência a pedestre/veic não mot atravessando a via transversal.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de trânsito Estadual, Municipal e Rodoviário Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "617-31",
    "codigo": "617-31",
    "artigo": "Art. 215, I, a.",
    "descricao": "Deixar de dar preferência em interseção ñ sinaliz, a veíc circulando por rodovia.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "617-32",
    "codigo": "617-32",
    "artigo": "Art. 215, I, a.",
    "descricao": "Deixar de dar preferência em interseção ñ sinaliz, a veíc circulando por rotatória.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de trânsito Estadual, Municipal e Rodoviário Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "617-33",
    "codigo": "617-33",
    "artigo": "Art. 215, I, b.",
    "descricao": "Deixar de dar prefer em interseção não sinalizada, a veículo que vier da direita.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "618-10",
    "codigo": "618-10",
    "artigo": "Art. 215, II.",
    "descricao": "Deixar de dar preferência nas interseções de Dê a Preferência.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "619-00",
    "codigo": "619-00",
    "artigo": "Art. 216.",
    "descricao": "Entrar/sair área lindeira sem precaução com a segurança de pedestres e veículos.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "620-30",
    "codigo": "620-30",
    "artigo": "Art. 217.",
    "descricao": "Entrar/sair de fila de veículos estacionados sem dar pref a pedestres/veículos.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "745-50",
    "codigo": "745-50",
    "artigo": "Art. 218, I",
    "descricao": "Transitar em velocidade superior à máxima permitida em até 20%",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "746-30",
    "codigo": "746-30",
    "artigo": "Art. 218, II.",
    "descricao": "Transitar em velocidade superior à máxima permitida em mais de 20% até 50%",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "747-10",
    "codigo": "747-10",
    "artigo": "Art. 218, III.",
    "descricao": "Transitar em velocidade superior à máxima permitida em mais de 50%.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (três vezes), suspensão do direito de dirigir",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "625-40",
    "codigo": "625-40",
    "artigo": "Art. 219.",
    "descricao": "Transitar em velocidade inferior à metade da máxima da via, salvo faixa direita.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "626-20",
    "codigo": "626-20",
    "artigo": "Art. 220, I.",
    "descricao": "Deixar de reduzir a veloc qdo se aproximar de passeata/aglomeração/desfile/etc.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "627-00",
    "codigo": "627-00",
    "artigo": "Art. 220, II.",
    "descricao": "Deixar de reduzir a veloc onde o trânsito esteja sendo controlado pelo agente.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "628-91",
    "codigo": "628-91",
    "artigo": "Art. 220, III.",
    "descricao": "Deixar de reduzir a velocidade do veículo ao aproximar-se da guia da calçada.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "628-92",
    "codigo": "628-92",
    "artigo": "Art. 220, III.",
    "descricao": "Deixar de reduzir a velocidade do veículo ao aproximar-se do acostamento.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "629-70",
    "codigo": "629-70",
    "artigo": "Art. 220, IV.",
    "descricao": "Deixar de reduzir velocidade do veículo ao aproximar-se interseção ñ sinalizada.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "630-00",
    "codigo": "630-00",
    "artigo": "Art. 220, V.",
    "descricao": "Deixar reduzir velocidade nas vias rurais cuja faixa de domínio não esteja cercada.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "631-90",
    "codigo": "631-90",
    "artigo": "Art. 220, VI.",
    "descricao": "Deixar de reduzir a velocidade nos trechos em curva de pequeno raio.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "632-70",
    "codigo": "632-70",
    "artigo": "Art. 220, VII.",
    "descricao": "Deixar de reduzir veloc ao aproximar local sinaliz advert de obras/trabalhadores.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "NÃO",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "633-50",
    "codigo": "633-50",
    "artigo": "Art. 220, VIII.",
    "descricao": "Deixar de reduzir a velocidade sob chuva/neblina/cerração/ventos fortes.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "634-30",
    "codigo": "634-30",
    "artigo": "Art. 220, IX.",
    "descricao": "Deixar de reduzir a velocidade quando houver má visibilidade.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "635-10",
    "codigo": "635-10",
    "artigo": "Art. 220, X.",
    "descricao": "Deixar de reduzir veloc qdo pavimento se apresentar escorreg/defeituoso/avariado.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "636-00",
    "codigo": "636-00",
    "artigo": "Art. 220, XI.",
    "descricao": "Deixar de reduzir a velocidade à aproximação de animais na pista.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "637-80",
    "codigo": "637-80",
    "artigo": "Art. 220, XII.",
    "descricao": "Deixar de reduzir a velocidade de forma compatível com a segurança em declive.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "638-60",
    "codigo": "638-60",
    "artigo": "Art. 220, XIII.",
    "descricao": "Deixar de reduzir veloc de forma compatível c/ segurança ao ultrapassar ciclista.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "639-41",
    "codigo": "639-41",
    "artigo": "Art. 220, XIV.",
    "descricao": "Deixar de reduzir a velocidade nas proximidades de escolas.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "639-42",
    "codigo": "639-42",
    "artigo": "Art. 220, XIV.",
    "descricao": "Deixar de reduzir a velocidade nas proximidades de hospitais.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "639-43",
    "codigo": "639-43",
    "artigo": "Art. 220, XIV.",
    "descricao": "Deixar de reduzir veloc na proxim estação embarque/desembarque passageiros.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "",
    "medidaAdministrativa": "",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "639-44",
    "codigo": "639-44",
    "artigo": "Art. 220, XIV.",
    "descricao": "Deixar de reduzir veloc onde haja intensa movimentação de pedestres.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "641-60",
    "codigo": "641-60",
    "artigo": "Art. 221, Parágrafo único.",
    "descricao": "Confec/distribuir/colocar veíc próprio/terceiro placa identif desacordo Contran.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização e apreensão das placas irregulares (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "642-40",
    "codigo": "642-40",
    "artigo": "Art. 222.",
    "descricao": "Deixar de manter ligado em emerg sist ilum intermitente ainda q parado.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "643-21",
    "codigo": "643-21",
    "artigo": "Art. 223.",
    "descricao": "Transitar com farol desregulado perturbando visão outro condutor.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "643-22",
    "codigo": "643-22",
    "artigo": "Art. 223.",
    "descricao": "Transitar com o facho de luz alta perturbando visão outro condutor.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "644-00",
    "codigo": "644-00",
    "artigo": "Art. 224.",
    "descricao": "Fazer uso do facho de luz alta dos faróis em vias providas de iluminação pública.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "645-91",
    "codigo": "645-91",
    "artigo": "Art. 225, I.",
    "descricao": "Deixar de sinalizar via p/ tornar visível local qdo tiver remover veíc da pista.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "645-92",
    "codigo": "645-92",
    "artigo": "Art. 225, I.",
    "descricao": "Deixar de sinalizar a via p/ tornar visível o local qdo permanecer acostamento.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "646-70",
    "codigo": "646-70",
    "artigo": "Art. 225, II.",
    "descricao": "Deixar de sinalizar a via p/ tornar visível o local qdo a carga for derramada.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "647-50",
    "codigo": "647-50",
    "artigo": "Art. 226.",
    "descricao": "Deixar de retirar qualquer objeto utilizado para sinalização temporária da via.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "648-30",
    "codigo": "648-30",
    "artigo": "Art. 227, I.",
    "descricao": "Usar buzina que não a de toque breve como advertência a pedestre ou condutores.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "649-10",
    "codigo": "649-10",
    "artigo": "Art. 227, II.",
    "descricao": "Usar buzina prolongada e sucessivamente a qualquer pretexto.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "650-50",
    "codigo": "650-50",
    "artigo": "Art. 227, III.",
    "descricao": "Usar buzina entre as vinte e duas e às seis horas.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "651-30",
    "codigo": "651-30",
    "artigo": "Art. 227, IV.",
    "descricao": "Usar buzina em locais e horários proibidos pela sinalização.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "652-10",
    "codigo": "652-10",
    "artigo": "Art. 227, V.",
    "descricao": "Usar buzina em desacordo c/ os padrões e frequências estabelecidas pelo Contran.",
    "gravidade": "Leve",
    "pontos": 3,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "653-00",
    "codigo": "653-00",
    "artigo": "Art. 228.",
    "descricao": "Usar no veículo equip c/ som em volume/frequência não autorizados pelo Contran.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "654-80",
    "codigo": "654-80",
    "artigo": "Art. 229.",
    "descricao": "Usar no veíc alarme/aparelho produz som perturbe sossego púb desac norma Contran.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "655-61",
    "codigo": "655-61",
    "artigo": "Art. 230, I.",
    "descricao": "Conduzir o veículo com o lacre de identificação violado/falsificado.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual ou Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "655-62",
    "codigo": "655-62",
    "artigo": "Art. 230, I.",
    "descricao": "Conduzir o veículo com a inscrição do chassi violada/falsificada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual ou Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "655-63",
    "codigo": "655-63",
    "artigo": "Art. 230, I.",
    "descricao": "Conduzir o veículo como selo violado/falsificado.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual ou Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "655-64",
    "codigo": "655-64",
    "artigo": "Art. 230, I.",
    "descricao": "Conduzir o veículo com a placa violada/falsificada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual ou Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "655-65",
    "codigo": "655-65",
    "artigo": "Art. 230, I.",
    "descricao": "Conduzir o veículo com qualquer outro elem de identificação violado/falsificado.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual ou Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "656-40",
    "codigo": "656-40",
    "artigo": "Art. 230, II.",
    "descricao": "Conduzir o veículo transportando passageiros em compartimento de carga.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "657-20",
    "codigo": "657-20",
    "artigo": "Art. 230, III.",
    "descricao": "Conduzir o veículo com dispositivo antirradar.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "658-00",
    "codigo": "658-00",
    "artigo": "Art. 230, IV.",
    "descricao": "Conduzir o veículo sem qualquer uma das placas de identificação.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "659-91",
    "codigo": "659-91",
    "artigo": "Art. 230, V.",
    "descricao": "Conduzir o veículo que não esteja registrado.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "659-92",
    "codigo": "659-92",
    "artigo": "Art. 230, V.",
    "descricao": "Conduzir o veículo registrado que não esteja devidamente licenciado.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "660-20",
    "codigo": "660-20",
    "artigo": "Art. 230, VI.",
    "descricao": "Conduzir o veículo com qualquer uma das placas sem legibilidade e visibilidade.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "661-01",
    "codigo": "661-01",
    "artigo": "Art. 230, VII.",
    "descricao": "Conduzir o veículo com cor alterada.",
    "gravidade": "Grave",
    "pontos": 0,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "661-02",
    "codigo": "661-02",
    "artigo": "Art. 230, VII.",
    "descricao": "Conduzir o veículo com característica alterada.",
    "gravidade": "Grave",
    "pontos": 0,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "662-90",
    "codigo": "662-90",
    "artigo": "Art. 230, VIII.",
    "descricao": "Conduzir veículo s/ ter sido submetido à inspeção seg veicular, qdo obrigatória.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do Veículo para Regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "663-71",
    "codigo": "663-71",
    "artigo": "Art. 230, IX.",
    "descricao": "Conduzir o veículo sem equipamento obrigatório.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para Regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "663-72",
    "codigo": "663-72",
    "artigo": "Art. 230, IX.",
    "descricao": "Conduzir o veículo com equipamento obrigatório ineficiente/inoperante.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para Regularização (Vide Parte a Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "664-50",
    "codigo": "664-50",
    "artigo": "Art. 230, X.",
    "descricao": "Conduzir o veículo com equip obrigatório em desacordo com o estab pelo Contran.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para Regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "665-31",
    "codigo": "665-31",
    "artigo": "Art. 230, XI.",
    "descricao": "Conduzir o veículo com descarga livre.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para Regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "665-32",
    "codigo": "665-32",
    "artigo": "Art. 230, XI.",
    "descricao": "Conduzir o veículo com silenciador de motor de explosão defeituoso, deficiente ou inoperante.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para Regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "666-10",
    "codigo": "666-10",
    "artigo": "Art. 230, XII.",
    "descricao": "Conduzir o veículo com equipamento ou acessório proibido.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "667-00",
    "codigo": "667-00",
    "artigo": "Art. 230, XIII.",
    "descricao": "Conduzir o veíc c/ equip do sistema de iluminação e de sinalização alterados.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "668-80",
    "codigo": "668-80",
    "artigo": "Art. 230, XIV.",
    "descricao": "Conduzir veíc c/ registrador instan inalt de velocidade/tempo viciado/defeituoso.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Velocidade medida por equipamento aferido. Transitar em velocidade superior à máxima permitida.",
      "Veículo flagrado acima da velocidade regulamentada na via por equipamento eletrônico.",
      "Autuação gerada por equipamento de fiscalização estático/portátil.",
      "Velocidade aferida incompatível com a segurança no trecho."
    ]
  },
  {
    "id": "669-61",
    "codigo": "669-61",
    "artigo": "Art. 230, XV.",
    "descricao": "Conduzir c/ inscr/adesivo/legenda/símbolo afixado para-brisa e extensão traseira.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "669-62",
    "codigo": "669-62",
    "artigo": "Art. 230, XV.",
    "descricao": "Conduzir c/ inscr/adesivo/legenda/símbolo pintado para-brisa e extensão traseira.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "670-00",
    "codigo": "670-00",
    "artigo": "Art. 230, XVI.",
    "descricao": "Conduzir o veíc com vidros total/parcialmente cobertos por película, painéis/pintura.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "671-80",
    "codigo": "671-80",
    "artigo": "Art. 230, XVII.",
    "descricao": "Conduzir o veículo com cortinas ou persianas fechadas.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "672-61",
    "codigo": "672-61",
    "artigo": "Art. 230, XVIII.",
    "descricao": "Conduzir o veículo em mau estado de conservação, comprometendo a segurança.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "672-62",
    "codigo": "672-62",
    "artigo": "Art. 230, XVIII.",
    "descricao": "Conduzir o veículo reprovado na avaliação de inspeção de segurança.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "672-63",
    "codigo": "672-63",
    "artigo": "Art. 230, XVIII.",
    "descricao": "Conduzir o veículo reprovado na avaliação de emissão de poluentes e ruído.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "673-40",
    "codigo": "673-40",
    "artigo": "Art. 230, XIX.",
    "descricao": "Conduzir o veículo sem acionar o limpador de para-brisa sob chuva.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "674-20",
    "codigo": "674-20",
    "artigo": "Art. 230, XX.",
    "descricao": "Conduzir o veículo sem portar a autorização para condução de escolares.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5x)",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "675-00",
    "codigo": "675-00",
    "artigo": "Art. 230, XXI.",
    "descricao": "Conduzir o veíc de carga c/ falta inscrição da tara e demais previstas no CTB.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "676-90",
    "codigo": "676-90",
    "artigo": "Art. 230, XXII.",
    "descricao": "Conduzir veíc c/ defeito no sist de iluminação, sinaliz ou lâmpadas queimadas.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "756-00",
    "codigo": "756-00",
    "artigo": "Art. 230, XXIII.",
    "descricao": "Conduzir veíc de transp passag ou carga em desacordo c/ as cond do art 67-C CTB.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para cumprimento do tempo de descanso aplicável. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "677-70",
    "codigo": "677-70",
    "artigo": "Art. 231, I.",
    "descricao": "Transitar com o veículo danificando a via, suas instalações e equipamentos.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "678-51",
    "codigo": "678-51",
    "artigo": "Art. 231, II, a.",
    "descricao": "Transitar com o veículo derramando a carga que esteja transportando.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "678-52",
    "codigo": "678-52",
    "artigo": "Art. 231, II, a.",
    "descricao": "Transitar com veículo lançando a carga que esteja transportando.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "678-53",
    "codigo": "678-53",
    "artigo": "Art. 231, II, a.",
    "descricao": "Transitar com veículo arrastando a carga que esteja transportando.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "679-30",
    "codigo": "679-30",
    "artigo": "Art. 231, II, b.",
    "descricao": "Transitar com veíc derramando/lançando combustível/lubrif que esteja utilizando.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "680-70",
    "codigo": "680-70",
    "artigo": "Art. 231, II, c.",
    "descricao": "Transitar c/ veíc derramando/lançando/arrastando qq objeto com risco de acidente.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "681-50",
    "codigo": "681-50",
    "artigo": "Art. 231, III.",
    "descricao": "Transitar com veículo produzindo fumaça, gases ou partículas em desac c/ Contran.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do Veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "682-31",
    "codigo": "682-31",
    "artigo": "Art. 231, IV.",
    "descricao": "Transitar c/ veíc e/ou carga c/ dimensões superiores limite legal s/autorização.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "682-32",
    "codigo": "682-32",
    "artigo": "Art. 231, IV.",
    "descricao": "Transitar c/ veíc e/ou carga c/dimensões superiores est p/sinalização s/autoriz.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "683-11",
    "codigo": "683-11",
    "artigo": "Art. 231, V.",
    "descricao": "Transitar com o veículo com excesso de peso PBT/PBTC.",
    "gravidade": "Média",
    "pontos": 5,
    "valor": "R$ 130,16",
    "penalidade": "Multa acrescida a cada duzentos quilogramas ou fração de excesso de peso apurado, conforme itens 4.1 e 4.2 das Informações Complementares.",
    "medidaAdministrativa": "Retenção do veículo e transbordo da carga excedente (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Embarcador/Transportador",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "683-12",
    "codigo": "683-12",
    "artigo": "Art. 231, V.",
    "descricao": "Transitar com veículo com excesso de peso - por eixo.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa acrescida a cada duzentos quilogramas ou fração de excesso de peso apurado, conforme itens 5.1 e 5.2 das Informações Complementares.",
    "medidaAdministrativa": "Retenção do veículo e transbordo da carga excedente (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Embarcador/Transportador",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "683-13",
    "codigo": "683-13",
    "artigo": "Art. 231, V.",
    "descricao": "Transitar com o veículo com excesso de peso – PBT/PBTC e Por Eixo.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa acrescida a cada duzentos quilogramas ou fração de excesso de peso apurado, conforme itens 5.1 e 5.2 das Informações Complementares.",
    "medidaAdministrativa": "Retenção do veículo e transbordo da carga excedente (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Embarcador/Transportador",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "684-01",
    "codigo": "684-01",
    "artigo": "Art. 231, VI.",
    "descricao": "Transitar em desacordo c/ autorização expedida p/veículo c/ dimensões excedentes.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "684-02",
    "codigo": "684-02",
    "artigo": "Art. 231, VI.",
    "descricao": "Transitar com autorização vencida, expedida para veículo com dimensões excedentes.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "685-80",
    "codigo": "685-80",
    "artigo": "Art. 231, VII.",
    "descricao": "Transitar com o veículo com lotação excedente.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "686-61",
    "codigo": "686-61",
    "artigo": "Art. 231, VIII.",
    "descricao": "Transitar efetuando transporte remunerado de pessoas qdo ñ licenciado p/esse fim.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "686-62",
    "codigo": "686-62",
    "artigo": "Art. 231, VIII.",
    "descricao": "Transitar efetuando transporte remunerado de bens qdo não licenciado p/ esse fim.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "687-41",
    "codigo": "687-41",
    "artigo": "Art. 231, IX.",
    "descricao": "Transitar com veículo desligado em declive.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "687-42",
    "codigo": "687-42",
    "artigo": "Art. 231, IX.",
    "descricao": "Transitar com veículo desengrenado em declive.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "688-20",
    "codigo": "688-20",
    "artigo": "Art. 231, X",
    "descricao": "Transitar com o veículo excedendo a CMT em até 600kg.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo e transbordo de carga excedente (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "689-00",
    "codigo": "689-00",
    "artigo": "Art. 231, X.",
    "descricao": "Transitar com o veículo excedendo a CMT entre 601kg e 1000kg.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo e transbordo de carga excedente (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "690-40",
    "codigo": "690-40",
    "artigo": "Art. 231, X.",
    "descricao": "Transitar com o veículo excedendo a CMT acima de 1000kg.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo e transbordo de carga excedente (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "691-20",
    "codigo": "691-20",
    "artigo": "Art. 232.",
    "descricao": "Conduzir veículo sem os documentos de porte obrigatório referidos no CTB.",
    "gravidade": "Leve",
    "pontos": 0,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a apresentação do documento (Vide a Parte Geral deste Código).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "692-01",
    "codigo": "692-01",
    "artigo": "Art. 233 c/c 123, I.",
    "descricao": "Deixar de efetuar registro do veículo em 30 dias, qdo for transf a propriedade.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "692-02",
    "codigo": "692-02",
    "artigo": "Art. 233 c/c 123, II.",
    "descricao": "Deixar de efetuar reg do veíc em 30 dias, qdo mudar o munic de domicílio/resid.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "692-03",
    "codigo": "692-03",
    "artigo": "Art. 233 c/c 123, III.",
    "descricao": "Deixar de efetuar reg de veíc em 30 dias, qdo for alterada qquer caract do veíc.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "692-04",
    "codigo": "692-04",
    "artigo": "Art. 233 c/c 123, IV.",
    "descricao": "Deixar de efetuar registro de veic em 30 dias, qdo houver mudança de categoria.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "693-91",
    "codigo": "693-91",
    "artigo": "Art. 234.",
    "descricao": "Falsificar documento de habilitação.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "693-92",
    "codigo": "693-92",
    "artigo": "Art. 234.",
    "descricao": "Falsificar ou adulterar documento de identificação do veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "694-71",
    "codigo": "694-71",
    "artigo": "Art. 235.",
    "descricao": "Conduzir pessoas nas partes externas do veículo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para transbordo. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "694-72",
    "codigo": "694-72",
    "artigo": "Art. 235.",
    "descricao": "Conduzir animais nas partes externas do veículo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para transbordo. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "694-73",
    "codigo": "694-73",
    "artigo": "Art. 235.",
    "descricao": "Conduzir carga nas partes externas do veículo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para transbordo. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "695-50",
    "codigo": "695-50",
    "artigo": "Art. 236.",
    "descricao": "Rebocar outro veículo com cabo flexível ou corda.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "696-30",
    "codigo": "696-30",
    "artigo": "Art. 237.",
    "descricao": "Trans c/veíc desac c/especificação/falta de inscr/simbologia necessária identif.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo para regularização. (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "697-10",
    "codigo": "697-10",
    "artigo": "Art. 238.",
    "descricao": "Recusar-se a entregar CNH/CRV/CRLV/Outros documentos.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "698-00",
    "codigo": "698-00",
    "artigo": "Art. 239.",
    "descricao": "Retirar do local veículo legalmente retido para regularização, sem permissão.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do veículo (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "699-80",
    "codigo": "699-80",
    "artigo": "Art. 240.",
    "descricao": "Deixar responsável de promover baixa registro de veíc. irrecuperável/desmontado.",
    "gravidade": "Grave",
    "pontos": 0,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Recolhimento do Certificado de Registro e do Certificado de Licenciamento Anual. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "700-51",
    "codigo": "700-51",
    "artigo": "Art. 241.",
    "descricao": "Deixar de atualizar o cadastro de registro do veículo.",
    "gravidade": "Leve",
    "pontos": 0,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "700-52",
    "codigo": "700-52",
    "artigo": "Art. 241.",
    "descricao": "Deixar de atualizar o cadastro de habilitação do condutor.",
    "gravidade": "Leve",
    "pontos": 0,
    "valor": "R$ 88,38",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "701-31",
    "codigo": "701-31",
    "artigo": "Art. 242.",
    "descricao": "Fazer falsa declaração de domicílio para fins de registro/licenciamento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "701-32",
    "codigo": "701-32",
    "artigo": "Art. 242.",
    "descricao": "Fazer falsa declaração de domicílio para fins de habilitação.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Proprietário",
    "exemplosObservacao": [
      "Condutor abordado não apresentou documento de habilitação no momento da fiscalização.",
      "Verificado via sistema que o condutor não possui CNH.",
      "Condutor apresentou CNH vencida há mais de 30 dias.",
      "Condutor dirigindo veículo de categoria diferente da sua habilitação."
    ]
  },
  {
    "id": "702-10",
    "codigo": "702-10",
    "artigo": "Art. 243.",
    "descricao": "Deixar seguradora de comunicar ocorrência perda total veíc e devolver placas/doc.",
    "gravidade": "Grave",
    "pontos": 0,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Recolhimento das placas e dos documentos.",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Pessoa Jurídica",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "712-92",
    "codigo": "712-92",
    "artigo": "Art. 244, § 2º.",
    "descricao": "Conduzir ciclomotor em via de trânsito rápido.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "712-93",
    "codigo": "712-93",
    "artigo": "Art. 244, § 2º.",
    "descricao": "Conduzir ciclomotor em rodovia salvo se houver acostamento ou faixa própria.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "703-01",
    "codigo": "703-01",
    "artigo": "Art. 244, I.",
    "descricao": "Conduzir motocicleta, motoneta e ciclomotor sem capacete de segurança.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor da motocicleta visualizado transitando sem o capacete de segurança.",
      "Passageiro da motocicleta flagrado sem o uso do capacete.",
      "Condutor utilizando capacete sem viseira/óculos de proteção baixados.",
      "Motociclista com capacete não afivelado corretamente sob o queixo."
    ]
  },
  {
    "id": "703-03",
    "codigo": "703-03",
    "artigo": "Art. 244, I.",
    "descricao": "Conduzir motocicleta, motoneta e ciclomotor sem vestuário aprovado pelo Contran.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "704-81",
    "codigo": "704-81",
    "artigo": "Art. 244, II.",
    "descricao": "Conduzir motocicleta, motoneta e ciclomotor transportando passageiro sem capacete.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor da motocicleta visualizado transitando sem o capacete de segurança.",
      "Passageiro da motocicleta flagrado sem o uso do capacete.",
      "Condutor utilizando capacete sem viseira/óculos de proteção baixados.",
      "Motociclista com capacete não afivelado corretamente sob o queixo."
    ]
  },
  {
    "id": "704-83",
    "codigo": "704-83",
    "artigo": "Art. 244, II.",
    "descricao": "Conduzir motocicleta, motoneta ou ciclomotor transportando passageiro fora do assento.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação do condutor (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "705-61",
    "codigo": "705-61",
    "artigo": "Art. 244, III.",
    "descricao": "Conduzir motocicleta, motoneta ou ciclomotor fazendo malabarismo ou equilibrando-se em uma roda.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e suspensão do direito de dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação (Vide Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "707-21",
    "codigo": "707-21",
    "artigo": "Art. 244, V.",
    "descricao": "Conduzir motocicleta/motoneta/ciclomotor transportando criança menor de 10 anos de idade.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "707-22",
    "codigo": "707-22",
    "artigo": "Art. 244, V.",
    "descricao": "Conduzir motoc/moton/ciclom transp criança s/ condição cuidar própria segurança.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa e Suspensão do Direito de Dirigir",
    "medidaAdministrativa": "Retenção do veículo até regularização e recolhimento do documento de habilitação. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "708-00",
    "codigo": "708-00",
    "artigo": "Art. 244, VI.",
    "descricao": "Conduzir motocicleta, motoneta ou ciclomotor rebocando outro veículo.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "*Retenção do veículo para regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "709-91",
    "codigo": "709-91",
    "artigo": "Art. 244, VII.",
    "descricao": "Conduzir motocicleta/motoneta/ciclomotor sem segurar o guidom com ambas as mãos.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "*Retenção do veículo para regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "710-21",
    "codigo": "710-21",
    "artigo": "Art. 244, VIII.",
    "descricao": "Conduzir motocicleta, motoneta e ciclomotor transportando carga incompatível.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "*Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "710-23",
    "codigo": "710-23",
    "artigo": "Art. 244, VIII.",
    "descricao": "Conduzir motoc/moton/ transportando carga em desacordo c/ § 2º do Art 139-A CTB.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "*Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "755-21",
    "codigo": "755-21",
    "artigo": "Art. 244, IX.",
    "descricao": "Conduzir motoc/moton/ efetuando transp remun mercadoria desac c/ art 139-A CTB.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "*Retenção do veículo para regularização (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "755-22",
    "codigo": "755-22",
    "artigo": "Art. 244, IX.",
    "descricao": "Conduzir motoc/moton/ efet transp remun desac normas ativid profic mototaxistas.",
    "gravidade": "Grave",
    "pontos": 5,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "*Retenção do veículo para regularização (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "768-41",
    "codigo": "768-41",
    "artigo": "Art. 244, X.",
    "descricao": "Conduzir motoc/ moton/ ciclom c/ utilização de capacete de segurança s/ viseira/óculos de proteção.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até regularização (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor da motocicleta visualizado transitando sem o capacete de segurança.",
      "Passageiro da motocicleta flagrado sem o uso do capacete.",
      "Condutor utilizando capacete sem viseira/óculos de proteção baixados.",
      "Motociclista com capacete não afivelado corretamente sob o queixo."
    ]
  },
  {
    "id": "768-42",
    "codigo": "768-42",
    "artigo": "Art. 244, X.",
    "descricao": "Conduzir motoc/ moton/ ciclom c/ útil capacete de seg c/ viseira/óculos prot em des c/ regul Contran.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até regularização (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor da motocicleta visualizado transitando sem o capacete de segurança.",
      "Passageiro da motocicleta flagrado sem o uso do capacete.",
      "Condutor utilizando capacete sem viseira/óculos de proteção baixados.",
      "Motociclista com capacete não afivelado corretamente sob o queixo."
    ]
  },
  {
    "id": "771-41",
    "codigo": "771-41",
    "artigo": "Art. 244, XI.",
    "descricao": "Conduzir motoc/ moton/ ciclom transp pass c/ capacete de segurança s/ viseira/óculos de proteção.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até regularização (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor da motocicleta visualizado transitando sem o capacete de segurança.",
      "Passageiro da motocicleta flagrado sem o uso do capacete.",
      "Condutor utilizando capacete sem viseira/óculos de proteção baixados.",
      "Motociclista com capacete não afivelado corretamente sob o queixo."
    ]
  },
  {
    "id": "771-42",
    "codigo": "771-42",
    "artigo": "Art. 244, XI.",
    "descricao": "Conduzir motoc/ moton/ ciclom transp pass c/ cap seg c/ viseira/óculos prot em des c/ regul Contran.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até regularização (Vide Parte Geral deste Manual).",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "714-50",
    "codigo": "714-50",
    "artigo": "Art. 245.",
    "descricao": "Utilizar a via para depósito de mercadorias, materiais ou equipamentos.",
    "gravidade": "Grave",
    "pontos": 0,
    "valor": "R$ 195,23",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção da mercadoria ou do material.",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "715-31",
    "codigo": "715-31",
    "artigo": "Art. 246.",
    "descricao": "Deixar de sinalizar obstáculo à circulação/segurança calçada/pista-s/agravamento",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "715-32",
    "codigo": "715-32",
    "artigo": "Art. 246.",
    "descricao": "Obstaculizar a via indevidamente-s/agravamento.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "716-11",
    "codigo": "716-11",
    "artigo": "Art. 246.",
    "descricao": "Deixar de sinalizar obstáculo circulação/segurança calçada/pista-agravamento 2X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "716-12",
    "codigo": "716-12",
    "artigo": "Art. 246.",
    "descricao": "Obstaculizar a via indevidamente-agravamento 2X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (2X)",
    "medidaAdministrativa": "Não.",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "717-01",
    "codigo": "717-01",
    "artigo": "Art. 246.",
    "descricao": "Deixar de sinalizar obstáculo circulação/segurança calçada/pista-agravamento 3X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "717-02",
    "codigo": "717-02",
    "artigo": "Art. 246.",
    "descricao": "Obstaculizar a via indevidamente-agravamento 3X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (3X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "718-81",
    "codigo": "718-81",
    "artigo": "Art. 246.",
    "descricao": "Deixar de sinalizar obstáculo circulação/segurança calçada/pista-agravamento 4X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (4X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "718-82",
    "codigo": "718-82",
    "artigo": "Art. 246.",
    "descricao": "Obstaculizar a via indevidamente-agravamento 4X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (4X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "719-61",
    "codigo": "719-61",
    "artigo": "Art. 246.",
    "descricao": "Deixar de sinalizar obstáculo circulação/segurança calçada/pista-agravamento 5X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Veículo avançou o sinal vermelho do semáforo no cruzamento.",
      "Condutor não respeitou a fase vermelha do semáforo, seguindo marcha.",
      "Avanço de sinal vermelho constatado visualmente pelo agente.",
      "Veículo cruzou a interseção durante o sinal vermelho sem reduzir a velocidade."
    ]
  },
  {
    "id": "719-62",
    "codigo": "719-62",
    "artigo": "Art. 246.",
    "descricao": "Obstaculizar a via indevidamente-agravamento 5X.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (5X)",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "720-01",
    "codigo": "720-01",
    "artigo": "Art. 247.",
    "descricao": "Deixar de conduzir pelo bordo pista em fila única veíc tração/propulsão humana.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "720-02",
    "codigo": "720-02",
    "artigo": "Art. 247.",
    "descricao": "Deixar de conduzir pelo bordo da pista em fila única veículo de tração animal.",
    "gravidade": "Média",
    "pontos": 0,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal ou Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "722-61",
    "codigo": "722-61",
    "artigo": "Art. 249.",
    "descricao": "Deixar de manter acesas à noite as luzes posição quando o veículo estiver parado.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "722-62",
    "codigo": "722-62",
    "artigo": "Art. 249.",
    "descricao": "Deixar de manter acesas à noite as luzes de posição veic fazendo carga/descarga .",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "723-40",
    "codigo": "723-40",
    "artigo": "Art. 250, I, a.",
    "descricao": "Em movimento, deixar de manter acesa a luz baixa durante a noite.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "724-21",
    "codigo": "724-21",
    "artigo": "Art. 250, I, b.",
    "descricao": "Em movimento de dia, deixar de manter acesa luz baixa em túneis.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "724-22",
    "codigo": "724-22",
    "artigo": "Art. 250, I, b.",
    "descricao": "Em movimento de dia, deixar de manter acesa luz baixa sob chuva, neblina ou cerração.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "725-00",
    "codigo": "725-00",
    "artigo": "Art. 250, I, c.",
    "descricao": "Em mov de dia, deixar de manter acesa luz baixa veíc transp coletivo faixas/pistas destinadas.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "726-90",
    "codigo": "726-90",
    "artigo": "Art. 250, I, d.",
    "descricao": "Em movimento de dia, deixar de manter acesa luz baixa de motocicletas/motonetas/ ciclomotores.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "772-20",
    "codigo": "772-20",
    "artigo": "Art. 250, I, e.",
    "descricao": "Em mov deix de man aces luz baixa de dia, em rod pis simp sit fora per urb, veíc desp luz rod diur",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "728-50",
    "codigo": "728-50",
    "artigo": "Art. 250, III.",
    "descricao": "Em movimento, deixar de manter a placa traseira iluminada à noite.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "775-71",
    "codigo": "775-71",
    "artigo": "Art. 250, IV.",
    "descricao": "Em movimento, deixar o veículo de transporte púb. coletivo passageiros de manter a porta fechada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a regularização (Vide a Parte Geral do Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "775-72",
    "codigo": "775-72",
    "artigo": "Art. 250, IV.",
    "descricao": "Em movimento, deixar o veículo de escolares de manter a porta fechada.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Retenção do veículo até a regularização (Vide a Parte Geral do Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "729-30",
    "codigo": "729-30",
    "artigo": "Art. 251, I.",
    "descricao": "Utilizar o pisca-alerta, exceto em imobilizações ou situações de emergência.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "730-70",
    "codigo": "730-70",
    "artigo": "Art. 251, II.",
    "descricao": "Utilizar luz alta e baixa intermitente, exceto quando permitido pelo CTB.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "763-31",
    "codigo": "763-31",
    "artigo": "Art. 252, parágrafo único.",
    "descricao": "Dirigir veículo segurando telefone celular.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor flagrado manuseando telefone celular com a mão enquanto dirigia.",
      "Condutor visualizado segurando aparelho celular na altura do volante.",
      "Condutor flagrado utilizando telefone celular junto ao ouvido.",
      "Autuação por constatação visual do uso do celular. Impossibilidade de abordagem."
    ]
  },
  {
    "id": "731-50",
    "codigo": "731-50",
    "artigo": "Art. 252, I.",
    "descricao": "Dirigir o veículo com o braço do lado de fora.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "732-31",
    "codigo": "732-31",
    "artigo": "Art. 252, II.",
    "descricao": "Dirigir o veículo transport pessoas à sua esquerda ou entre os braços e pernas.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "732-32",
    "codigo": "732-32",
    "artigo": "Art. 252, II.",
    "descricao": "Dirigir o veículo transport animais à sua esquerda ou entre os braços e pernas.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "732-33",
    "codigo": "732-33",
    "artigo": "Art. 252, II.",
    "descricao": "Dirigir o veículo transport volume à sua esquerda ou entre os braços e pernas.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "733-10",
    "codigo": "733-10",
    "artigo": "Art. 252, III.",
    "descricao": "Dirigir o veículo com incapacidade física ou mental temporária.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "734-00",
    "codigo": "734-00",
    "artigo": "Art. 252, IV.",
    "descricao": "Dirigir o veíc usando calçado que ñ se firme nos pés/comprometa utiliz pedais.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "735-80",
    "codigo": "735-80",
    "artigo": "Art. 252, V.",
    "descricao": "Dirigir o veículo com apenas uma das mãos, exceto quando permitido pelo CTB.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "736-61",
    "codigo": "736-61",
    "artigo": "Art. 252, VI.",
    "descricao": "Dirigir o veículo utilizando-se de fones nos ouvidos conec a aparelhagem sonora.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "736-62",
    "codigo": "736-62",
    "artigo": "Art. 252, VI.",
    "descricao": "Dirigir veículo utilizando-se de telefone celular.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Condutor flagrado manuseando telefone celular com a mão enquanto dirigia.",
      "Condutor visualizado segurando aparelho celular na altura do volante.",
      "Condutor flagrado utilizando telefone celular junto ao ouvido.",
      "Autuação por constatação visual do uso do celular. Impossibilidade de abordagem."
    ]
  },
  {
    "id": "759-50",
    "codigo": "759-50",
    "artigo": "Art. 252, VII.",
    "descricao": "Dirigir veículo realizando cobrança de tarifa com veículo em movimento.",
    "gravidade": "Média",
    "pontos": 4,
    "valor": "R$ 130,16",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Municipal, Estadual e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "737-40",
    "codigo": "737-40",
    "artigo": "Art. 253.",
    "descricao": "Bloquear a via com veículo.",
    "gravidade": "Gravíssima",
    "pontos": 7,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Remoção do Veículo (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "761-71",
    "codigo": "761-71",
    "artigo": "Art. 253-A.",
    "descricao": "Usar veículo para, deliberadamente, interromper a circulação na via.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (20X) e Suspensão do Direito de Dirigir por 12 meses",
    "medidaAdministrativa": "Remoção do Veículo. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "761-72",
    "codigo": "761-72",
    "artigo": "Art. 253-A.",
    "descricao": "Usar veículo para, deliberadamente, restringir a circulação na via.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (20X) e Suspensão do Direito de Dirigir por 12 meses",
    "medidaAdministrativa": "Remoção do Veículo. (Vide Parte Geral deste Manual).",
    "competencia": "Órgão de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "761-73",
    "codigo": "761-73",
    "artigo": "Art. 253-A.",
    "descricao": "Usar veículo para, deliberadamente, perturbar a circulação na via.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (20X) e Suspensão do Direito de Dirigir por 12 meses",
    "medidaAdministrativa": "Remoção do Veículo. (Vide a Parte Geral deste Manual).",
    "competencia": "Órgão de Trânsito Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "760-90",
    "codigo": "760-90",
    "artigo": "Art. 253-A, §1º.",
    "descricao": "Organizar as condutas previstas no caput do art. 253-A.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa (60X)",
    "medidaAdministrativa": "Não aplicável.",
    "competencia": "Órgão de Trânsito Municipal e Rodoviário.",
    "infrator": "Pessoa Física ou Jurídica",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "776-50",
    "codigo": "776-50",
    "artigo": "Art. 278, § único c/c Art. 210.",
    "descricao": "Fugir do condutor à ação policial.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa e suspensão do direito de dirigir.",
    "medidaAdministrativa": "Remoção do veículo e recolhimento do documento de habilitação (Vide a Parte Geral deste Manual)",
    "competencia": "Órgão ou Entidade de Trânsito Estadual, Municipal e Rodoviário.",
    "infrator": "Condutor",
    "exemplosObservacao": [
      "Infração constatada visualmente pelo agente de trânsito em patrulhamento.",
      "Veículo em movimento no momento da constatação da infração, condutor não abordado.",
      "Autuação lavrada conforme previsão do art. 280, § 3º do CTB. Impossibilidade de abordagem segura.",
      "Infração flagrada durante operação de fiscalização de trânsito no local."
    ]
  },
  {
    "id": "754-41",
    "codigo": "754-41",
    "artigo": "Art. 330, § 5º e § 6º.",
    "descricao": "Falta de escrituração livro registro entrada/saída e de uso placa de experiência.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de trânsito estadual",
    "infrator": "Pessoa Jurídica ou Física",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "754-42",
    "codigo": "754-42",
    "artigo": "Art. 330, § 5º e § 6º.",
    "descricao": "Atraso escrituração livro registro entrada/saída e de uso placa de experiência.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual.",
    "infrator": "Pessoa Jurídica ou Física",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "754-43",
    "codigo": "754-43",
    "artigo": "Art. 330, § 5º e § 6º.",
    "descricao": "Fraude escrituração livro registro entrada/saída e de uso placa de experiência.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou Entidade de Trânsito Estadual",
    "infrator": "Pessoa Jurídica ou Física",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  },
  {
    "id": "754-44",
    "codigo": "754-44",
    "artigo": "Art. 330, § 5º e § 6º.",
    "descricao": "Recusa da exibição do livro registro entrada/saída e de uso placa de experiência.",
    "gravidade": "Gravíssima",
    "pontos": 0,
    "valor": "R$ 293,47",
    "penalidade": "Multa",
    "medidaAdministrativa": "Não",
    "competencia": "Órgão ou entidade de trânsito estadual",
    "infrator": "Pessoa Jurídica ou Física",
    "exemplosObservacao": [
      "Veículo transitando com placa de identificação ilegível.",
      "Placa traseira do veículo sem o lacre obrigatório.",
      "Veículo flagrado transitando sem a placa dianteira.",
      "Caracteres da placa apagados, impossibilitando a correta identificação à distância."
    ]
  }
];
