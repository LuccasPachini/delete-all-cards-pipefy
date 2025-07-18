# 🧹 Pipefy Card Cleaner

Script em Node.js para automatizar a exclusão de cards em massa no Pipefy utilizando a API GraphQL.  
Ideal para remover dados de testes antes de iniciar uma integração real com plataformas como Workato.

## 🚀 Descrição

Durante o processo de preparação para integração do Pipefy com o Workato, foi necessário eliminar cerca de **600 cards de teste** existentes em um pipe.  
A exclusão manual seria inviável, então este script foi desenvolvido para **buscar e deletar todos os cards automaticamente**, economizando tempo e tarefas automáticas (tasks) que seriam consumidas indevidamente pela Workato.

## 🔧 Tecnologias Utilizadas

- Node.js
- Fetch API (nativo no ambiente moderno ou com `node-fetch`)
- GraphQL (Pipefy API)

## 📁 Estrutura do Código

O script é dividido em três etapas:

1. **Buscar os cards existentes no Pipefy** (`allCards`)
2. **Deletar os cards individualmente** (`deleteCard`)
3. **Executar o processo completo de forma assíncrona**

## ⚙️ Como usar

1. **Clone o repositório ou copie o código para sua máquina local.**
Instale as dependências (caso utilize node-fetch ou dotenv):

`npm install node-fetch dotenv`

2. **Configure o script:**

Substitua API_TOKEN pelo seu token da API do Pipefy.

Substitua PIPE_ID pelo ID do pipe que você deseja manipular.

3. **Execute o script:**

`node deletarCards.js`
