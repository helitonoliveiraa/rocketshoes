<h1 align="center">Rocketshoes</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/heliton1988/rocketshoes?color=%23FF500F">

  <a href="https://www.linkedin.com/in/helitonoliveira/">
    <img alt="Made by Héliton Oliveira" src="https://img.shields.io/badge/made%20by-Héliton Oliveira-%23FF500F">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%23FF500F">

  <a href="https://github.com/heliton1988/rocketshoes/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/heliton1988/rocketshoes?style=social">
  </a>
</p>

<p align="center">
  <a href="#pencil-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#wrench-ferramentas-utilizadas">Ferramentas utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrowdown-como-utilizar">Baixe o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pagefacingup-licença">Licença</a>
</p>

<h3 align="center">
  <img src="./.github/logo.png" />
</h3>

<h3 align="center">
  <img src="./.github/logo1.png" />
</h3>

<h3 align="center">
  <img src="./.github/logo2.png" />
</h3>

<br />

<p align="center">
    <a href="https://5f7dba07573f7f00084d9fbe--xenodochial-benz-1c8edb.netlify.app/">
    <img src="./.github/button.png">
  </a>
</p>

<br />

## :pencil: Sobre

Essa é uma aplicação que foi desenvolvida no Bootcamp GoStack da Rocketseat, visando aprender os conceitos e aplicabilidade da Arquitetura Flux.

## :wrench: Ferramentas utilizadas

- [ReactJS](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Styled Components](https://styled-components.com/)
- [React-Toastify](https://github.com/fkhadra/react-toastify)
- [Polished](https://polished.js.org/)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Immer](https://immerjs.github.io/immer/docs/introduction)
- [Axios](https://github.com/axios/axios)
- [Json-Server](https://www.npmjs.com/package/json-server)

## :arrow_down: Como utilizar

**Obs**: é necessário ter o `git` instalado em sua maquina.

```bash
# Clone o projeto
$ git clone https://github.com/heliton1988/rocketshoes.git

# Acesse a pasta do projeto
$ cd rocketshoes

# Instale as dependências
$ yarn / npm install

# Rode o front-end da aplicação
$ yarn start / npm run start
```

para rodar localmente a API desenvolvida usando `Json-Server`, siga os seguinte passos abaixo;

- Dentro da pasta `/rocketshoes` acesse a pasta `/service`
- Acesse o arquivo `api.js` e faça o seguinte;

```javascript
// troque a baseURL para localhost como no exemplo abaixo

const api = axios.create({
  baseURL: 'http://localhost:3000',
});
```

## :page_facing_up: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/heliton1988/rocketshoes/blob/master/LICENSE) para mais detalhes.

Feito com 💙 by [Héliton Oliveira](https://www.linkedin.com/in/helitonoliveira/) 👋 !!!
