import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import LogoutButton from './components/Logout';
import PrayerTimesPage from "./components/PrayerTimesPage";
import Home from "./components/home/home";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/footer";
import User_Profile from "./components/User_profile/User_Profile";
import Products from "./components/products/products";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import HigherFooter from "./components/higher_footer/HigherFooter";
import Reg from "./components/reg/Reg";
import SearchResults from "./components/SearchResults";
import ProductDetail from "./components/products/ProductDetail";

const App = () => {
    return (
        <Router>
            <div className="app">
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Reg />} />
                    <Route path="/profile" element={<User_Profile />} />
                    <Route path="/prayer-times" element={<PrayerTimesPage />} />
                    <Route path="/product-search" element={<Products />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/search-results" element={<SearchResults />} />
                    <Route path="/products/:productId" element={<ProductDetail />} />

                </Routes>
            </div>
            <Footer />
            <HigherFooter/>
        </Router>
    );
};

export default App;
