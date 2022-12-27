import { useState } from 'react';
import styled from 'styled-components';
import { RgbaColorPicker } from 'react-colorful';
import EmojiPicker from 'emoji-picker-react';
import { ReactComponent as Smile } from '../assets/smile.svg';
import { ReactComponent as Colors } from '../assets/palette.svg';
import '../styles/customizations.css';

function Customization() {
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);
  const [isSetColor, setIsSetColor] = useState(false);
  const [emoji, setEmoji] = useState('');

  const openAndHideEmojiPanel = () => {
    setIsChooseEmoji(!isChooseEmoji);
  };

  const openAndHideColorPanel = () => {
    setIsSetColor(!isSetColor);
  };

  const chooseEmoji = (EmojiClickData) => {
    setEmoji(EmojiClickData.unified);
    setIsChooseEmoji(false);
  };

  return (
    <CustomizationSection>
      <EmojiSection>
        <ChooseEmojiBtn onClick={openAndHideEmojiPanel}>
          <StyledSmile />
          Add icon
        </ChooseEmojiBtn>
        {isChooseEmoji && (
          <EmojiPicker height={320} onEmojiClick={chooseEmoji} />
        )}
      </EmojiSection>
      <ColorSection>
        <ChooseColorBtn onClick={openAndHideColorPanel}>
          <Palette />
          Add color
        </ChooseColorBtn>
        {isSetColor && (
          <div className="custom-layout">
            <RgbaColorPicker />
          </div>
        )}
      </ColorSection>
    </CustomizationSection>
  );
}

const CustomizationSection = styled.div`
  display: flex;
  margin: 8px 0 20px 0;
  gap: 10px;
  font-size: 14px;
  color: rgb(99, 99, 99);
`;

const EmojiSection = styled.div`
  position: relative;
`;

const StyledSmile = styled(Smile)`
  height: 20px;
  width: 20px;
  fill: rgb(99, 99, 99);
`;

const ChooseEmojiBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 6px;
  gap: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 38, 38);
  }
  &:active {
    background-color: rgb(32, 32, 32);
  }
`;

const ColorSection = styled.div`
  position: relative;
`;

const Palette = styled(Colors)`
  height: 20px;
  width: 20px;
  fill: rgb(99, 99, 99);
`;

const ChooseColorBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 6px;
  gap: 5px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 38, 38);
  }
  &:active {
    background-color: rgb(32, 32, 32);
  }
`;

export default Customization;
