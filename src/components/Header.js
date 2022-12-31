import { useDispatch, useSelector } from 'react-redux';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import styled from 'styled-components';
import Form from './tasks/Form';
import Textarea from './Textarea';
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

  const deleteColl = () => {
    dispatch(deleteCollection(currentCollectionID));
  };

  const updateCollectionName = (e) => {
    dispatch(setCollectionTitle({ name: e.target.value }));
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
          <Textarea title={collectionName} update={updateCollectionName} />
        </CollectionIdentity>
        <BinHolder>
          <Bin onClick={deleteColl} />
        </BinHolder>
      </Collection>
      <Customization color={collectionColor} />
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
  gap: 5px;
`;

const BinHolder = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.07);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Bin = styled(Trash)`
  height: 30px;
  width: 30px;
  fill: white;
`;

export default Header;
