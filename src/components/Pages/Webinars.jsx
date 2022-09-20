import ContentStyles from '../Body/Content.module.css';
import styles from './BlogCart/BlogCart.module.css';

import webinar01 from '../img/webinars/webinar.PNG';

import BlogsCart from './BlogCart/BlogCart';
const Webinars = () => {
    const webinar = [

        {
            imgSrc: webinar01
        },

    ];
    return (
        <div className={`${ContentStyles.container} ${styles.container}`}>
            {
                webinar && webinar.map((web, index) => (<BlogsCart key={index.toString()} img={web} />))
            }
        </div>
    );
}

export default Webinars;