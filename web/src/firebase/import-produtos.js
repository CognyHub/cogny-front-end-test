import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import produtosJson from "./produtos.json" assert { type: "json" };

const firebaseConfig = {
  apiKey: "AIzaSyD0EyZY0qBgNqQqE83qnW3RGtiIdO4vySE",
  authDomain: "cogny-front-end.firebaseapp.com",
  projectId: "cogny-front-end",
  storageBucket: "cogny-front-end.appspot.com",
  messagingSenderId: "419407130273",
  appId: "1:419407130273:web:dcca87c66038ab45378ae0",
  measurementId: "G-976VL59S3B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const produtosJson = [
  {
    "Descrição": "Tênis de Caminhada Leve Confortável",
    "Preço": 179.90,
    "Imagem Url": "https://d3ugyf2ht6aenh.cloudfront.net/stores/002/212/775/products/dan_5805-24eb82997f79414c5216628780951659-480-0.jpg"
  },
  {
    "Descrição": "Sandália Conforto de Couro Legítimo",
    "Preço": 199.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/61HOhyqG0RL._AC_SL1500_.jpg"
  },
  {
    "Descrição": "Sapato Social Masculino em Couro",
    "Preço": 249.90,
    "Imagem Url": "https://img.irroba.com.br/fit-in/150x150/filters:format(webp):fill(fff):quality(95)/lojasapa/catalog/produtos/pumpsys/24405-amendoa-cafe/24405-amazom-amendoa/sapato-casual-masculino-sapatoterapia-amendoa-pumpsys-24405-2.jpg"
  },
  {
    "Descrição": "Tênis de Corrida com Amortecimento",
    "Preço": 299.90,
    "Imagem Url": "https://static.netshoes.com.br/produtos/tenis-olympikus-perfect-3-unissex/93/2I2-6125-793/2I2-6125-793_zoom1.jpg?ts=1666195360ims=280x280"
  },
  {
    "Descrição": "Bota de Couro com Cano Alto",
    "Preço": 399.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/616ALpXg4PL._AC_SL1000_.jpg"
  },
  {
    "Descrição": "Sapatênis Casual em Couro",
    "Preço": 149.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/515kp1Gv1NL._AC_SL1000_.jpg"
  },
  {
    "Descrição": "Sandália Rasteira com Detalhes em Pedraria",
    "Preço": 149.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/513bR4WMIzL._AC_SL1200_.jpg"
  },
  {
    "Descrição": "Sapato Oxford em Couro com Solado de Borracha",
    "Preço": 299.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/51HQwJO54TL._AC_SL1500_.jpg"
  },
  {
    "Descrição": "Tênis Slip-On Unissex de Tricot",
    "Preço": 129.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/51I0UxtSLML._AC_SL1200_.jpg"
  },
  {
    "Descrição": "Bota de Cano Curto com Salto Médio",
    "Preço": 349.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/41ZOHebksWL._AC_.jpg"
  },
  {
    "Descrição": "Sapatilha Feminina de Couro com Laço",
    "Preço": 99.90,
    "Imagem Url": "https://m.media-amazon.com/images/I/51eRGfQGXEL._AC_SL1000_.jpg"
  }
]

async function adicionarProdutos() {
  try {
    const produtosRef = collection(db, 'produtos');
    for (const produto of produtosJson) {
      const docRef = await addDoc(produtosRef, produto);
      console.log('Produto adicionado com ID:', docRef.id);
    }
  } catch (e) {
    console.error('Erro ao adicionar produtos:', e);
  }
}

adicionarProdutos();