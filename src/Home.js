import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_9A/Flash_Sales/Sale_Today/V242308626_IN_WLME_Redmi_G3L_Tallhero_1500x600._CB406706865_.jpg"
      ></img>
      {/* {PRODUCT id,title,price,rating,image} */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The learning startup:Innovates centers"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/41MMNYQWlNL.__AC_SY200_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="Inalsa Spruce Vacuum Cleaner-1200W for Home with Blower Function, 2L Reusable dust Bag, 2 years warranty, (Red/Black)"
          price={17.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41Ic-vgIktL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Best seller
          Orient Electric Apex-FX 1200mm Ceiling Fan (Brown)"
          price={7.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/31AsQszdybL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="
          Usha Janome Dream Stitch Automatic Zig-Zag Electric Sewing Machine (White And Blue)"
          price={20.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41ynK2KFLjL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="Philips AC1215/20 Air purifier, removes 99.97% airborne pollutants with 4-stage filtration"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51DPqw24BOL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Samsung Galaxy S10 Plus (Black, 8GB RAM, 128GB Storage)"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/31JAyj81SrL._AC_US240_FMwebp_QL65_.jpg"
        ></Product>
      </div>
      {/* {Product} */}
    </div>
  );
}

export default Home;
