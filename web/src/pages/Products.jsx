import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import {db} from "../api/firebase";
import { Card, Spinner, Button } from "react-bootstrap";
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const q = collection(db, "produtos");
        onSnapshot(q, (querySnapShot) => {
            setProducts(querySnapShot.docs.map(doc => ({
                ...doc.data()
            })))
        })
    }, []);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {products.length !== 0 ? products.map(({descricao, preco, url_imagem}, index) => (
                <Card style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: '18rem',
                    backgroundColor: '#FFFFFF',
                    margin: '20px',
                    borderRadius: '10px'
                }} key={ index }>
                    <Card.Img variant="top" src={ url_imagem } style={{ maxWidth: '286px' }}/>
                    <Card.Body>
                        <Card.Title>{ descricao }</Card.Title>
                        <Card.Text>R$ { preco }</Card.Text>
                        <Button variant="danger">Adicionar ao carrinho</Button>
                    </Card.Body>
                </Card>
            )) : <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            }
            </div>
        </>
    )
}

export default Products;