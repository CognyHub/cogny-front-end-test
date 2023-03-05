import React, { useContext, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { CardStyle } from '../styles';
import { addSubProducts, carQuantity } from '../utils/fuctions';
import context from '../context/Context';

function Card({
  id, price, name, url, description,
}) {
  const { totalCar, setTotalCar } = useContext(context);
  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    const shoes = {
      price, name, url, description, id,
    };
    addSubProducts(shoes);
    setTotalCar(carQuantity());
    setClicked(false);
  };
  useEffect(() => {
    setTotalCar(carQuantity());
  }, [totalCar]);
  return (
    <CardStyle>
      <div
        className="card"
      >
        <div className="cardImg">

          <img
            style={{ width: '200px' }}
// I've changed the inline height as it looks better. I need to remember to change it after all.
            src={url}
            alt={name}
          />
        </div>

        <div>
          {/* {!clicked
      && (
      <p>
        No meu carrinho!
      </p>

      )} */}
          <p>
            {`${name}. ${description}`}
          </p>
          <div>

            <h2 className="price">
              {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </h2>

          </div>

        </div>

        <div className="divButtons">
          <div className="number">
            <p>1</p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            disabled={!clicked}
          >
            ADICIONAR AO CARRINHO
          </button>

        </div>

      </div>
    </CardStyle>
  );
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
