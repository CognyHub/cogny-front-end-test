import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import shoes from "../img/Shoes.png";
import { ItemLocal } from '../firebase/ItemLocal'


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={shoes} alt="costs" className={styles.img} />
      </Link>
      <Link to="/cart">
        <strong>
          Meu carrinho
        <ItemLocal />
        </strong>
        </Link>
    </nav>
  );
}

export default Navbar;
