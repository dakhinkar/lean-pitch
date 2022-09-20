import ContentStyles from '../Body/Content.module.css';
import styles from './BlogCart/BlogCart.module.css';
import BlogsCart from './BlogCart/BlogCart';

import vedios01 from '../img/videos/vedios01.PNG';
import vedios02 from '../img/videos/vedios02.PNG';

const Vedios = () => {
    const vedios = [
        {
            imgSrc: vedios01
        },
        {
            imgSrc: vedios02
        },

    ]
    return (
        <div className={`${ContentStyles.container} ${styles.container}`
        } >
            {
                vedios && vedios.map((vedio, index) => (<BlogsCart key={index.toString()} img={vedio} />))
            }
        </div>
    );
}

export default Vedios;