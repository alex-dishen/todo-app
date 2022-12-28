import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import styled from 'styled-components';
import { setCollectionID } from '../../redux/todoSlice';

function Collection({ id, color, emoji, name, isCreateNewCollection }) {
  // Opens the collection that is just created
  useEffect(() => {
    if (!isCreateNewCollection) dispatch(setCollectionID(id));
  }, []);

  const dispatch = useDispatch();
  const currentCollectionID = useSelector(
    (state) => state.collections.collectionID
  );

  const getCollectionId = () => {
    // The conditional is used here to prevent the app from crushing if user
    // clicks on collection in collectionModal
    if (!isCreateNewCollection) dispatch(setCollectionID(id));
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
    props.currentCollectionID === props.id ? 'rgb(45, 45, 45)' : 'transparent'};
  cursor: ${(props) => (props.isCreateNewCollection ? 'auto' : 'pointer')};

  &:hover {
    background-color: ${(props) =>
      props.isCreateNewCollection ? 'transparent' : 'rgb(45, 45, 45)'};
  }
`;

const EmojiHolder = styled.div.attrs((props) => ({
  style: { background: props.color },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  border-radius: 6px;
`;

const CollectionName = styled.div``;

export default Collection;
