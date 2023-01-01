import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from 'react-colorful';
import EmojiPicker from 'emoji-picker-react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { ReactComponent as Smile } from '../assets/smile.svg';
import { ReactComponent as Colors } from '../assets/palette.svg';
import { setCollectionColor, setCollectionEmoji } from '../redux/todoSlice';
import '../styles/customizations.css';

function Customization({ color }) {
  const dispatch = useDispatch();
  const emojiPanelRef = useRef();
  const colorPanelRef = useRef();
  const collections = useSelector((state) => state.collections);

  const { isCreateNewCollection } = collections;
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);
  const [isSetColor, setIsSetColor] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isChooseEmoji && !emojiPanelRef.current.contains(e.target)) {
        openAndHideEmojiPanel();
      }

      if (isSetColor && !colorPanelRef.current.contains(e.target)) {
        openAndHideColorPanel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

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

  const variants = {
    hiddenEmoji: { x: -100, y: -250, opacity: 0 },
    visibleEmoji: { x: -100, y: -350, opacity: 1 },
    visibleNewColEmoji: { y: 20, opacity: 1 },

    hiddenNewColElement: { y: 0, opacity: 0 },

    hiddenColor: { x: -70, y: -250, opacity: 0 },
    visibleColor: { x: -70, y: -280, opacity: 1 },
    visibleNewColColor: { y: 10, opacity: 1 },
  };

  return (
    <CustomizationSection>
      <EmojiSection>
        <ChooseEmojiBtn onClick={openAndHideEmojiPanel}>
          <StyledSmile />
          Add icon
        </ChooseEmojiBtn>
        <AnimatePresence>
          {isChooseEmoji && (
            // The EmojiPanelWrapper is added to be able to position EmojiPicker
            // and assign ref to it
            <EmojiPanelWrapper
              isCreateNewCollection={isCreateNewCollection}
              ref={emojiPanelRef}
              // Animations
              initial={
                isCreateNewCollection ? 'hiddenEmoji' : 'hiddenNewColElement'
              }
              animate={
                isCreateNewCollection ? 'visibleEmoji' : 'visibleNewColEmoji'
              }
              transition={{ duration: 0.3 }}
              exit={
                isCreateNewCollection ? 'hiddenEmoji' : 'hiddenNewColElement'
              }
              variants={variants}
            >
              <EmojiPicker height={320} onEmojiClick={chooseEmoji} />
            </EmojiPanelWrapper>
          )}
        </AnimatePresence>
      </EmojiSection>

      <ColorSection>
        <ChooseColorBtn onClick={openAndHideColorPanel}>
          <Palette />
          Add color
        </ChooseColorBtn>

        <AnimatePresence>
          {isSetColor && (
            // The ColorPanelWrapper is added to be able to position ColorPanelWrapper
            // and assign ref to it
            <ColorPanelWrapper
              isCreateNewCollection={isCreateNewCollection}
              ref={colorPanelRef}
              // Animations
              initial={
                isCreateNewCollection ? 'hiddenColor' : 'hiddenNewColElement'
              }
              animate={
                isCreateNewCollection ? 'visibleColor' : 'visibleNewColColor'
              }
              transition={{ duration: 0.3 }}
              exit={
                isCreateNewCollection ? 'hiddenColor' : 'hiddenNewColElement'
              }
              variants={variants}
            >
              {/* The div below is added to be able to style color panel as a class
              name that styled components generate changes from time to time */}
              <div className="color-panel">
                <HexColorPicker color={color} onChange={setColor} />
              </div>
            </ColorPanelWrapper>
          )}
        </AnimatePresence>
      </ColorSection>
    </CustomizationSection>
  );
}

Customization.propTypes = {
  color: PropTypes.string,
};

const CustomizationSection = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: rgb(99, 99, 99);
`;

const EmojiSection = styled.div`
  position: relative;
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

const StyledSmile = styled(Smile)`
  height: 20px;
  width: 20px;
  fill: rgb(99, 99, 99);
`;

const EmojiPanelWrapper = styled(motion.div)`
  position: absolute;
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
