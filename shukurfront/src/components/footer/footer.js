import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../menu/Logo.svg";
import "./footer.scss";

function Footer() {
    const [searchResults, setSearchResults] = useState({ products: [], blog_posts: [] });
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery.length > 0) {
            fetchSearchResults();
        } else {
            setSearchResults({ products: [], blog_posts: [] });
        }
    }, [searchQuery]);

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/search/?query=${encodeURIComponent(searchQuery)}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    const handleProductClick = (productId) => {
    window.scrollTo(0, 0); // Add this line to scroll to the top
    navigate(`/products/${productId}`);
};


    return (
        <div className={"footer_back"}>
            <div className={"base"}>
                <div className={"row footer"}>
                    <div className={"col-lg-4"}>
                        <div className={"footer_logo"}><img src={logo} alt="Shukur Logo"/>Shukur</div>
                        <div className={"footer_one"}>Теперь поиск продуктов стал еще легче</div>
                        <div className={"footer_number"}>+ 7(705) 530 65 19</div>
                        <div className={"footer_email"}>shukurInfo.@gmail.com</div>
                        <div className={"footer_two"}>050040 Казахстан, Алматы. Манаса 30/31</div>
                    </div>
                    <div className={"col-lg-4"}>
                        <div className={"footer_nav"}>Навигация</div>
                        <div className={"footer_nav_col"}>
                            <div>
                                <ul className={"footer_nav_ul"}>
                                    <li><a href="/">Главная</a></li>
                                    <li><a href="/contacts">Контакты</a></li>
                                    <li><a href="/prayer-times">Время намаза</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className={"footer_nav_ul"}>
                                    <li><a href="/">Заведение</a></li>
                                    <li><a href="/add-product">Добавить продукт</a></li>
                                    <li><a href="/account">Личный кабинет</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul className={"footer_nav_ul"}>
                                    <li><a href="/products">продукты</a></li>
                                    <li><a href="/blog">блог</a></li>
                                    <li><a href="/view-products">Просмотр продуктов</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"col-lg-4"}>
                        <form>
                            <input
                                placeholder={"Поиск"}
                                className={"footer_input"}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                        <div className="search-results-dropdown">
                            {searchResults.products && searchResults.products.map(product => (
                                <div key={product.id} onClick={() => handleProductClick(product.id)}>
                                    {product.name}
                                </div>
                            ))}
                            {searchResults.blog_posts && searchResults.blog_posts.map(post => (
                                <div key={post.id}>
                                    {post.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
