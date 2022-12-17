import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker, { Emoji, EmojiStyle } from 'emoji-picker-react';
import { useState } from 'react';
import Form from './tasks/Form';
import { ReactComponent as Trash } from '../assets/bin.svg';
import {
  deleteCollection,
  changeCollectionTitle,
  changeEmoji,
} from '../redux/todoSlice';
import '../styles/emojiPicker.css';

function Header() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);

  const currentCollectionID = collections.collectionID;
  const currentCollection = collections.collections.filter(
    (collection) => collection.id === currentCollectionID
  );
  const collectionName = currentCollection[0].name;
  const collectionEmoji = currentCollection[0].emoji;

  const updateCollectionName = (e) => {
    dispatch(changeCollectionTitle(e.target.value));
  };
  const deleteColl = () => {
    dispatch(deleteCollection(currentCollectionID));
  };
  const chooseEmoji = (EmojiClickData) => {
    dispatch(changeEmoji(EmojiClickData.unified));
    setIsChooseEmoji(false);
  };

  const openEmojiPanel = () => {
    setIsChooseEmoji(true);
  };

  return (
    <HeaderWrapper>
      <Collection>
        <CollectionIdentity>
          <EmojiHolder onClick={openEmojiPanel}>
            <Emoji
              unified={collectionEmoji}
              emojiStyle={EmojiStyle.APPLE}
              size={32}
            />
          </EmojiHolder>
          <CollectionName
            onInput={updateCollectionName}
            defaultValue={collectionName}
          />
          {isChooseEmoji && (
            <EmojiPicker height={320} onEmojiClick={chooseEmoji} />
          )}
        </CollectionIdentity>
        <Bin onClick={deleteColl} />
      </Collection>
      <Form />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
`;

const Collection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 32px;
`;

const CollectionIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const EmojiHolder = styled.div`
  height: 32px;
  cursor: pointer;
`;

const CollectionName = styled.input`
  width: 300px;
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
`;

const Bin = styled(Trash)`
  height: 40px;
  width: 40px;
  padding: 5px;
  fill: white;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Header;
