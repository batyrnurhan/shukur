import "../base.scss"
import "./menu.scss"
import logo from "./Logo.svg"
import user from "./user 1.svg"
import feater from "./Feather Icon.svg"
import search from "./search (1) 1.png"
import {Link} from "react-router-dom";
import React from "react";
function Menu() {
    return (
        <div>
        <div className={"nav_back"}>
            <div className={"base"}>
                <nav className={"header_nav"}>
                    <div className={"slogan"}>Теперь поиск продуктов стал еще легче</div>
                    <div>
                        <ul>
                            <Link to="/" ><li id={"unique_link"}>Главная</li></Link>
                            <Link to="/prayer-times" ><li>Время намаза</li></Link>
                            <Link to="/product-search" ><li>Поиск продуктов</li></Link>
                            <Link to="/reviews" ><li>Отзывы</li></Link>
                            <Link to="/blog" ><li>Блог</li></Link>
                            <Link to="/map" ><li>Карта</li></Link>
                        </ul>
                    </div>
                </nav>


            </div>
        </div>
        <div className={"menu_back"}>
            <div className={"custom_base"}>
                <span><Link to={"/"}><img src={logo} className={"logo"}/><span className={"logo_text"}>Shukur</span></Link></span>
                <span className={"menu_bt_div"}>
                    <span className={"app_button"}><a href={"/"}>Cкачать приложение</a></span>

                    <div className={"menu_button"}>
                        <Link to="/profile">
                        <img src={user} className={"menu_bt_img"}/>
                        <div>Личный кабинет</div>
                        </Link>
                    </div>
                    <div className={"menu_button"}>
                        <Link to="/ratings" >
                        <img src={feater} className={"menu_bt_img"}/>
                        <div>Рейтинги</div>
                        </Link>
                    </div>
                    <div className={"menu_button"} id={'menu_bt_last'}>
                        <Link to="/search" >
                        <img src={search} className={"menu_bt_img"}/>
                        <div>Поиск</div>
                        </Link>
                    </div>
                </span>
            </div>
        </div>
        </div>
    )
}
export default Menu