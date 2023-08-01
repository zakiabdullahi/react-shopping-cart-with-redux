import { useDispatch, useSelector } from "react-redux";
import useShop from "../SHopContext";
import { calculateTotal, removeFromCart } from "../features/productsSlice";

const CartProducts = () => {
  // const { total, removeFromCart, products } = useShop();
  const { products, total } = useSelector((store) => store.product);

  const dispatch = useDispatch();

  return (
    <div className="cart-products">
      <h2>cart Products</h2>

      {products.map((p) => (
        <div className="cart-product">
          <div className="cart-title-img">
            <img src={p.urlImage} alt="" />
            <span>{p.name}</span>
          </div>

          <h5>${p.price}</h5>
          <span
            className="delete"
            onClick={() => {
              dispatch(removeFromCart(p));
              dispatch(calculateTotal());
            }}
          >
            delete
          </span>
        </div>
      ))}
      <div className="total-price">
        <h2>Total Price: ${total}</h2>
      </div>
      {/* {products.map((p) => (
        <div className="cart-product">
          <div className="cart-title-img">
            <img src={p.urlImage} alt="" />
            <span>{p.name}</span>
          </div>

          <h5>${p.price}</h5>
          <span className="delete" onClick={() => removeFromCart(p)}>
            delete
          </span>
        </div>
      ))} */}
      {/* <div className="total-price">
        <h2>Total Price: ${total}</h2>
      </div> */}
    </div>
  );
};

export default CartProducts;
