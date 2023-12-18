import React from 'react';
import { Link } from 'react-router-dom';
import logo from './HomePageStyle/logo.png'; // Update the path accordingly
import logoText from './HomePageStyle/ShukurText.png'; // Update the path accordingly

const MainNavbar = () => {
  return (
    <nav className="main-navbar">
                <div className="main-margin">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Shukur Logo" className="logo" />
                    <img src={logoText} alt="Shukur Text" className="logoText" />
                </Link>
                    </div>
                <button className="app-download-button">Скачать приложение</button>
                <div className="main-nav-actions">
                    <Link to="/profile" className="main-nav-item-profile">Личный кабинет</Link>
                    <Link to="/ratings" className="main-nav-item-raiting">Рейтинги</Link>
                    <Link to="/search" className="main-nav-item-loop">Поиск</Link>
                    {/* Icons and additional links can be added here */}
                </div>
            </nav>
  );
};

export default MainNavbar;
