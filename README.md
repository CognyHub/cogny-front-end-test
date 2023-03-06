# Desafio para o processo seletivo SHARENERGY 2023/01

# O Desafio

A proposta consiste em desenvolver uma simples aplicação, com versões web e mobile, para listagem de produtos e criação de pedidos, integrando com o Firebase.

Deve-se criar um projeto no Firebase e integrá-lo aos projetos web e mobile disponibilizados nesse teste, fazendo com que compartilhem os mesmos dados para desenvolver os seguintes pontos:

No Firebase, use o Firestore Database para criar suas coleções.
Crie uma coleção para armazenar os produtos, cadastrando no mínimo 10 produtos, com Descrição, Preço e Imagem Url.
Siga os estilos propostos nesse Template Figma e desenvolva as duas telas em ambos os ambientes.
A tela de listagem de produtos deve consumir os dados criados anteriomente no Firebase.
A tela do carrinho deve conter os produtos selecionados pelo usuário na tela anterior, não deixando o usuário adicionar o mesmo produto mais de uma vez.
Ao finalizar o pedido, deve-se apresentar um alerta para o usuário, informando que o pedido foi finalizado e remover os produtos selecionados, liberando o carrinho para novas compras.
Desafio: Criar uma ou mais coleções no Firebase e armazenar os produtos selecionados pelo usuário presentes no carrinho.
<br>

Será necessário que a porta 3000 esteja disponível para aplicação
<br>
<hr> 
<br>

# Link Youtube do projeto funcionando

[Apresentação do Desafio](https://youtu.be/M2zqkyx-Z_s)

<br>
<hr>
<br>
# Orientações:
 <br>

<details>
  <summary>
  <strong>🛠 Ferramentas:</strong>
  </summary> <br>
  
  <summary>
  <strong>Front End:</strong>
  </summary>
  <a href="https://pt-br.reactjs.org/">React</a><br>
<br>

<details>
 <summary>
 <strong>💻 Como executar a aplicação:</strong>
 </summary><br>

 1. Clone o repositório

  - Use o comando: `git clone git@github.com:brunomourabastos/cogny-front-end-test.git`.
    - Entre na pasta do repositório que você acabou de clonar, use o comando `cd cogny-front-end-test`.
 
 2. Instale as dependências

  - Dentro da pasta web, use o comando: `npm run install`.
    - Aguarde a instalação das dependências. Nessa etapa serão instaladas as dependências do frontend.
 
 3. Iniciar Front End:
 
   - Dentro da pasta (mesma dos passos anteriores).
    - Use o comando `npm start`.

      
 <strong>Com isso, a exibição no front end em localhost:3000.</strong>
 
 </details>
 <hr>
 <br>