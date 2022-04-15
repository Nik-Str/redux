import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Cart = () => {
  const selector = useSelector((state) => state.addToCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selector.data));
  }, [selector]);

  return (
    <>
      {selector.data.length > 0 && (
        <ul>
          {selector.data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
