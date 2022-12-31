import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import CollectionList from './collections/CollectionList';
import { setIsCreateNewCollection } from '../redux/todoSlice';
import { ReactComponent as AddSign } from '../assets/plus.svg';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg';

function Sidebar({ windowWidth, showAndHideSidebar }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setIsCreateNewCollection(true));
  };

  return (
    <Aside
      initial={{ x: -230 }}
      animate={{ x: 0 }}
      exit={{ x: -230 }}
      transition={{ duration: 0.5 }}
    >
      <Div>Collections </Div>
      {windowWidth <= 770 && <Arrow onClick={showAndHideSidebar} />}
      <CollectionsListWrapper>
        <CollectionList />
      </CollectionsListWrapper>
      <AddSection onClick={openModal}>
        <Plus /> New Collection
      </AddSection>
    </Aside>
  );
}

Sidebar.propTypes = {
  windowWidth: PropTypes.number,
  showAndHideSidebar: PropTypes.func,
};

const Aside = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  width: 230px;
  padding-top: 20px;
  background-color: rgb(32, 32, 32);
  color: white;
  border-right: 1px solid rgb(43, 43, 43);

  @media (max-width: 770px) {
    position: absolute;
    height: 100vh;
    z-index: 1;
  }
`;

const Div = styled.div`
  padding: 10px 15px;
  font-size: 20px;
`;

const Arrow = styled(ChevronLeft)`
  position: absolute;
  top: 50%;
  left: 230px;
  height: 30px;
  width: 30px;
  fill: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const CollectionsListWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  border-top: 1px solid rgb(43, 43, 43);
  border-bottom: 1px solid rgb(43, 43, 43);
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
