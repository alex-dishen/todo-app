import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/tasks/TasksList';
import CollectionModal from './components/collections/CollectionModal';
import './styles/normalize.css';

function App() {
  const [isCreateNewCollection, setIsCreateNewCollection] = useState(false);

  return (
    <>
      <Sidebar setIsCreateNewCollection={setIsCreateNewCollection} />
      <MainWrapper>
        <Content>
          <Header />
          <TasksList />
        </Content>
      </MainWrapper>
      {isCreateNewCollection && (
        <CollectionModal
          setIsCreateNewCollection={setIsCreateNewCollection}
          isCreateNewCollection={isCreateNewCollection}
        />
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
