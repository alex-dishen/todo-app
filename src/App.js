import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TasksList from './components/tasks/TasksList';
import CollectionModal from './components/collections/CollectionModal';
import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';
import './styles/normalize.css';

function App() {
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
      <AnimatePresence>
        {isHideSidebar ? (
          <Arrow onClick={showAndHideSidebar} />
        ) : (
          <Sidebar
            key="sidebar"
            windowWidth={windowWidth}
            showAndHideSidebar={showAndHideSidebar}
          />
        )}
      </AnimatePresence>
      <MainWrapper>
        {collectionID === '' ? (
          <Instruction>Select a collection to start planning</Instruction>
        ) : (
          <Content
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header />
            <TasksList />
          </Content>
        )}
      </MainWrapper>
      <AnimatePresence>
        {isCreateNewCollection && <CollectionModal />}
      </AnimatePresence>
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

const Content = styled(motion.div)`
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
