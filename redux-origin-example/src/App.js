import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Cart from './routes/Cart';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/about" className="links">
            About
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Cart />} />
        </Routes>
      </main>
      <footer>Cool Footer</footer>
    </>
  );
}

export default App;
