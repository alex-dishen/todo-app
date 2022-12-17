import { Emoji, EmojiStyle } from 'emoji-picker-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCollectionID } from '../../redux/todoSlice';

function Collection({ id, color, emoji, name, isCreateNewCollection }) {
  const dispatch = useDispatch();

  const currentCollectionID = useSelector(
    (state) => state.collections.collectionID
  );

  const getCollectionId = () => {
    dispatch(setCollectionID(id));
  };

  return (
    <CollectionWrapper
      isCreateNewCollection={isCreateNewCollection}
      currentCollectionID={currentCollectionID}
      id={id}
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
  background-color: ${(props) =>
    props.currentCollectionID === props.id ? 'rgb(56, 56, 56)' : 'transparent'};
  cursor: ${(props) => (props.isCreateNewCollection ? 'auto' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.isCreateNewCollection ? 'transparent' : 'rgb(56, 56, 56)'};
  }
`;

const EmojiHolder = styled.div.attrs((props) => ({
  style: { background: props.color },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 6px;
`;

const CollectionName = styled.div``;

export default Collection;
