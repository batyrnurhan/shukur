import logo from "../menu/Logo.svg"
import "./footer.scss"
import axios from "axios";
import React, { useState } from 'react';


function Footer() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        window.location.href = `/search-results?query=${encodeURIComponent(searchQuery)}`;
        try {
            const response = await axios.get(`http://localhost:8080/search/?query=${searchQuery}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    return (
        <div className={"footer_back"}>
            <div className={"base"}>
                <div className={"row footer"}>
                    <div className={"col-lg-4"}>
                        <div className={"footer_logo"}><img src={logo}/>Shukur</div>
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
                        <form onSubmit={handleSearch}>
                            <input
                                placeholder={"Поиск"}
                                className={"footer_input"}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                        {searchResults.length > 0 && (
                            <div className="search-results-dropdown">
                                {searchResults.users && searchResults.users.map(user => (
                                    <div key={user.id} onClick={() => window.location.href = `/user/${user.id}`}>
                                        {user.username}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
