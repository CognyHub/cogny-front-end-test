const firebaseMapper = (data) => data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

export { firebaseMapper };
