import ContentStyles from '../Body/Content.module.css';
import styles from './BlogCart/BlogCart.module.css';
import BlogsCart from './BlogCart/BlogCart';
import Blog1 from '../img/blog/blog1.PNG';
import Blog2 from '../img/blog/blog2.PNG';
import Blog3 from '../img/blog/blog3.PNG';
import Blog4 from '../img/blog/blog4.PNG';
const Blogs = () => {

    const blogs = [
        {
            imgSrc: Blog1
        },
        {
            imgSrc: Blog2
        },
        {
            imgSrc: Blog3
        },
        {
            imgSrc: Blog4
        },

    ];
    return (
        <div className={`${ContentStyles.container} ${styles.container}`} >
            {
                blogs && blogs.map((blog, index) => (<BlogsCart key={index.toString()} img={blog} />))
            }
        </div>
    );
}

export default Blogs;


