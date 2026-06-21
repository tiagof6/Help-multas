$ErrorActionPreference = "Stop"

echo "=== 2. Preparando para virar Site ==="
npx expo export --platform web

echo "=== CRIANDO ARQUIVO .nojekyll ==="
New-Item -ItemType File -Path dist\.nojekyll -Force

echo "=== 3. Publicando no GitHub Pages (COM ARQUIVOS OCULTOS) ==="
npx gh-pages -d dist --dotfiles

echo "=== SUCESSO! SEU SITE FOI PUBLICADO! ==="
