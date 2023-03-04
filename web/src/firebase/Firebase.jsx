import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "products-shoes.firebaseapp.com",
  projectId: "products-shoes",
});

export async function Firebase() {
  try {
    const db = getFirestore(firebaseApp);
    const shoesCollection = collection(db, "shoes");
    const shoesQuery = await getDocs(shoesCollection);
    const shoesData = shoesQuery.docs.map((shoesDoc) => {
      const shoes = shoesDoc.data();
      const { title, price, thumbnail } = shoes;
      return { id: shoesDoc.id, title, price, thumbnail };
    });
    return shoesData;
  } catch (error) {
    console.error("Erro ao buscar lista de sapatos:", error);
    throw error;
  }
};
