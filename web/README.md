<h1 align="center">Desafio Cogny - Front End (web) :office: </h1>


<div align="center">

![Prévia](https://raw.githubusercontent.com/jefersongjr/cogny-front-end-test/jeferson-gomes-cogny-test-front-end/web/src/imagem/Captura%20de%20tela_2023-03-05_22-48-53.jpg)

</div>

<h4 align="center"> 
	
	🚧  APP React 🚀 Finalizado...  ::heavy_check_mark::
</h4>

<p align="center">
 <a href="#sobre">Sobre</a> • 
 <a href="#ferramentas">Tecnologias</a> • 
 <a href="#requisitos">Como executar: </a> • 
 <a href="#funcionalidades">Funcionalidades</a> 
</p>

<h2 id="sobre"> 🚀📋 Sobre: </h2>

Esse Projeto foi desenvolvido por mim , [Jeferson Gomes](https://www.linkedin.com/in/jefersongjr/)
na etapa técnica do processo seletivo da empresa [Cogny](https://www.https://www.cognyhub.com/) . <br>
Foi criado um E-Commerce, utilizando React e Firebase .<br>

<h2 id="ferramentas"> 🛠️ Construído com: </h2>

* React
* Firebase
* VsCode

<h2 id="requisitos"> 📖 Como Executar: </h2>

<h4> ✔️ Requisítos Mínimos </h4>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com) , [Node](https://nodejs.org/pt-br/download/) ,
Além disto é bom ter um editor para trabalhar com uma IDE de código como o ![VsCode](https://code.visualstudio.com/).


<h4> 📔 Instruções </h4>

```

# Clone este repositório
$ git clone git@github.com:jefersongjr/cogny-front-end-test.git

# Acesse a pasta do projeto
$ navegue até a pasta do projeto

# O próximos passo deve ser executado no diretório que tem o arquivo pom.xml

# Instale as dependências
$ mvn install

# Para o APP funcionar corretamente, deve-se ter instalado a versão do Oracle DataBase.

# Usando o DB com docker no Bash
$ navegue até o diretório que contém o arquivo DockerFile.

# Usando o DB com docker no Bash

# Digite no terminal:
$ docker compose up

# Esse comando criará um container com o DataBase.
# Execute os dois comandos :

$ docker start oracle-db

$ docker exec -it oracle-db bash -c "source /home/oracle/.bashrc; sqlplus /nolog" 

# O primeiro comando irá iniciar o container, se o mesmo estiver pausado.
# O Segundo ira abrir um terminal interativo do SQL.

# Conecte-se ao banco de dados:

$ connect SYSTEM

# Aparecerá a mensagem "Enter the password"
# A senha para o Login está salva no arquivo DockerFile

# Quando estiver conectado com o Oracle DB, execute o programa.

```

<h2 id="funcionalidades"> 💻 Funcionalidades da Aplicação </h2>

<h3> Criar Tabela </h3>

Ao Executar a Aplicação, ela ira conectar-se ao DB e
logo em seguida, irá criar a entidade <b> Funcionários </b>


<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/tabelaCriadaConsole.jpg)
 
 
<h5> No DB: </h5>

 ![DB]( https://github.com/jefersongjr/desafio-projedata/blob/main/images/dbCriar.jpg)
 
 <h3> Popular Tabela </h3>

Em Seguida irá adicionar os Funcionários:

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/inserirConsole.jpg)
 
 
<h5> No DB: </h5>

 ![DB](https://github.com/jefersongjr/desafio-projedata/blob/main/images/inserirDb.jpg)


<h3> Remover Funcionário </h3>

O Próximo passo será Remover o Funcionário João da Tabela.


<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/excluirConsole.jpg)
 
 
<h5> No DB: </h5>

 ![DB](https://github.com/jefersongjr/desafio-projedata/blob/main/images/removerDb.jpg)
 
 
 <h3> Remover Funcionário </h3>

O Próximo passo será Remover o Funcionário João da Tabela.


<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/excluirConsole.jpg)
 
  
 <h3> Listar Todos </h3>

A próximo funcionalidade será listar todos os funcionários no console

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/imprimindoTodosConsole.jpg)
 
 
 <i> Os próximos passos, serão impressões da tabelas com informações diferentes: </i>
 
 <h3> Agrupando por função </h3>

Imprimindo todos os funcionários agrupador por função.

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/imprimindoFUncao1.jpg)
 
 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/imprimindoFUncao2.jpg)
  
 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/imprimindoFUncao3.jpg)
 
  
 <h3> Imprimindo pelo Mês de Aniversário </h3>

Imprimindo todos os funcionários que fazem aniversário no mês 10 e 12.

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/listandoMesConsole.jpg)


 <h3> Maior Idade </h3>

Imprimindo nome e idade do funcionários com a maior idade :

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/maisVelho.jpg)



 <h3> Ordem Alfabética </h3>

Imprimindo todos funcionários em ordem alfabética

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/ordemAlfabética.jpg)


 <h3> Soma dos Salários </h3>

Imprimindo a Soma de todos os salários:

<h5> No console: </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/somaSalario.jpg)
 
  <h3> Quantos Salários Mínimos </h3>

Imprimindo a quantidade de salários mínimos equivalentes, ao salário de cada funcionário

<h5> No console:   </h5>

 ![Console](https://github.com/jefersongjr/desafio-projedata/blob/main/images/salarioMin.jpg)
 


Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
