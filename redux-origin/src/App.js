import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  //useSelector for getting state values
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  //useDispatch to use functions
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{isLogged ? 'User is logged in' : 'User is logged out'}</p>
    </div>
  );
}

export default App;
