import styled from 'styled-components';
import { View } from "react-native";

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  width: max-content;
  border-radius: 4px;
  margin: 8px 8px;
  background-color: white;
  
`;

export const ImageContainer = styled(View)`
  width: 147px;
  height: 188px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
