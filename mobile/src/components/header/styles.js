import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #141419;
  width: 100%;
  padding-bottom: 20px;
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const HeaderHero = styled.Text`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
`;

export const Logo = styled.Image`
  width: 34px;
  height: 23px;
`;

export const CartIcon = styled.Image`
  width: 24px;
  height: 25px;
  margin-right: 6px;
`;

export const CartContainer = styled.View`
`;

export const CartCunterContainuer = styled.View`
  background-color: #F8375D;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  text-align: center;
  width: fit-content;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
`;

export const CartItemsQty = styled.Text`
  font-size: 12px;
  color: white;
  text-align: center;
`;
