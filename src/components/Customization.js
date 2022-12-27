import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from 'react-colorful';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import { ReactComponent as Smile } from '../assets/smile.svg';
import { ReactComponent as Colors } from '../assets/palette.svg';
import { setCollectionColor, setCollectionEmoji } from '../redux/todoSlice';
import '../styles/customizations.css';

function Customization() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

  const { isCreateNewCollection } = collections;
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);
  const [isSetColor, setIsSetColor] = useState(false);

  const setColor = (e) => {
    dispatch(setCollectionColor(e));
  };

  const openAndHideEmojiPanel = () => {
    setIsChooseEmoji(!isChooseEmoji);
  };

  const openAndHideColorPanel = () => {
    setIsSetColor(!isSetColor);
  };

  const chooseEmoji = (EmojiClickData) => {
    dispatch(setCollectionEmoji(EmojiClickData.unified));
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
          // The EmojiPanelWrapper is added to be able to position EmojiPicker
          <EmojiPanelWrapper isCreateNewCollection={isCreateNewCollection}>
            <EmojiPicker height={320} onEmojiClick={chooseEmoji} />
          </EmojiPanelWrapper>
        )}
      </EmojiSection>

      <ColorSection>
        <ChooseColorBtn onClick={openAndHideColorPanel}>
          <Palette />
          Add color
        </ChooseColorBtn>

        {isSetColor && (
          <ColorPanelWrapper isCreateNewCollection={isCreateNewCollection}>
            {/* The div below is added to be able to style color panel as a class
            name that styled components generate changes from time to time */}
            <div className="color-panel">
              <HexColorPicker onChange={setColor} />
            </div>
          </ColorPanelWrapper>
        )}
      </ColorSection>
    </CustomizationSection>
  );
}

const CustomizationSection = styled.div`
  display: flex;
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

const EmojiPanelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.isCreateNewCollection
      ? 'translate(-50%, -110%)'
      : 'translate(-50%, 10%)'};
`;

const ColorSection = styled.div`
  position: relative;
`;

const Palette = styled(Colors)`
  height: 20px;
  width: 20px;
  fill: rgb(99, 99, 99);
`;

const ChooseColorBtn = styled(ChooseEmojiBtn)``;

const ColorPanelWrapper = styled(EmojiPanelWrapper)`
  padding: 20px;
  background-color: rgb(40, 40, 40);
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgb(15, 15, 15), -0px -5px 10px rgb(15, 15, 15);
`;

export default Customization;
