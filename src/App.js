import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/tasks/TasksList';
import CollectionModal from './components/collections/CollectionModal';
import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';
import './styles/normalize.css';

function App() {
  // localStorage.clear();
  const collections = useSelector((state) => state.collections);
  const { isCreateNewCollection, collectionID } = collections;
  const [windowWidth, setWindowWidth] = useState();
  const [isHideSidebar, setIsHideSidebar] = useState();

  const showAndHideSidebar = () => {
    setIsHideSidebar(!isHideSidebar);
  };

  const getWindowWidth = () => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);

    if (innerWidth > 770) {
      setIsHideSidebar(false);
    } else {
      setIsHideSidebar(true);
    }
  };

  useEffect(() => {
    getWindowWidth();

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  return (
    <>
      {isHideSidebar ? (
        <Arrow onClick={showAndHideSidebar} />
      ) : (
        <Sidebar
          windowWidth={windowWidth}
          showAndHideSidebar={showAndHideSidebar}
        />
      )}
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
  width: min(590px, 66vw);

  @media (max-width: 770px) {
    width: 80vw;
  }
`;

const Arrow = styled(ChevronRight)`
  position: absolute;
  top: 50%;
  height: 30px;
  width: 30px;
  fill: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Instruction = styled.div`
  padding: 5px 15px;
  background-color: rgb(45, 45, 45);
  color: rgb(130, 130, 130);
  border-radius: 15px;
`;

export default App;
