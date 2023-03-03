export default function ProductCard({data}) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <img width="300" src={item.image} alt={item.description} />
          <div>{item.description}</div>
          <div>R$ {item.price.toFixed(2).replace('.',',')}</div>
          <button>ADICIONAR AO CARRINHO</button>
        </div>
      ))}
    </div>
  )
}