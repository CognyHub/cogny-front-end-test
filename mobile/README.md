# CognyShoes Mobile

Este projeto foi desenvolvido durante um processo seletivo da empresa @Cogny com o objetivo de criar o frontend de uma loja de sapatos para web e mobile.

## Tecnologias utilizadas

- Web
  - ReactJS
  - Styled-Components
- Mobile
  - React-Native
  - Native-Base (estilização)
- Backend
  - Firebase Firestore

## Como instalar

### Firebase

1. Crie duas coleções no Firebase Database (Cloud Firestore): `products` e `stock`.
2. As coleções devem ter a seguinte configuração:

`products`:

- id: any
- description: string
- image: string
- price: number

`stock`:

- id: any
- product_id: string (id do documento do produto, não a referência)
- quantity: número inteiro

3. Com as coleções criadas, crie um aplicativo web no Firebase e adicione as credenciais do aplicativo em um arquivo `.env.local`.
   - PS: siga o exemplo do arquivo `.env.example` para adicionar as credenciais necessárias.

### Iniciando a aplicação

Após configurar o Firebase e as variáveis de ambiente, siga os seguintes passos:

1. Abra o terminal na pasta `mobile` e instale as dependências com o comando `npm install`.
2. Ainda no terminal, inicie a aplicação com o comando `npm start` ou `npx expo start`.
3. Agora a aplicação Expo será iniciada com o QR-Code e o link da aplicação.
