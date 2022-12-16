import styled from 'styled-components';
import PropTypes from 'prop-types';
import CollectionList from './CollectionList';

function Sidebar({ setIsCreateNewCollection }) {
  const openModal = () => {
    setIsCreateNewCollection(true);
  };

  return (
    <Aside>
      <div>
        <div>Collections</div>
        <CollectionList />
      </div>
      <AddButton onClick={openModal}>+</AddButton>
    </Aside>
  );
}

Sidebar.propTypes = {
  setIsCreateNewCollection: PropTypes.func,
};

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  padding: 30px 0;
  background-color: rgb(33, 33, 42);
  color: white;
  grid-area: sidebar;
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
