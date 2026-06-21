const fs = require('fs');

const text = fs.readFileSync('output.txt', 'utf8');

const fiches = text.split('FICHA DE FISCALIZAÇÃO').slice(1);

const infractions = [];

function extractField(ficha, fieldName, nextFieldName) {
    const regex = new RegExp(`${fieldName}[\\s\\S]*?(?=${nextFieldName})`, 'i');
    const match = ficha.match(regex);
    if (match) {
        let val = match[0].substring(fieldName.length).trim();
        val = val.replace(/\s+/g, ' '); // remove newlines and extra spaces
        return val;
    }
    return '';
}

for (const ficha of fiches) {
    const tipificacaoResumida = extractField(ficha, 'Tipificação Resumida:', 'Código do Enquadramento:');
    let codigo = extractField(ficha, 'Código do Enquadramento:', 'Amparo Legal:');
    const amparoLegal = extractField(ficha, 'Amparo Legal:', 'Tipificação do Enquadramento:');
    const gravidade = extractField(ficha, 'Gravidade:', 'Penalidade:');
    const penalidade = extractField(ficha, 'Penalidade:', 'Medida Administrativa:');
    const medida = extractField(ficha, 'Medida Administrativa:', 'Pode\\s+Configurar\\s+Crime');
    const infrator = extractField(ficha, 'Infrator:', 'Competência:');
    const competencia = extractField(ficha, 'Competência:', 'Pontuação:');
    const pontuacaoStr = extractField(ficha, 'Pontuação:', 'Constatação da Infração:');

    if (codigo && tipificacaoResumida) {
        codigo = codigo.replace(/\s/g, '');

        if (/^\d{3,4}-\d{2}$/.test(codigo)) {
            // Calcular pontos
            let pontos = 0;
            if (pontuacaoStr.includes('3')) pontos = 3;
            if (pontuacaoStr.includes('4')) pontos = 4;
            if (pontuacaoStr.includes('5')) pontos = 5;
            if (pontuacaoStr.includes('7')) pontos = 7;
            
            // Extract multiplier from penalidade
            let multiplicador = 1;
            const multMatch = penalidade.match(/\((\d+)\s+vezes\)/i) || penalidade.match(/(\d+)\s+vezes/i);
            if (multMatch) {
                multiplicador = parseInt(multMatch[1]);
            }

            let valorBase = 0;
            if (gravidade.toLowerCase().includes('leve')) valorBase = 88.38;
            if (gravidade.toLowerCase().includes('média')) valorBase = 130.16;
            if (gravidade.toLowerCase().includes('grave') && !gravidade.toLowerCase().includes('gravíssima')) valorBase = 195.23;
            if (gravidade.toLowerCase().includes('gravíssima')) valorBase = 293.47;

            const valorFinal = (valorBase * multiplicador).toFixed(2).replace('.', ',');
            const valorFormatado = valorFinal !== "0,00" ? `R$ ${valorFinal}` : "Não aplicável";

            let gravidadeFormatada = gravidade;
            if (multiplicador > 1) {
                gravidadeFormatada += ` (${multiplicador}x)`;
            }
            
            infractions.push({
                id: codigo,
                codigo: codigo,
                artigo: amparoLegal,
                descricao: tipificacaoResumida,
                gravidade: gravidadeFormatada,
                pontos: pontos,
                valor: valorFormatado,
                penalidade: penalidade,
                medidaAdministrativa: medida,
                competencia: competencia,
                infrator: infrator
            });
        }
    }
}

// deduplicate
const uniqueInfractions = [];
const seen = new Set();
for (const inf of infractions) {
    if (!seen.has(inf.codigo)) {
        seen.add(inf.codigo);
        uniqueInfractions.push(inf);
    }
}

console.log(`Extracted ${uniqueInfractions.length} infractions.`);

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
}

export const infractionsData: Infraction[] = ${JSON.stringify(uniqueInfractions, null, 2)};
`;

fs.writeFileSync('../src/data/infractions.ts', tsContent);
console.log('src/data/infractions.ts updated successfully.');
