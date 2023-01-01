import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
import Collection from './Collection';
import Customization from '../Customization';
import {
  addCollection,
  setIsCreateNewCollection,
  setCollectionColor,
} from '../../redux/todoSlice';

function CollectionModal() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);
  const { currentColor, currentEmoji, isCreateNewCollection } = collections;
  const [collectionTitle, setCollectionTitle] = useState('Collection name');

  const changeCollectionTitle = (e) => {
    setCollectionTitle(e.target.value);
  };

  const hideModal = () => {
    dispatch(setIsCreateNewCollection(false));
  };

  const onAddClick = () => {
    dispatch(
      addCollection({
        id: uniqid(),
        color: currentColor,
        emoji: currentEmoji,
        name: collectionTitle,
      })
    );
    hideModal();
  };

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    const rgbToHex = () =>
      `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

    dispatch(setCollectionColor(rgbToHex()));
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  return (
    <>
      <CollectionCreator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <h1>New Collection</h1>
        <Input onInput={changeCollectionTitle} />
        <Customization color={currentColor} />
        <Collection
          color={currentColor}
          emoji={currentEmoji}
          name={collectionTitle}
          isCreateNewCollection={isCreateNewCollection}
        />
        <ButtonSection>
          <CancelBtn onClick={hideModal}>Cancel</CancelBtn>
          <AddBtn onClick={onAddClick}>Add</AddBtn>
        </ButtonSection>
      </CollectionCreator>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      />
    </>
  );
}

const CollectionCreator = styled(motion.div)`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 360px;
  padding: 10px 30px 30px 30px;
  gap: 10px;
  background-color: rgb(32, 32, 32);
  border-radius: 20px;
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Collection name',
})`
  width: 100%;
  padding: 6px;
  margin-bottom: 20px;
  background-color: transparent;
  text-align: center;
  color: white;
  outline: none;
  border: hidden;
  border-bottom: groove;
  border-radius: 11px;
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 15px;
`;

const CancelBtn = styled.button`
  padding: 6px 12px;
  margin-top: 20px;
  background-color: transparent;
  color: white;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
`;

const AddBtn = styled(CancelBtn)``;

const Overlay = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 2;
`;

export default CollectionModal;
