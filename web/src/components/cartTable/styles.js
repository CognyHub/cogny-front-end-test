import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  padding: 35px;
  background-color: #fff;
  border-radius: 4px;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeaderColumn = styled.div`
  flex: 1;
  margin-left: 120px;
  &:first-child {
    flex: 5;
  }

  color: #999999;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  padding: 20px 0;
  margin-top: 20px;
`;

export const TotalLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 6px;
  color: #999999;
  text-transform: uppercase;
`;

export const TotalPrice = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const FinalizeButton = styled.button`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  background-color: #F8375D;
  height: 42px;
  width: fit-content;
  padding: 13px 20px;
  border-radius: 4px;
  border-color: transparent;
  cursor: pointer;
`;

export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  margin-top: 35px;
`;
