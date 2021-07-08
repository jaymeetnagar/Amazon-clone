import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://www.adexchanger.com/wp-content/uploads/2018/02/shutterstock_376692970.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h3 className="checkout__username">Hello, {user?.email}</h3>
                        <h2 className="checkout__title">Your Basket is empty.</h2>
                        <p className="checkout__disc">
                            You have no items in your basket. To buy items,
                            click on <b>"Add to basket"</b> next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h3 className="checkout__username">Hello, {user?.email}</h3>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket?.map((item) => (
                            <CheckoutProduct
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout