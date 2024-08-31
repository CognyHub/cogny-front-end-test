import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 80px;
  padding: 0px;

  a {
    text-decoration: none;
  }
`;

export const EmtyCartImage = styled.img`
  width: 600px;
  height: 290px;
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F8375D;
  border-radius: 4px;
  border-color: transparent;
  padding: 13px;
  height: 42px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  width: 400px;
  cursor: pointer;
`;

export const TextCart = styled.span`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #F8375D;
`;
