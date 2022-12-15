import styled from 'styled-components';
import PropTypes from 'prop-types';

function Sidebar({ setIsCreateNewCollection }) {
  const openModal = () => {
    setIsCreateNewCollection(true);
  };

  return (
    <Aside>
      <div>
        <div>Collections</div>
        <CollectionWrapper>
          <ImgHolder /> School
        </CollectionWrapper>
      </div>
      <AddButton onClick={openModal}>+</AddButton>
    </Aside>
  );
}

Sidebar.propTypes = {
  setIsCreateNewCollection: PropTypes.bool,
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

const CollectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0 15px 25px;
  gap: 15px;

  &:hover {
    background-color: rgb(39, 39, 49);
    cursor: pointer;
  }
`;

const ImgHolder = styled.div`
  height: 30px;
  width: 30px;
  background-color: #099d32;
  border-radius: 6px;
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
