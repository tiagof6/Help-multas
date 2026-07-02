const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

async function fixScreenshots() {
  const desktopPath = path.join(require('os').homedir(), 'Desktop');
  const assetsPath = path.join(__dirname, 'assets');

  // Find the JPEG files on the desktop that match the UUID pattern
  const files = fs.readdirSync(desktopPath)
    .filter(f => f.endsWith('.jpeg'))
    .map(f => ({ name: f, time: fs.statSync(path.join(desktopPath, f)).mtime.getTime() }))
    .sort((a, b) => b.time - a.time)
    .slice(0, 3); // Take the 3 most recent

  console.log('Encontrados ' + files.length + ' prints no Desktop.');

  for (let i = 0; i < files.length; i++) {
    const inputPath = path.join(desktopPath, files[i].name);
    const outputPath = path.join(assetsPath, `print_corrigido_${i + 1}.png`);
    
    console.log(`Corrigindo imagem ${i + 1}...`);
    try {
      const img = await Jimp.read(inputPath);
      
      // Cria fundo 1080x1920 exato (9:16)
      const bg = await new Jimp(1080, 1920, '#0f172a');
      
      // Redimensiona o print para caber na altura (1920)
      img.resize(Jimp.AUTO, 1800); // deixa uma bordinha em cima e embaixo
      
      // Calcula posição central
      const x = (1080 - img.bitmap.width) / 2;
      const y = (1920 - img.bitmap.height) / 2;
      
      bg.composite(img, x, y);
      await bg.writeAsync(outputPath);
      console.log(`Salvo em: ${outputPath}`);
    } catch (e) {
      console.error('Erro na imagem', i, e);
    }
  }
  console.log('TUDO PRONTO! Imagens corrigidas na pasta assets.');
}

fixScreenshots();
