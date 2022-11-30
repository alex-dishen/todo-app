import Form from './Form';
import styled from 'styled-components';

function Header() {
    return(
        <HeaderWrapper>
            <Logo>To Do</Logo>
            <Form />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 30px;
`

const Logo = styled.div`
    color: #ffb859;
    font-weight: 600;
    font-size: 32px;
`

export default Header;