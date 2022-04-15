import { useDispatch } from 'react-redux';
import { isError, isLoading, isFetch } from '../actions';
import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Set global loading state
    dispatch(isLoading());

    fetch(`https://hn.algolia.com/api/v1/search?query=${search}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      //On response return json to global state
      .then((json) => dispatch(isFetch(json.hits)))
      .catch((err) => {
        //On error, return error to global state
        dispatch(isError(err.message));
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
