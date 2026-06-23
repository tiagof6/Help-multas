const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const message = args.join(' ');

if (!message) {
  console.error('❌ Erro: Você precisa fornecer uma mensagem sobre o que mudou.');
  console.error('Exemplo: npm run lancar "Corrigido botão de voltar"');
  process.exit(1);
}

const appJsonPath = path.join(__dirname, '..', 'app.json');
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const changelogPath = path.join(__dirname, '..', 'src', 'data', 'changelog.json');

// Ler e atualizar app.json
const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
const currentVersion = appJson.expo.version;

// Incrementa a versão (ex: 1.0.0 -> 1.0.1)
const parts = currentVersion.split('.');
parts[2] = parseInt(parts[2], 10) + 1;
const newVersion = parts.join('.');

appJson.expo.version = newVersion;
fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));

// Ler e atualizar package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Ler e atualizar changelog.json
let changelog = [];
if (fs.existsSync(changelogPath)) {
  changelog = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));
}
changelog.unshift({
  version: newVersion,
  date: new Date().toISOString(),
  message: message
});
fs.writeFileSync(changelogPath, JSON.stringify(changelog, null, 2));

console.log(`✅ Sucesso! Versão atualizada de ${currentVersion} para ${newVersion}.`);
console.log(`📝 Histórico salvo: "${message}"`);
console.log(`\n👉 PRÓXIMO PASSO: Vá na aba "Versões" do seu Painel Admin no celular para enviar a notificação pro Firebase!`);
