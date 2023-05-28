import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/testRouter/Home';
import News from './pages/testRouter/News';
import Contact from './pages/testRouter/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/news">news</Link>
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
