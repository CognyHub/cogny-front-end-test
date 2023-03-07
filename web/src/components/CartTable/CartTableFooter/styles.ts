import { darken } from 'polished';
import styled from 'styled-components';

export const StyledCartTableFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  button {
    background: #f8375d;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#F8375D')};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

export const StyledTotalSection = styled.div`
  margin-left: 10px;

  span {
    color: #999;
    font-weight: bold;
    display: inline-block;
  }

  strong {
    display: inline-block;
    font-size: 28px;
    margin-left: 5px;
  }
`;
