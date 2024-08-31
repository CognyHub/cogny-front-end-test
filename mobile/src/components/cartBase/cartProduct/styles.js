import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 10px 5px 10px 5px;
`;

export const ProductImg = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Description = styled.Text`
  text-align: left;
  font-size: 14px;
  width: 200px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const AboutText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80px;
  gap: 5px;
  flex-wrap: wrap;
`;

export const About = styled.View`
  display: flex;
  flex-direction: row;
  min-height: 80px;
  gap: 10px;
`;

export const QuantityInput = styled.TextInput`
  /* width: 50px;
  height: 26px; */
  border: 1px solid #dddddd;
  background-color: white;
  border-radius: 4px;
  padding: 5px 20px;
  height: 25px;
`;

export const QuantityDetails = styled.View`
  background-color: #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  height: 40px;
`;
