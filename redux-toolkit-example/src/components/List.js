import { useSelector } from 'react-redux';

const List = () => {
  const search = useSelector((state) => state.search.value);

  return (
    <>
      {search.search.length > 0 && (
        <ul>
          {search.search.map((item) => (
            <li key={item.objectID}>{item.title}</li>
          ))}
        </ul>
      )}
      {search.loading && <p>Loading...</p>}
    </>
  );
};

export default List;
