import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./higher_footer.css";
//import photo from "./Ellipse 8.png";
import leftArrow from "./left.svg";
import rightArrow from "./right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./higher_footer.css";
import defaultProfilePic from "./default-profile.png"; // Replace with path to your default image

function HigherFooter() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/accounts/reviews/')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                setError('Error fetching reviews');
                console.error('Error fetching reviews:', error);
            });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <img src={rightArrow} className="hf_right" alt="Next" />,
        prevArrow: <img src={leftArrow} className="hf_left" alt="Previous" />,
    };


    return (
        <div className="higher_footer">
            <div className="higher_footer_b">
                <div className="hf_container">
                    <div className="hf_form_container">
                        <h3>Не нашел продукт?</h3>
                        <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                        <form>
                            <input type="text" placeholder="Имя" />
                            <input type="tel" placeholder="Телефон" />
                            <input type="text" placeholder="Название товара" />
                            <textarea placeholder="Комментарий" />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                    <div className="hf_review_container">
                        {reviews.length > 0 ? (
                            <Slider {...sliderSettings}>
                                {reviews.map(review => (
                                    <div className="hf_card" key={review.id}>
                                        <div className="hf_card_padding">
                                            <img src={review.user.avatar || defaultProfilePic} alt={review.user.full_name} />
                                            <p className="hf_card_one">{review.review_text}</p>
                                            <p className="hf_card_two">{review.user.full_name}</p> {/* Display the user's full name */}
                                            <a href="/reviews" className="hf_card_three">Читать все отзывы</a>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        ) : error ? (
                            <p>There was an error loading the reviews.</p>
                        ) : (
                            <p>Loading reviews...</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}


export default HigherFooter;
