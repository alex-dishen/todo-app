import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: rgb(25, 25, 25);
    font-family: Sen, sans-serif;
  }

  #root {
    flex: 1;
    display: flex;
    color: white;
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
