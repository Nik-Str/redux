import { useDispatch } from 'react-redux';
import { init } from '../actions';
//Components
import Cart from '../components/Cart';
import Cloth from '../components/Cloth';

const About = () => {
  //Global persistent state
  const dispatch = useDispatch();

  const ls = JSON.parse(localStorage.getItem('cart'));
  if (ls) dispatch(init(ls));

  return (
    <>
      <Cloth />
      <Cart />
    </>
  );
};

export default About;
