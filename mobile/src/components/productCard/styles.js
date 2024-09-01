import styled from "styled-components/native";

export const Container = styled.View`
  width: 338px;
  border-radius: 4px;
  background-color: #FFFFFF;
  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 8px 0;
`;

export const ImageURL = styled.Image`
  align-self: center;
  width: 260px;
  height: 260px;
`;

export const About = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  gap: 10px;
  margin-bottom: 20px;
  padding: 0 30px;
  font-weight: 600;
  color: #333333;
`

export const Description = styled.Text`
  font-size: 16px;
  line-break: normal;
  text-align: start;
  text-align-last: right;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: 700;
`;
