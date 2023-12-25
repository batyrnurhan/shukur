import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { productId } = useParams(); // Assuming you are using React Router and have set up a route like '/products/:productId'

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/${productId}/`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.image || 'default-image-url'} alt={product.name} />
            <p>{product.details}</p>
            <p><strong>Category:</strong> {product.category_name}</p>
            {/* More product details here */}
        </div>
    );
}

export default ProductDetail;
