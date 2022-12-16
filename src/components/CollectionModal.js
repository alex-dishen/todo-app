import EmojiPicker, { Emoji, EmojiStyle } from 'emoji-picker-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import emojiBackground from '../assets/emojiBackground.png';
import { addCollection } from '../redux/todoSlice';
import '../styles/emojiPicker.css';

function CollectionModal({ setIsCreateNewCollection }) {
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [collectionTitle, setCollectionTitle] = useState('Collection name');
  const [color, setColor] = useState('#099d32');
  const dispatch = useDispatch();

  const openAndHideEmojiPanel = () => {
    setIsChooseEmoji(!isChooseEmoji);
  };

  const chooseEmoji = (EmojiClickData) => {
    setEmoji(EmojiClickData.unified);
    setIsChooseEmoji(false);
  };

  const changeCollectionTitle = (e) => {
    setCollectionTitle(e.target.value);
  };

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  const onAddClick = () => {
    dispatch(
      addCollection({
        color,
        emoji,
        name: collectionTitle,
      })
    );
    setIsCreateNewCollection(false);
  };

  return (
    <>
      <CollectionCreator>
        <h1>New Collection</h1>
        <Input onInput={changeCollectionTitle} />
        <BeautySection>
          <EmojiBtn onClick={openAndHideEmojiPanel} />
          <ColorPanel onChange={changeColor} value={color} />
        </BeautySection>

        {isChooseEmoji && (
          <EmojiPicker
            height={320}
            onEmojiClick={chooseEmoji}
            style={{ position: 'absolute' }}
          />
        )}

        <Preview>
          <EmojiHolder color={color}>
            <Emoji unified={emoji} emojiStyle={EmojiStyle.APPLE} size={22} />
          </EmojiHolder>
          <CollectionName>{collectionTitle}</CollectionName>
        </Preview>
        <AddBtn onClick={onAddClick}>Add</AddBtn>
      </CollectionCreator>
      <Overlay />
    </>
  );
}

CollectionModal.propTypes = {
  setIsCreateNewCollection: PropTypes.func,
};

const CollectionCreator = styled.div`
  position: absolute;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 360px;
  padding: 10px 30px 30px 30px;
  background-color: rgb(33, 33, 41);
  border-radius: 20px;
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Collection name',
})`
  width: 100%;
  padding: 6px;
  background-color: transparent;
  text-align: center;
  color: white;
  outline: none;
  border: hidden;
  border-bottom: groove;
  border-radius: 11px;
`;

const BeautySection = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  gap: 15px;
`;

const EmojiBtn = styled.button.attrs({
  type: 'button',
})`
  height: 50px;
  width: 50px;
  background-image: url(${emojiBackground});
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ColorPanel = styled.input.attrs({
  type: 'color',
})`
  height: 60px;
  width: 60px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 50%;
    border: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Preview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const AddBtn = styled.button`
  width: 60px;
  height: 30px;
  margin-top: 20px;
  background-color: transparent;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
`;

export default CollectionModal;
