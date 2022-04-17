import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { result, clear, loading, error } from '../features/search';

const Search = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loading());

    const data = await fetch(`https://hn.algolia.com/api/v1/search?query=${term}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .catch((err) => dispatch(error(err.message)));

    dispatch(result(data.hits));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Serch</button>
      </form>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </>
  );
};

export default Search;
