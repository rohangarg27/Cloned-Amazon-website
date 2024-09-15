import React from 'react';
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star"; 
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <strong>
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price)}
                    </strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="star-icon" key={i} />
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;