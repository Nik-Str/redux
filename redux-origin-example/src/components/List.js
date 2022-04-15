import { useSelector } from 'react-redux';

const List = () => {
  const selector = useSelector((state) => state.getData);

  return (
    <>
      {selector.data && (
        <ul>
          {selector.data.map((item) => (
            <li key={item.objectID}>{item.title}</li>
          ))}
        </ul>
      )}
      {selector.isLoading && <p>Loading...</p>}
      {selector.isError && <p>{selector.isError}</p>}
    </>
  );
};

export default List;
