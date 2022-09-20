// import { Navbar, Container, Nav } from 'react-bootstrap';
import brandImg from '../img/productwhite.png';
import styles from './NavBar.module.css';

const NavBar = () => {
    const clickHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className={styles.navContainer}>
            <div className={styles.logoConatiner}>
                <img
                    alt=""
                    src={brandImg}
                    width="50"
                    height="50"
                />{' '}
                Leanpicth
            </div>
            <div className={styles.detailsContainer}>
                <a href="/" className={styles.subcribe} onClick={clickHandler}>Subscribe</a>
                <a href="/" onClick={clickHandler}>Contact Us</a>
            </div>
        </div>
    )
}

export default NavBar;