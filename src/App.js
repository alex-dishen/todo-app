import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/tasks/TasksList';
import CollectionModal from './components/collections/CollectionModal';
import './styles/normalize.css';

function App() {
  const collections = useSelector((state) => state.collections);
  const { isCreateNewCollection } = collections;
  const currentCollectionID = collections.collectionID;
  const currentCollection = collections.collections.filter(
    (collection) => collection.id === currentCollectionID
  );

  return (
    <>
      <Sidebar />
      <MainWrapper>
        <Content>
          <Header
            currentCollectionID={currentCollectionID}
            currentCollection={currentCollection}
          />
          <TasksList />
        </Content>
      </MainWrapper>
      {isCreateNewCollection && (
        <CollectionModal isCreateNewCollection={isCreateNewCollection} />
      )}
    </>
  );
}

const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  overflow: scroll;
`;

const Content = styled.div`
  width: min(590px, 66vw);
`;

export default App;
