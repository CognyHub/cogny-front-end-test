import styled from 'styled-components';

export const StyledCartTableItem = styled.tr`
  img {
    height: 100px;
    width: 100px;
    object-fit: contain;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
    margin-right: 60px;
  }
`;
