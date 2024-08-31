import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  width: 335px;
  padding: 10px;
`;

export const TotalLabel = styled.Text`
  color: #999999;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 5px;
`;

export const TotalPrice = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 30px;
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
