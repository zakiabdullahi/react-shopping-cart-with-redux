import { useEffect, useState } from "react";
import useShop from "../SHopContext";

import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  calculateTotal,
} from "../features/productsSlice";
import iziToast from "izitoast";

const Product = ({ product }) => {
  const { products } = useSelector((store) => store.product);
  console.log(products);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isCart = products.filter((p) => p.id === product.id);
    if (isCart.length > 0) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products]);

  const dispatch = useDispatch();

  dispatch(calculateTotal());

  const handleAddToCart = () => {
    // addToCart(product);
    if (isInCart) {
      dispatch(removeFromCart(product));
      // dispatch(calculateTotal());
    } else {
      dispatch(addToCart(product));
      iziToast.success({
        title: "success",
        message: "SuccessFully added A Cart",
        position: "topRight",
        maxWidth: "300px", // bottomRight, bottomLeft, topRight,
      });

      // dispatch(calculateTotal());

      // console.log(products);
    }
  };

  // const handleAddToCart = () => {
  //   dispatch(addToCart(product));
  // };
  // const [isInCart, setIsInCart] = useState(false);
  // const { addToCart, products, removeFromCart } = useShop();

  // useEffect(() => {
  //   const isCart = products.filter((p) => p.id === product.id);
  //   console.log(isCart);

  //   if (isCart.length > 0) {
  //     setIsInCart(true);
  //   } else {
  //     setIsInCart(false);
  //   }
  // }, [products]);
  // const handleAddToCart = () => {
  //   // addToCart(product);
  //   if (isInCart) {
  //     removeFromCart(product);
  //   } else {
  //     addToCart(product);
  //     // console.log(products);
  //   }
  // };

  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(184, 177, 177, 0.2)), url(${product.urlImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      {/* <button className="btn btn-primary" onClick={handleAddToCart}>
        +
      </button> */}
      <button
        className={`btn ${isInCart ? " btn-secondary" : " btn-primary"} `}
        onClick={handleAddToCart}
      >
        {isInCart ? "-" : "+"}
      </button>
    </div>
  );
};

export default Product;
