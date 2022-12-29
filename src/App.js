import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/tasks/TasksList';
import CollectionModal from './components/collections/CollectionModal';
import './styles/normalize.css';

function App() {
  // localStorage.clear();
  const collections = useSelector((state) => state.collections);
  const { isCreateNewCollection, collectionID } = collections;

  return (
    <>
      <Sidebar />
      <MainWrapper>
        {collectionID === '' ? (
          <Instruction>Select a collection to start planning</Instruction>
        ) : (
          <Content>
            <Header />
            <TasksList />
          </Content>
        )}
      </MainWrapper>
      {isCreateNewCollection && <CollectionModal />}
    </>
  );
}

const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  overflow: scroll;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  width: min(590px, 66vw);
`;

const Instruction = styled.div`
  padding: 5px 15px;
  background-color: rgb(45, 45, 45);
  color: rgb(130, 130, 130);
  border-radius: 15px;
`;

export default App;
