# 🪵 Carpintaria — App de Orçamentos

Aplicação web progressiva (PWA) para criação de orçamentos profissionais de carpintaria.  
Funciona no telemóvel como uma app instalada, **sem precisar de internet após a primeira abertura**.

---

## 📁 Ficheiros do projeto

```
carpintaria-pwa/
├── index.html      ← A aplicação principal
├── manifest.json   ← Configuração da PWA
├── sw.js           ← Service worker (modo offline)
├── icon-192.png    ← Ícone da app (192×192 px) ← TENS DE CRIAR
├── icon-512.png    ← Ícone da app (512×512 px)  ← TENS DE CRIAR
└── README.md       ← Este ficheiro
```

> **Nota sobre os ícones:** Precisas de criar dois ícones PNG (192×192 e 512×512 px).
> Podes usar o [favicon.io](https://favicon.io) ou o [Canva](https://canva.com) para criar um ícone simples com as iniciais da carpintaria. Guarda-os com os nomes `icon-192.png` e `icon-512.png` na pasta do projeto.

---

## 🚀 Como colocar online (GitHub Pages)

### Passo 1 — Criar conta no GitHub
1. Vai a [github.com](https://github.com) e cria uma conta gratuita (se ainda não tens)

### Passo 2 — Criar o repositório
1. Clica no botão verde **"New"** (ou o **"+"** no canto superior direito → "New repository")
2. Em **Repository name** escreve: `carpintaria`
3. Deixa como **Public**
4. Clica **"Create repository"**

### Passo 3 — Fazer upload dos ficheiros
1. Na página do repositório, clica em **"uploading an existing file"**
2. Arrasta todos os ficheiros da pasta `carpintaria-pwa/` para a janela
3. Em baixo, clica **"Commit changes"**

### Passo 4 — Ativar o GitHub Pages
1. Vai a **Settings** (no menu do repositório)
2. No menu lateral esquerdo, clica em **"Pages"**
3. Em **"Source"** seleciona **"Deploy from a branch"**
4. Em **"Branch"** seleciona **"main"** e a pasta **"/ (root)"**
5. Clica **"Save"**

### Passo 5 — Obter o link
Após 1-2 minutos, a página estará disponível em:
```
https://SEU-USERNAME.github.io/carpintaria/
```
*(substitui `SEU-USERNAME` pelo teu nome de utilizador do GitHub)*

---

## 📲 Como o teu pai instala no telemóvel Android

1. Abre o **Chrome** no telemóvel
2. Vai ao link: `https://SEU-USERNAME.github.io/carpintaria/`
3. Aparece automaticamente um banner na aplicação: **"📲 Instalar como App"**
4. Carrega em **"Instalar"**
5. Confirma no popup do Chrome
6. ✅ Pronto! Aparece um ícone no ecrã inicial, igual a uma app normal

> A partir daí o teu pai abre sempre pelo ícone — nunca mais precisa de abrir o browser nem de ir às transferências.

---

## ✨ Funcionalidades

- ✅ Criar orçamentos com lista de peças, materiais e medidas
- ✅ Cálculo automático de totais com/sem IVA (23%)
- ✅ Gerar PDF profissional (via impressão do browser)
- ✅ Guardar histórico de orçamentos no telemóvel
- ✅ Carregar orçamentos anteriores para reeditar
- ✅ Dados da empresa (nome, morada, telefone, email, NIF, logo)
- ✅ Funciona offline após a primeira abertura
- ✅ Instalável como app no Android (e iOS)

---

## 🔧 Atualizações futuras

Para atualizar a app basta editar os ficheiros no GitHub (diretamente pelo site).  
O browser do teu pai atualiza automaticamente na próxima vez que tiver internet.
