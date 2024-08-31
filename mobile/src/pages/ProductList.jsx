import React, { useContext } from 'react';

import LayoutBase from '../components/layoutBase';
import ProductCard from '../components/productCard';
import { ShoesContext } from '../contexts/shoesContext';

export default function ProductList({navigation}) {
  const { shoes } = useContext(ShoesContext);

  return (
    <LayoutBase navigation={navigation}>
      { shoes.map((shoe) => (<ProductCard product={shoe} key={shoe.id} />))}
    </LayoutBase>
  );
}