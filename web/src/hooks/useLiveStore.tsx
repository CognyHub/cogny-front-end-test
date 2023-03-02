import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { Stock } from '../types/stock';

export function useLiveStore() {
  const [liveStock, setLiveStock] = useState<Stock[]>([]);

  useEffect(() => {
    const stockRef = collection(db, 'stock');
    const unsubscribe = onSnapshot(stockRef, (snapshot) => {
      const stockWithId = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
        } as Stock;
      });

      setLiveStock(stockWithId);
    });

    return () => unsubscribe();
  }, []);

  return [liveStock];
}
