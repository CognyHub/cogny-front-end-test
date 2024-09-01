import styled from 'styled-components';

const Btn = styled.button`
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
  background-color: ${({ color }) => color || '#F8375D'};
`;

export default Btn;
