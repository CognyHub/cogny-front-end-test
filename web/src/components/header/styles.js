import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* TODO: ajustar alinhamento header */
  /* gap: 200px; */
  color: white;
  top: 0;
  background-color: #191920;
  width: 100%;
  padding: 20px 0px;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderHero = styled.h1`
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 52px;
  height: 36px;
`;


export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CartText = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

export const CartItemsQty = styled.span`
  font-size: 10px;
`;
