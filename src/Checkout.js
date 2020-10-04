import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/Auto-clearance-sale_1500x250_71.png"
          alt=""
        ></img>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              Sir you have nothing in the basket.To buy one click on "Add to
              basket" Icon to get it.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
