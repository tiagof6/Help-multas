// src/services/api.ts

export interface VehicleData {
  placa: string;
  marcaModelo: string;
  anoFabricacao: string;
  cor: string;
  chassi: string;
  municipio: string;
  uf: string;
  statusRestricao: 'NORMAL' | 'ROUBO_FURTO';
}

/**
 * Função simuladora de consulta de placa na base nacional (SINESP/Detran).
 * Retorna dados fictícios após um pequeno delay de rede.
 */
export const fetchVehicleData = async (placa: string): Promise<VehicleData> => {
  return new Promise((resolve, reject) => {
    // Simula tempo de resposta da rede
    setTimeout(() => {
      const placaFormatada = placa.toUpperCase().trim();

      // Validação básica
      if (placaFormatada.length < 7) {
        return reject(new Error('Placa inválida. Digite todos os caracteres.'));
      }

      // Lógica Mock: Se a placa for exatamente a palavra "ROUBO", simulamos furto
      if (placaFormatada === 'ROUBO00') {
        return resolve({
          placa: 'ROUBO00',
          marcaModelo: 'HONDA/CG 160 FAN',
          anoFabricacao: '2021/2021',
          cor: 'PRETA',
          chassi: '***1A2B3C4D5E***',
          municipio: 'SÃO PAULO',
          uf: 'SP',
          statusRestricao: 'ROUBO_FURTO',
        });
      }
      
      // Para qualquer outra placa que contenha "ROUBO", trataremos como roubo
      if (placaFormatada.includes('ROUBO')) {
        return resolve({
          placa: placaFormatada,
          marcaModelo: 'VW/GOL 1.0',
          anoFabricacao: '2019/2020',
          cor: 'PRATA',
          chassi: '***X9Y8Z7W6V***',
          municipio: 'RIO DE JANEIRO',
          uf: 'RJ',
          statusRestricao: 'ROUBO_FURTO',
        });
      }

      // Para qualquer outra placa genérica, veículo regular
      resolve({
        placa: placaFormatada,
        marcaModelo: 'CHEVROLET/ONIX 1.0MT LT',
        anoFabricacao: '2022/2023',
        cor: 'BRANCA',
        chassi: '***9A8B7C6D5E***',
        municipio: 'BELO HORIZONTE',
        uf: 'MG',
        statusRestricao: 'NORMAL',
      });
    }, 1500); // 1.5s delay
  });
};
