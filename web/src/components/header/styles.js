import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  top: 0;
  background-color: #191920;
  width: 100%;
`;

export const Alignment = styled.div`
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderHero = styled.h1`
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const Logo = styled.img`
  width: 52px;
  height: 36px;
`;


export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* gap: 6px; */
`;

export const CartText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const CartItemsQty = styled.span`
  font-size: 12px;
`;
