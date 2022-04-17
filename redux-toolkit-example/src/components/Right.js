import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Right = () => {
  const cart = useSelector((state) => state.cart.value);

  const [odd, setOdd] = useState([]);

  useEffect(() => {
    const odd = cart.cart.filter((number) => {
      return number % 2 !== 0;
    });
    setOdd(odd);
  }, [cart]);

  return (
    <>
      {odd && (
        <ul>
          {odd.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Right;
