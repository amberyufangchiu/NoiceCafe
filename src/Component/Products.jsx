import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { product } from "../data";
import context from "../context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Products = () => {
  const { cartNum } = useContext(context);
  const { setCartNum } = useContext(context);
  const [cart, setCart] = useState(cartFromLocalStorage);

  // localStorage.setItem("cart", "[]");
  // console.log(cart);

  const addToCart = (product) => {
    // 刪掉LocalStroage可能會出現cart=null
    if (cart === null) {
      console.log("im empty");
      localStorage.setItem("cart", "[]");
      localStorage.setItem("cartNum", 1);
      setCart(product);
      // setCartNum(1);
    } else if (cart.length !== 0 && cart.some((e) => e.id === product.id)) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          console.log("u喔");
          cart[i].quantity++;
          return localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    } else {
      console.log("沒重複");
      return setCart([...cart, product]);
    }
  };

  localStorage.setItem("cart", JSON.stringify(cart));
  const cartData = localStorage.getItem("cart");
  const cartDataParse = JSON.parse(cartData);
  console.log(cartDataParse);

  useEffect(() => {
    setCartNum(
      cartDataParse !== null && cartDataParse !== undefined
        ? cartDataParse.length
        : 0
    );
  }, [cart]);

  localStorage.setItem("cartNum", cartNum);

  return (
    <div className="col-lg-9 col-12 py-3 px-5">
      <div className="row">
        {product.map((item, idx) => (
          <div className="col-lg-4 pb-5" key={idx}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={item.img}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Wrapper>
                  <p className="m-1">${item.price}</p>
                  <button
                    // href="#"
                    className="btn btn-primary "
                    onClick={() => addToCart(item)}
                  >
                    加入購物車
                  </button>
                </Wrapper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
