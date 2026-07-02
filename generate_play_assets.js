const Jimp = require('jimp');
const path = require('path');

async function createAssets() {
  try {
    const iconPath = path.join(__dirname, 'assets', 'icon.png');
    const playFeaturePath = path.join(__dirname, 'assets', 'play_feature.png');

    console.log('Lendo ícone original...');
    const icon = await Jimp.read(iconPath);

    // Criar o Gráfico de Recursos 1024x500
    console.log('Gerando Gráfico de Recursos 1024x500...');
    // Criar um fundo BRANCO para combinar perfeitamente com a borda do ícone
    const featureBg = await new Jimp(1024, 500, '#FFFFFF');
    
    // Clonar e redimensionar o ícone
    const featureIcon = icon.clone().resize(300, 300);
    
    // Calcular posição central
    const x = (1024 - 300) / 2;
    const y = (500 - 300) / 2;
    
    featureBg.composite(featureIcon, x, y);
    await featureBg.writeAsync(playFeaturePath);

    console.log('Imagem gerada com fundo branco!');
  } catch (err) {
    console.error('Erro ao gerar imagens:', err);
  }
}

createAssets();
