import styles from './BlogCart.module.css';

const BlogsCart = ({ img }) => {
    return (
        <div className={styles.blogContainer}>
            <img src={img.imgSrc} alt="not found" />
        </div>
    )
}

export default BlogsCart;