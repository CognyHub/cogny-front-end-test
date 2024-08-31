import styled from "styled-components/native";
import { TouchableOpacity, Text } from 'react-native';

export const Container = styled.View`
  display: flex;
  align-self: center;
  flex-direction: row;
`;

export const Counter = styled.View`
  background-color: #c62c4a;
  border-radius: 4px 0 0 4px;
  border-color: transparent;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const CounterText = styled(Text)`
  color: white;
  text-align: center;
`;

export const Btn = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #F8375D;
  border-radius: 0 4px 4px 0;
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