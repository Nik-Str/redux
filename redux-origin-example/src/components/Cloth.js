import { useDispatch } from 'react-redux';
import { add, clear } from '../actions';

const Cloth = () => {
  const dispatch = useDispatch();

  const handleClear = async () => {
    await localStorage.removeItem('cart');
    dispatch(clear());
  };

  return (
    <>
      <button onClick={() => dispatch(add(1))}>Add</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default Cloth;
