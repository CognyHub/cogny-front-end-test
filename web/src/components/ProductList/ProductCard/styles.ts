import { darken } from 'polished';
import styled from 'styled-components';

export const StyledProductCard = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  height: 442px;
  width: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 10px 0 19px;
  }
`;

export const StyledProductCardButton = styled.button`
  background: #f8375d;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.06, '#F8375D')};
  }

  p {
    background: rgba(0, 0, 0, 0.2);
    padding: 20px;
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;
