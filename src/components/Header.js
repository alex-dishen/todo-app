import styled from 'styled-components';
import Form from './Form';
import { ReactComponent as Arrow } from '../assets/leftArrow.svg';

function Header() {
  return (
    <HeaderWrapper>
      <Collection>
        <ArrowHolder>
          <StyledArrow />
        </ArrowHolder>
        School
      </Collection>
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

const ArrowHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  margin-right: 20px;
  background-color: rgb(33, 33, 42);
  border-radius: 12px;
  cursor: pointer;
`;

const StyledArrow = styled(Arrow)`
  height: 18px;
  width: 18px;
  fill: white;
`;

export default Header;
