import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import shoes from '../img/Shoes.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
     
      <div className={styles.div}>
         <Link to="/">
        <img src={shoes} alt='costs' className={styles.img} />
        </Link>
      <div>
        <Link to="/cart">
          <strong>Meu carrinho</strong>
           <p> 0 itens</p>
         </Link>  
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
