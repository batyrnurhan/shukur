import "./home.scss"
import "../styles/bootstrap-grid.scss"
import home_img from "./home_one.png"
import Header from "../header/header";
import React, {useEffect, useState} from "react";


import '../styles/HomePage.css';
import logo from '../HomePageStyle/logo.png'; // Make sure this is the correct path to your logo image
import logoText from '../HomePageStyle/ShukurText.png';
import heroImage from '../HomePageStyle/homepage1back.png'; // Path to the hero image used in the screenshot
import axios from 'axios'; // make sure to install axios with `npm install axios`
import {Link} from "react-router-dom";
import arrowBack from '../HomePageStyle/arrowback.png'; // Adjust the path as necessary
import arrowNext from '../HomePageStyle/arrownext.png'; // Adjust the path as necessary
import Picture from "../HomePageStyle/pic1.png";

function Home(){
    const [blogs, setBlogs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // To keep track of the current active card

    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs/blogposts/') // Make sure this matches your Django URL
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the blog posts!', error);
            });
    }, []);

    const moveCard = (direction) => {
        setActiveIndex((current) => {
            // Calculate the new index based on direction and wrap around if needed
            if (direction === 'next') {
                return (current + 1) % blogs.length;
            } else {
                return (current - 1 + blogs.length) % blogs.length;
            }
        });
    };


    const renderDots = () => {
        const totalDots = Math.ceil(blogs.length / 4);
        return [...Array(totalDots)].map((_, idx) => (
            <span key={idx} className={`dot ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}></span>
        ));
    };

    return(
        <div>
        <Header />
        <div className={"base"}>
            <div className={"row"}>
                <div className={"col-lg-5 home_one_text"}>
                    <h2>О нас</h2>
                    <p>Shukur - мобильное приложение, которое сканирует электронные коды продуктов и легко распознает,
                        является ли еда халяльной, содержит ли она запрещенные ингредиенты или какие-либо химические добавки.
                        Он служит удобным инструментом для людей, которые придерживаются исламских законов о питании (Халяль),
                        гарантируя, что потребляемая ими пища соответствует их религиозным требованиям. Идея – создать мобильное приложение «Shukur»,
                        которое обеспечит простой и удобный доступ к информации о соответствии продукции стандартам Халяль.
                        Мы стремимся упростить повседневную жизнь людей,
                        следующих халяльным требованиям, и помочь им принять решение о выборе продуктов и мест для посещения.</p>
                    <p id={"home_text"}>Миссия нашего проекта — обеспечить доступность информации о халяльной продукции и услугах всем пользователям,
                        независимо от их религиозных убеждений.
                        Мы стремимся сделать процесс выбора халяльной продукции более удобным и найти все ваши потребности в одном приложении.</p>
                </div>
                <div className={"col-lg-7 home_two"}>
                        <img src={home_img}/>
                </div>
            </div>
            <section className="blog-section">
                <h2>Новости и статьи</h2>
                <div className="carousel-container">
                    <button onClick={() => moveCard('prev')} className="arrow-prev">
                        <img src={arrowBack} alt="Previous"/>
                    </button>
                    <div className="card-container">
                        {blogs.slice(activeIndex, activeIndex + 4)
                            .concat(blogs.slice(0, Math.max(0, activeIndex + 4 - blogs.length)))
                            .map((blog, index) => (
                                <div className="blog-card" key={index}>
                                    <img src={blog.image1} alt={blog.title}/>
                                    <div className="card-content">
                                        <h3>{blog.title}</h3>
                                        <p>{new Date(blog.created_at).toLocaleDateString('ru-RU')}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button onClick={() => moveCard('next')} className="arrow-next">
                        <img src={arrowNext} alt="Next"/>
                    </button>
                </div>
                <div className="dots-container">
                    {renderDots()}
                </div>
            </section>
        </div>
        </div>
    )
}
export default Home