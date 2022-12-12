import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/TasksList';
import './styles/normalize.css';

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const notCompletedTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <Sidebar />
      <MainWrapper>
        <Content>
          <Header />
          <TasksList
            completedTasks={completedTasks}
            notCompletedTasks={notCompletedTasks}
          />
        </Content>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  padding-top: 30px;
`;

const Content = styled.div`
  width: 600px;
`;

export default App;
