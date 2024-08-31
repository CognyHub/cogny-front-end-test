import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
  padding: 0px;
  height: 650px;
`;

export const EmtyCartImage = styled.Image`
  width: 250px;
  height: 140px;
`;

export const Btn = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F8375D;
  border-radius: 4px;
  border-color: transparent;
  padding: 13px;
  height: 42px;
`;

export const BtnText = styled(Text)`
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`;

export const TextCart = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #F8375D;
`;
