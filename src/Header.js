import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/png;base64,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"
        ></img>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="headerNav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello buoy</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />

            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
