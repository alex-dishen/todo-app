import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Collection({ id, color, emoji, name }) {
  const dispatch = useDispatch();

  return (
    <CollectionWrapper>
      <ImgHolder /> {name}
    </CollectionWrapper>
  );
}

Collection.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  emoji: PropTypes.string,
  name: PropTypes.string,
};

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

export default Collection;
