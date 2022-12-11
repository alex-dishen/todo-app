import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #1d1e21;
    font-family: Sen;
  }

  #root {
    min-width: 504px;
    margin: 40px 0 40px 0;
    padding: 35px 45px 35px 45px;
    background-color: rgb(40, 42, 46);
    border-radius: 25px;
    overflow: scroll;
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

  @media (max-width: 640px) {
    #root {
      transform: scale(0.8);
      margin: -60px -20px -60px -20px;
    }
  }

  @media (max-width: 510px) {
    #root {
      transform: scale(0.6);
      margin: -160px -70px -160px -70px;
    }
  }
`;

export default GlobalStyle;
