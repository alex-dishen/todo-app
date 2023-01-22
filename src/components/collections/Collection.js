import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { setCollectionID } from '../../redux/todoSlice';

function Collection({ id, color, emoji, name, isCreateNewCollection }) {
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
      iscreatenewcollection={isCreateNewCollection}
      currentcollectionid={currentCollectionID}
      id={id}
      onClick={getCollectionId}
      initial={!isCreateNewCollection && { y: 7, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
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

const CollectionWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  background-color: ${(props) =>
    props.currentcollectionid === props.id ? 'rgb(45, 45, 45)' : 'transparent'};
  cursor: ${(props) => (props.iscreatenewcollection ? 'auto' : 'pointer')};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.iscreatenewcollection ? 'transparent' : 'rgb(45, 45, 45)'};
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

const CollectionName = styled.div`
  overflow-wrap: anywhere;
`;

export default Collection;
