import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/TasksList';
import CollectionModal from './components/CollectionModal';

import './styles/normalize.css';

function App() {
  const [isCreateNewCollection, setIsCreateNewCollection] = useState(false);

  const tasks = useSelector((state) => state.tasks.tasks);
  const notCompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <Sidebar setIsCreateNewCollection={setIsCreateNewCollection} />
      <MainWrapper>
        <Content>
          <Header />
          <TasksList
            completedTasks={completedTasks}
            notCompletedTasks={notCompletedTasks}
          />
        </Content>
      </MainWrapper>
      {isCreateNewCollection && <CollectionModal />}
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
