import { useDispatch } from 'react-redux';
import { add, remove } from '../features/cart';
import Right from '../components/Right';
import Left from '../components/Left';
import { useState } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          let inc = value;
          inc++;
          setValue(inc);
          dispatch(add(value));
        }}
      >
        Add
      </button>
      <button type="button" onClick={() => dispatch(remove())}>
        Remove
      </button>
      <div className="cartList">
        <Left />
        <Right />
      </div>
    </>
  );
};

export default Cart;
