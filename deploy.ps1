$ErrorActionPreference = "Stop"

echo "=== 1. Configurando o Git ==="
git init
git add .
git commit -m "Publicacao Inicial"
git branch -M main
git remote add origin https://github.com/tiagof6/Help-multas.git
git push -u origin main

echo "=== 2. Preparando para virar Site ==="
npm install --save-dev gh-pages
npx expo export --platform web

echo "=== 3. Publicando no GitHub Pages ==="
npx gh-pages -d dist

echo "=== SUCESSO! SEU SITE FOI PUBLICADO! ==="
