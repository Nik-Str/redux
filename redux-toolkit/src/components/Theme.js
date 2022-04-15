import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

const Theme = () => {
  const [color, setColor] = useState('');

  const dispatch = useDispatch();

  const handleChangeColor = () => {
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default Theme;
