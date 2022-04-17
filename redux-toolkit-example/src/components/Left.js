import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Left = () => {
  const cart = useSelector((state) => state.cart.value);

  const [even, setEven] = useState([]);

  useEffect(() => {
    const even = cart.cart.filter((number) => {
      return number % 2 === 0;
    });

    setEven(even);
  }, [cart]);

  return (
    <>
      {even && (
        <ul>
          {even.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Left;
