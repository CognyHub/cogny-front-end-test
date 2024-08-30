import ProductCard from '../components/productCard';
import LayoutBase from '../components/layoutBase';
import { useContext } from 'react';
import { ShoesContext } from '../contexts/shoesContext';
import React from 'react';

function ShoeList() {
  const { shoes } = useContext(ShoesContext);

  return (
    <LayoutBase>
      { shoes.map((shoe) => ( <ProductCard product={shoe} key={shoe.id} /> )) }
    </LayoutBase>
  );
}

export default ShoeList;
