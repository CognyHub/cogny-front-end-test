import React, { useContext } from 'react';
import ProductCard from '../components/productCard';
import LayoutBase from '../components/layoutBase';
import { ShoesContext } from '../contexts/shoesContext';

function ProductList() {
  const { shoes } = useContext(ShoesContext);

  return (
    <LayoutBase>
      { shoes.map((shoe) => (<ProductCard product={shoe} key={shoe.id} />)) }
    </LayoutBase>
  );
}

export default ProductList;
