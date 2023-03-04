import styled from 'styled-components';

export const StyledProductTable = styled.table`
  width: 100%;

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  strong,
  span {
    display: block;
    color: #333;
  }

  span {
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
  }
`;
