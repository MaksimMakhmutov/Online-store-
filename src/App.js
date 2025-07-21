import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AdminPage, ProductPage, HomePage, DetailPage } from './pages';
import './App.css'; // Импортируем стили

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/products">Товары</Link>
            </li>
            <li>
              <Link to="/admin">Админ-панель</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
