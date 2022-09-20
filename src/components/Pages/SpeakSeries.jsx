import ContentStyles from '../Body/Content.module.css';
import styles from './BlogCart/BlogCart.module.css';

import speak01 from '../img/speak/speak01.PNG';
import speak02 from '../img/speak/speak02.PNG';
import speak03 from '../img/speak/speak03.PNG';
import speak04 from '../img/speak/speak04.PNG';
import BlogsCart from './BlogCart/BlogCart';
const SpeakSeries = () => {
    const speake = [

        {
            imgSrc: speak01
        },
        {
            imgSrc: speak02
        },
        {
            imgSrc: speak03
        },
        {
            imgSrc: speak04
        },

    ];
    return (
        <div className={`${ContentStyles.container} ${styles.container}`}>
            {
                speake && speake.map((speak, index) => (<BlogsCart key={index.toString()} img={speak} />))
            }
        </div>
    );
}

export default SpeakSeries;