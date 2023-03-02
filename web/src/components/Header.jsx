const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px'
}

const Header = () => (
    <>
        <div style={containerStyle}>
            <h1 style={{color: '#FFFFFF'}}>COGNYSHOES</h1>
            <h3 style={{color: '#FFFFFF'}}>Meu Carrinho</h3>
        </div>
    </>
)

export default Header;