import styled from 'styled-components';

export const ButtonStyledNumber = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  gap: 12px;
  height: 40px;
  border: none;
  margin-top: 8px;
  cursor: pointer;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.gradientPink : theme.colors.gradientPink};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  cursor: ${({ selected }) => selected && 'not-allowed'};
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  gap: 12px;
  height: 40px;
  border: none;
  margin-top: 8px;
  cursor: pointer;
  background: ${({ theme, selected }) =>
    selected ? theme.colors.gradientPink : theme.colors.lightPink};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  cursor: ${({ selected }) => selected && 'not-allowed'};
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export const Quantity = styled.p`
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
`;
