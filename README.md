<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />


## React performance: identificando gargalos, reduzindo o bundlesize, e melhorando o render

nessa aula eu vou cobrir um passo a passo das tecnicas de melhoria de performance que eu utilizo ao criar aplicações com react vamos aprender a identificar gargalos, aplicar tecnicas para dividir nosso codigo em chunks menores, analizar o render dos nossos componentes e aplicar tecnicas de memoização para evitar
re-renders,vamos utilizar webworkers para livrar o processamento da trhead princial
deixando nosso app mais rapido e responsivo,  no final dessa aula, você será capaz
aplicar esses conceitos para analisar e melhorar o desempenho de seus aplicativos em react.

## Primeiros passos 🏁

Clone o repositório.

```sh
gh repo clone rocketseat-experts-club/React-performance-gargalos-bundlesize-render-2021-05-01  react-performance
```

`cd` no diretório.

```sh
cd react-performance
```

Instale as dependências do projeto:

```sh
yarn install

# ou

npm install
```

Inicie o servidor de desenvolvimento:

```sh
yarn start

# ou

npm run start
```

Finalmente, vá para [localhost: 3000](http://localhost:3000) no navegador de sua escolha e você está pronto para ir 🚀.

💡 **Dica profissional** use o `App.final.js` como guia de referência final, este arquivo contém o projeto final para que você possa acompanhar.


## Ferramentas 🧰

- [x] React como uma linguagem de IU
- [x] Prettier como formatador de código
- [x] TailwindCss UI como nosso kit de ferramentas de design
- [x] Cra-bundle-analyzer para analize  do bundle
- [x] Workerize-loader para a criação dos webworkers

## Estrutura do Projeto 🏗

O projeto segue um esqueleto regular [create-react-app](https://github.com/facebook/create-react-app) com muito poucas modificações.

Na pasta src, temos dois diretórios principais:

- `App.js`: o lugar onde está a lógica principal para este workshop
- `Components /`: componentes reutilizados nas páginas
- `Hooks /`: que contem nossos hooks costumizaveis,
- 'Pages/' : onde vamos ter as paginas referente as rotas da aplicão
- 'Utils' : que contem algums arquivos utilitarios para a aplicão

## Expert

| [<img src="https://avatars.githubusercontent.com/u/7741167?s=460&u=41e738d1178fcf31656665fe34c1c490d9c271cb&v=4" width="75px;"/>](https://github.com/vitormalencar) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Vitor Alencar](https://github.com/vitormalencar)                                                          |


## Licença

Projetado com ♥ por [vitormalencar](https://vitormalencar.com). Licenciado sob a [Licença MIT](licença).
