import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import CollectionList from './collections/CollectionList';
import { setIsCreateNewCollection } from '../redux/todoSlice';

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
      <AddButton onClick={openModal}>+</AddButton>
    </Aside>
  );
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  padding: 20px 0;
  background-color: rgb(32, 32, 32);
  color: white;
  border-right: 1px solid rgb(43, 43, 43);
`;

const CollectionsListWrapper = styled.div`
  height: 100%;
  margin-bottom: 20px;
  overflow: scroll;
  border-top: 1px solid rgb(43, 43, 43);
  border-bottom: 1px solid rgb(43, 43, 43);
`;

const Div = styled.div`
  padding: 10px 15px;
`;

const AddButton = styled.button`
  height: 40px;
  width: 40px;
  margin: 0 auto;
  background-color: #099d32;
  color: white;
  font-size: 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default Sidebar;
