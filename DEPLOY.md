# GitHub Pages Configuration

## Como fazer deploy no GitHub Pages:

1. **Instalar gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Adicionar scripts no package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://seuusuario.github.io/nome-do-repositorio"
}
```

3. **Fazer deploy:**
```bash
npm run deploy
```

## URLs importantes:
- **Repositório:** https://github.com/seuusuario/nome-do-repositorio
- **GitHub Pages:** https://seuusuario.github.io/nome-do-repositorio

## Comandos úteis:
```bash
# Clonar repositório
git clone https://github.com/seuusuario/nome-do-repositorio.git

# Adicionar arquivos
git add .

# Commit
git commit -m "feat: adicionar portfólio completo"

# Push para main
git push origin main

# Deploy para GitHub Pages
npm run deploy
```
