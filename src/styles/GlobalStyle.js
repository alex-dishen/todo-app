import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgb(24, 24, 31);
    font-family: Sen;
  }

  #root {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: '. main';
  }

  button {
    transition: 0.3s;
    &:hover {
      transform: scale(1.07);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default GlobalStyle;
