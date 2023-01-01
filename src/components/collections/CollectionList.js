import { useSelector } from 'react-redux';
import Collection from './Collection';

function CollectionList() {
  const collections = useSelector((state) => state.collections.collections);

  return (
    <>
      {collections.map((coll) => (
        <Collection
          key={coll.id}
          id={coll.id}
          color={coll.color}
          emoji={coll.emoji}
          name={coll.name}
        />
      ))}
    </>
  );
}

export default CollectionList;
