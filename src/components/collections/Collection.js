import { Emoji, EmojiStyle } from 'emoji-picker-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setCollectionID } from '../../redux/todoSlice';

function Collection({ id, color, emoji, name, isCreateNewCollection }) {
  const dispatch = useDispatch();

  const getCollectionId = () => {
    dispatch(setCollectionID(id));
  };

  return (
    <CollectionWrapper
      isCreateNewCollection={isCreateNewCollection}
      onClick={getCollectionId}
    >
      <EmojiHolder color={color}>
        <Emoji unified={emoji} emojiStyle={EmojiStyle.APPLE} size={22} />
      </EmojiHolder>
      <CollectionName>{name}</CollectionName>
    </CollectionWrapper>
  );
}

Collection.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  emoji: PropTypes.string,
  name: PropTypes.string,
  isCreateNewCollection: PropTypes.bool,
};

const CollectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  cursor: ${(props) => (props.isCreateNewCollection ? 'auto' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.isCreateNewCollection ? 'transparent' : 'white'};
  }
`;

const EmojiHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.color};
  border-radius: 6px;
`;

const CollectionName = styled.div``;

export default Collection;
