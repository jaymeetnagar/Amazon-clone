import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ image, title, price, rating, hidebutton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET'
        })
    }

    return (
        <div className='checkoutProduct'>

            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>

                <p className='checkoutProduct__title'>{title}</p>

                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
                {!hidebutton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct