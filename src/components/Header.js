import styled from 'styled-components';
import Form from './tasks/Form';
import { ReactComponent as Trash } from '../assets/bin.svg';

function Header() {
  return (
    <HeaderWrapper>
      <Collection>
        School <Bin />
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
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 32px;
`;

const Bin = styled(Trash)`
  height: 40px;
  width: 40px;
  padding: 5px;
  fill: white;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Header;
