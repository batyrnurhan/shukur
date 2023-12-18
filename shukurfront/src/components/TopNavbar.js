import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
                <p className="announcement-text">Теперь поиск продуктов стал еще легче</p>
                <ul className="top-nav-menu">
                    <li><Link to="/" className="top-nav-item active">Главная</Link></li>
                    <li><Link to="/prayer-times" className="top-nav-item">Время намаза</Link></li>
                    <li><Link to="/product-search" className="top-nav-item">Поиск продуктов</Link></li>
                    <li><Link to="/reviews" className="top-nav-item">Отзывы</Link></li>
                    <li><Link to="/blog" className="top-nav-item">Блог</Link></li>
                    <li><Link to="/map" className="top-nav-item">Карта</Link></li>
                </ul>
            </nav>
  );
};

export default TopNavbar;
