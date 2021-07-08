import React, { useState } from 'react';
import './Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';


function Order({ order }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    return (
        <div className='order'>
            <p>
                {moment.unix(order.data.created).format("DD MMMM YYYY, hh:mma")}
            </p>
            <p className="order__id">
                <small><strong>Order ID:</strong> {order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hidebutton
                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order__total">Order Total: <strong>{value}</strong></h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"}
            />

        </div>
    )
}

export default Order
