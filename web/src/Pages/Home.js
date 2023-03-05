import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <><div className='homeTitle'>
      <h1>Welcome to CognyShoes!</h1>


    </div>
    <h2 className="subTitle">
        We sell the best products at the best prices.<Link to='/products'>Shop now!</Link>

      </h2></>
  );
}

export default Home;
