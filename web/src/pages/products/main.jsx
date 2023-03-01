import { getFirestore } from "firebase/firestore"
import { firebaseApp } from "./services/db/fireApp"


export default function Main() {
  const db = getFirestore(firebaseApp)
  return (
    <main>
     <h1>Products</h1>
    </main>
  );
}