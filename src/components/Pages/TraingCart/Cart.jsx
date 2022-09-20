import styles from './Training.module.css';

const Cart = ({ course }) => {
    return (
        <div className={styles.courseContainer} style={{ backgroundColor: `${course.bgColor}` }}>
            <div className={styles.logoInfoL}>
                <img src={course.logoUrl} alt="faild" width="30px" height="30px" />
            </div>
            <div className={styles.heading}>
                {course.heading}
            </div>
            <div className={styles.couserDetails} style={{ backgroundColor: course.deatilsBgColor }}>
                <span>{course.infoDetails}</span>
                <span className={styles.dateInfo}>{course.startDate}</span>
            </div>
            <div className={styles.action}>
                <button>Register</button>
            </div>

        </div>
    )
}

export default Cart;
