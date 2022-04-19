import React from "react";
import Products from "./Products";

const ProductsNav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 vertical-nav py-5">
          <nav className="nav flex-column">
            <a
              className="nav-link active text-body all-product border-left-color"
              href="#"
            >
              所有商品
            </a>
            <a className="nav-link text-secondary" href="#">
              濾掛咖啡
            </a>
          </nav>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default ProductsNav;
