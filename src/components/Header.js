import { useDispatch, useSelector } from 'react-redux';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import styled from 'styled-components';
import Form from './tasks/Form';
import Customization from './Customization';
import { ReactComponent as Trash } from '../assets/bin.svg';
import { deleteCollection, setCollectionTitle } from '../redux/todoSlice';

function Header() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

  const currentCollectionID = collections.collectionID;
  const currentCollection = collections.collections.filter(
    (collection) => collection.id === currentCollectionID
  );

  const collectionName =
    currentCollectionID !== '' ? currentCollection[0].name : '';
  const collectionEmoji =
    currentCollectionID !== '' ? currentCollection[0].emoji : '';
  const collectionColor =
    currentCollectionID !== '' ? currentCollection[0].color : '';

  const updateCollectionName = (e) => {
    dispatch(setCollectionTitle({ name: e.target.value }));
  };

  const deleteColl = () => {
    dispatch(deleteCollection(currentCollectionID));
  };

  return (
    <HeaderWrapper>
      <Collection>
        <CollectionIdentity>
          <Emoji
            unified={collectionEmoji}
            emojiStyle={EmojiStyle.APPLE}
            size={32}
          />
          <CollectionName
            onInput={updateCollectionName}
            value={collectionName}
          />
        </CollectionIdentity>
        <Bin onClick={deleteColl} />
      </Collection>
      <Customization />
      <Form color={collectionColor} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Collection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 32px;
`;

const CollectionIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
