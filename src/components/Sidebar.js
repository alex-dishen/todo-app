import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CollectionList from './collections/CollectionList';
import { setIsCreateNewCollection } from '../redux/todoSlice';
import { ReactComponent as AddSign } from '../assets/plus.svg';

function Sidebar() {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setIsCreateNewCollection(true));
  };

  return (
    <Aside>
      <Div>Collections</Div>
      <CollectionsListWrapper>
        <CollectionList />
      </CollectionsListWrapper>
      <AddSection onClick={openModal}>
        <Plus /> New Collection
      </AddSection>
    </Aside>
  );
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 230px;
  padding-top: 20px;
  background-color: rgb(32, 32, 32);
  color: white;
  border-right: 1px solid rgb(43, 43, 43);
`;

const CollectionsListWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  border-top: 1px solid rgb(43, 43, 43);
  border-bottom: 1px solid rgb(43, 43, 43);
`;

const Div = styled.div`
  padding: 10px 15px;
`;

const AddSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: rgb(130, 130, 130);
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 38, 38);
  }
  &:active {
    background-color: rgb(36, 36, 36);
  }
`;

const Plus = styled(AddSign)`
  height: 22px;
  fill: rgb(130, 130, 130);
`;

export default Sidebar;
