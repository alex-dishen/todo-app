import { useDispatch } from 'react-redux';
import { Emoji, EmojiStyle } from 'emoji-picker-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Collection({ color, emoji, name }) {
  const dispatch = useDispatch();

  return (
    <Preview>
      <EmojiHolder color={color}>
        <Emoji unified={emoji} emojiStyle={EmojiStyle.APPLE} size={22} />
      </EmojiHolder>
      <CollectionName>{name}</CollectionName>
    </Preview>
  );
}

Collection.propTypes = {
  color: PropTypes.string,
  emoji: PropTypes.string,
  name: PropTypes.string,
};

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

export default Collection;
