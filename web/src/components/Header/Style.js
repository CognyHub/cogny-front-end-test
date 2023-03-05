import styled from 'styled-components';

export const HeaderS = styled.div`
  border: 1px solid var(--buttonBorder);
  height: 100px;
  width: 100%;
  background-color: var(--main);
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
  #main{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    #name {
      grid-area: n;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  #logouAndThemeDiv {
    height: 100%;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #themeBtn {
      margin-right: 10px;
    }
    #leaveBtn {
      border: 1px solid var(--buttonBorder);
      height: 90px;
      width: 100%;
      background: var(--secundary);
      color: var(--buttonText);
      border-radius: 4px;
      box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
      margin-right: 7px;
      &:hover {
        cursor: pointer;
        background: var(--extra);
      }
    }
  }
`;

export const ThemeS = styled.div`
  button {
    border: 1px solid var(--buttonBorder);
    height: 70px;
    width: 60px;
    background: var(--tertiary);
    color: var(--buttonText);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(145 103 172 / 12%), 0 1px 2px rgb(145 103 172 / 24%);
    #modeIcon {
      height: 25px;
      width: 25px;
    }
    #modeIconDark {
      height: 25px;
      width: 25px;
      color: #121212;
    }
    &:hover {
      cursor: pointer;
      background: var(--extra);
    }
}
`;

export default HeaderS;
