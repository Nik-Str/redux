import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: 'Niklas', age: 30, email: 'niklas@live.se' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Login;
