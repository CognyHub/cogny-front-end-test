<h2 align="center">
  Cogny Web Teste | Vitória C. Meinerz
</h2>

## Tecnologias

- React
- Styled Components
- Firebase
- Jest

## Descrição
Segui todos os requisitos, porém fiz algumas adições que julguei interessantes, como:
- Substirui o alert padrão por um modal customizado, para os casos de o produto já estar no carrinho. (o commit adicionando o alert padrão, como consta nos requisitos está [aqui](https://github.com/CognyHub/cogny-front-end-test/commit/01674c89c27e829ccbbaa62129f9962f6f9c58d7#diff-795189dd0668b9767adac75a6968ec5307fc2fdfe8f83a28b7091877a254f0d1)
- Fiz o mesmo com o alert padrão ao finalizar a compra, o commit com o alert pedido no desafio está [aqui](https://github.com/calvitoria/cogny-front/commit/dc0a5e1f874a7e088d0b9bbb135bd8ff352a3964)
- Adicionei uma regra de negócio que verifica se a quantidade escolhida pelo usuário é 0, se sim, um modal é mostrado, e ao clicar em remover, o produto selecionado é removido do database do carrinho, assim como é removido da listagem de itens do carrinho.
- Criei um componente que é renderizado quando o carrinho está vazio, informando o usuário que não existem itens e um botão que leva de volta à listagem de produtos, assim como no header.
- Adicionei testes utilizando jest, para garantir a cobertura do projeto já que é uma prática comum no meu fluxo de trabalho.
- Criei no firebase as collections para o carrinho (cart) e pedidos (orders) além de claro, os produtos (products).

Se tivesse mais tempo disponível, gostaria de:
- Testar todas as services criadas
- Ajustar os console.errors dos testes
- Refatorar alguns métodos e nome de variáveis, para deixar o código mais limpo.
- Também utilizei apenas as imagens, valores e descrições contidas no exemplo do figma, pois não ficou claro se poderia modificar essas informações. Após a entrega do desafio com certeza irei adicionar itens diferentes, pois como está, apesar de os Ids serem distintos, os produtos (imagem, valor e descrição) estão repetidos.

Adorei a experiência, pois nunca havia utilizado firebase em meus projetos! Com certeza levarei para meus próximos projetos pessoais! :)

## Resultado:

https://github.com/user-attachments/assets/b51d57c1-e8af-4d4f-bba9-b9bf510e0daa

## Scrips do projeto:

### `npm start`

Para rodar o projeto localmente, por padrão na porta 3000 [http://localhost:3000](http://localhost:3000)

### `npm test`

Roda os testes do projeto, utilizando Jest.

### `npm test -- --coverage`

Roda os testes e apresenta a tabela de cobertura dos testes em relação ao projeto.


### `npm run build`

Builda o projeto



## Contato:
[LinkedIn](https://www.linkedin.com/in/calvitoria/) | calvi.vitoria@gmail.com | [CV](https://drive.google.com/file/d/1TBSuBKFueBHWvp__iGXrMoVrRq2fBJz6/view?usp=sharing)
