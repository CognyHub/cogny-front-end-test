import styled from 'styled-components';

export const CartRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
`;

export const ProductTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Quantity = styled.div`
  text-align: center;

  input {
    width: 30px;
    border: 1px solid #bfbfbf;
    border-radius: 3px;
    padding: 4px;
  }
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
