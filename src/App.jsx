import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Genre from './components/Genre';
import Explore from './components/Explore';
import News from './components/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Genre" element={<Genre />} />
          <Route path="/News" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
