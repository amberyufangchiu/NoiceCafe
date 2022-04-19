import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import context from "../context";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = styled.span`
  background-color: red;
  position: absolute;
  margin: 0 9px;
`;

const Icon = styled.a`
  font-size: 20px;
  /* margin-bottom: 10px; */
  padding: 0;
`;

const Span = styled.span`
  background-color: rgb(224, 50, 50);
  padding: 2px 5px;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 0 50px 5px;
  font-weight: 600;
`;

const Navbar = () => {
  const { cartNum } = useContext(context);
  const { setCartNum } = useContext(context);

  useEffect(() => {
    setCartNum(localStorage.getItem("cartNum"));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light m-4">
      <div className="container-fluid">
        <a className="navbar-brand m-2" href="/">
          Noice Cafe
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item m-2">
              <a className="nav-link" href="/#coffee">
                典藏咖啡
              </a>
            </li>
            <li className="nav-item dropdown m-2">
              <a
                className="nav-link dropdown-toggle"
                href="/Product"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                線上選購
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/Product">
                    濾掛式咖啡
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="/#contactUs">
                聯絡我們
              </a>
            </li>
            <li className="nav-item m-2">
              <Icon className="nav-link " href="/Cart">
                <AiOutlineShoppingCart />
                <Span>{cartNum}</Span>
              </Icon>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
