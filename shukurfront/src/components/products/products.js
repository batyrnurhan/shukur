import "./products.css"
import product from "./pngegg (36) 1.png"
import banner from "./image 2.png"
import left from "./left.svg"
import right from "./right.svg"
import {useEffect, useState} from "react";
import axios from "axios";
import productPlaceholder from "./pngegg (36) 1.png"; // Placeholder image for products without an image

function Products(){
    const [certifiedProducts, setCertifiedProducts] = useState([]);
    const [nonCertifiedProducts, setNonCertifiedProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const [certifiedRes, nonCertifiedRes, categoriesRes] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/products/certified/'),
                    axios.get('http://127.0.0.1:8000/api/products/non-certified/'),
                    axios.get('http://127.0.0.1:8000/api/products/categories/')
                ]);
                setCertifiedProducts(certifiedRes.data);
                setNonCertifiedProducts(nonCertifiedRes.data);
                setCategories(categoriesRes.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };
    const resetCategories = () => {
        setSelectedCategory(null);
    };

    const filterByCategory = (products) => {
        return selectedCategory ? products.filter(p => p.category === selectedCategory) : products;
    };
    return(
        <div className={"products"}>
            <h2 className={"pr_h2"}>    Продукты</h2>
            <ul className={"pr_bar"}>
                <li>
                    <button onClick={resetCategories}>Все товары</button>
                </li>
                {categories.map(category => (
                    <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                        <button>{category.name}</button>
                    </li>
                ))}
            </ul>
            <h2 className={"pr_h2_two"}>Халяльные продукты</h2>
            <div className={"product_row row"}>
                {filterByCategory(certifiedProducts).map(product => (
                    <div key={product.id} className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}>
                            <img src={productPlaceholder} alt={product.name} />
                        </div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>{product.name}</p>
                            <p className={"pr_card_text"}>{product.details}</p>
                            <p className={"pr_card_label"}>Халяльный</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"product_banner row"}>
                <div className={"col-6 pr_banner_text"}>
                    <h2>Не нашел нужный продукт?</h2>
                    <p>В таком случае заполни заявку и мы добавим его в наш список</p>
                    <a href={"/"}>Оставить заявку</a>
                </div>
                <div className={"col-4 pr_banner_img"}>
                    <img src={banner}/>
                </div>
            </div>
            <div className={"Not_halal"}>
                <h2>Не халяльные продукты</h2>
                <div className={"product_row row"}>
                    {filterByCategory(nonCertifiedProducts).map(product => (
                        <div key={product.id} className={"col-lg-2 pr_card not_halal"}>
                            <div className={"img_layer"}>
                                <img src={productPlaceholder} alt={product.name} />
                            </div>
                            <div className={"text_layer"}>
                                <p className={"pr_card_bolt"}>{product.name}</p>
                                <p className={"pr_card_text"}>{product.details}</p>
                                <p className={"pr_card_label "}>Не халяльный</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"Frequently_viewed"}>
                <h2>Часто просматривают</h2>
                <div className={"product_row row pr_slaider"}>
                    <img src={left} className={"pr_left"}/>
                    <img src={right} className={"pr_right"}/>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card not_halal"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                    <div className={"col-lg-2 pr_card"}>
                        <div className={"img_layer"}><img src={product}/></div>
                        <div className={"text_layer"}>
                            <p className={"pr_card_bolt"}>Название товара</p>
                            <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                            <p className={"pr_card_label "}>Не халяльный</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products