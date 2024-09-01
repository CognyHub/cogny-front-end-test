import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 442px;
  border-radius: 4px;
  background-color: #FFFFFF;
  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const ImageURL = styled.img`
  align-self: center;
  width: 260px;
  height: 260px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  width: 260px;
  font-weight: 600;
  color: #333333;
`;

export const Description = styled.span`
  font-size: 16px;
`;

export const Price = styled.span`
  font-size: 21px;
`;
