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
        background-color: rgb(40, 42, 46);
        margin: 40px 0 40px 0;
        padding: 35px 45px 35px 45px;
        border-radius: 25px;
        overflow: scroll;
    }
`

export default GlobalStyle;