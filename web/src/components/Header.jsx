import {useSelector} from "react-redux";

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px'
}

const Header = () => {
    const totalProductsOnCart = useSelector((state) => state.cart.product.length);
    return (
        <>
            <div style={containerStyle}>
                <h1 style={{color: '#FFFFFF'}}>COGNYSHOES</h1>
                <div>
                    <h3 style={{color: '#FFFFFF'}}>Meu Carrinho</h3>
                    <p style={{color: '#78787C'}}>Items {totalProductsOnCart}</p>
                </div>
            </div>
        </>
    )
}

export default Header;