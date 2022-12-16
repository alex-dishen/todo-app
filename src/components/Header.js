import styled from 'styled-components';
import Form from './tasks/Form';

function Header() {
  return (
    <HeaderWrapper>
      <Collection>School</Collection>
      <Form />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
`;

const Collection = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 32px;
`;

export default Header;
