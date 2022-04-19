import React, { useEffect, useState, useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import styled from "styled-components";
import context from "../context";

const Btn = styled.button`
  background-color: white;
  color: gray;
  padding: 5px;
  font-size: 26px;
  border: none;
  margin: auto;
`;

const NoItemInCart = styled.div`
  /* background-color: #9f9d9d;
  width: 40vw;
  height: 55vh;
  text-align: center;
  border-radius: 50px;
  color: white; */
`;

const Cart = () => {
  const { cartNum } = useContext(context);
  const { setCartNum } = useContext(context);
  const myCart = localStorage.getItem("cart");
  const showMyCart = JSON.parse(myCart);

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);

  const price = showMyCart.map((item) => item.price * item.quantity);
  const sum = price.reduce((partialSum, a) => partialSum + a, 0);

  const BtnAdd = (item) => {
    item.quantity++;
    localStorage.setItem("cart", JSON.stringify(showMyCart));
    setCart(showMyCart);
  };

  const BtnSubstraction = (item) => {
    item.quantity !== 1 ? item.quantity-- : console.log("needtoremove");
    localStorage.setItem("cart", JSON.stringify(showMyCart));
    setCart(showMyCart);
  };

  const BtnRemove = (item) => {
    const result = showMyCart.filter((e) => e !== item);
    localStorage.setItem("cart", JSON.stringify(result));
    setCart(result);
  };

  const BtnPurchase = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(showMyCart));
    setCartNum(
      showMyCart !== null && showMyCart !== undefined ? showMyCart.length : 0
    );
  }, [cart]);

  return (
    <div
      className="container d-flex justify-content-center"
      style={{ minHeight: 70 + "vh" }}
    >
      <div className="row">
        <div className="col-lg-12 px-5 ">
          <h3 className="font-weight-bold">購物車清單</h3>
          <div>
            {showMyCart === null ||
              (showMyCart.length === 0 && (
                <NoItemInCart>
                  您的購物車裡沒有商品，請至線上選購區選取
                </NoItemInCart>
              ))}
          </div>
          {Array.isArray(showMyCart) &&
            showMyCart.map((item, idx) => (
              <div className="cart-list my-3 row" key={idx}>
                <div className="cart-product ">
                  <img
                    className="card-img-top w-25"
                    src={item.img}
                    alt="Card image cap"
                  />
                  <div className="row my-4 ">
                    <div className="col-6">
                      <p className="card-title">{item.name}</p>
                      <p className="m-1">${item.price}</p>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <Btn onClick={() => BtnSubstraction(item)}> - </Btn>
                        <p className="h5 m-0">{item.quantity}</p>
                        <Btn onClick={() => BtnAdd(item)}> + </Btn>
                        <RiDeleteBin5Line
                          data-toggle="modal"
                          data-target="#exampleModal"
                        />
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                移除購物車商品
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">您確定刪除商品嗎？</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                取消
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => BtnRemove(item)}
                                data-dismiss="modal"
                              >
                                確認
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          <hr />
          <div className="d-flex flex-row justify-content-between my-4">
            <p>商品總金額: ${sum}</p>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#purchase"
              onClick={() => BtnPurchase()}
            >
              確定購買
            </button>
            <div
              className="modal fade"
              id="purchase"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      感謝您的購買唷
                    </h5>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                    >
                      關閉
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
