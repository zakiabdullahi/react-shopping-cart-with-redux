import { useSelector } from "react-redux";
import useShop from "../SHopContext";
import "../style.css";
import { Link } from "react-router-dom";
const Header = () => {
  const { products } = useSelector((store) => store.product);
  // console.log("prop", products);
  // const { products } = useShop();
  return (
    <div className="menu">
      <Link className="logo" to="/">
        Reactify
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <Link to="/cart" className="cart">
        {/* <span>{products.length}</span> */}
        <span>{products.length}</span>
      </Link>
      {/* <a href="/">Logo</a>

      <ul className="menu-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>

      <a href="#">{cart}</a> */}
    </div>
  );
};

export default Header;
