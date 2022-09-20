import ContentStyles from '../Body/Content.module.css';
import styles from './TraingCart/Training.module.css';
import Cart from './TraingCart/Cart';
const Traings = () => {
    const data = [
        {
            logoUrl: "https://dtkmdj8r1pumb.cloudfront.net/courses/20201102100013/CSPO.png",
            bgColor: "rgb(63, 103, 122)",
            heading: "Design Thinking",
            infoDetails: "Upcoming Trainig",
            startDate: "8th Oct, 2021",
            deatilsBgColor: "rgb(41, 66, 76)"
        },
        {
            logoUrl: "https://dtkmdj8r1pumb.cloudfront.net/courses/csm.png",
            bgColor: "rgb(87, 110, 154)",
            heading: "Certified Scrum Product Owner ",
            infoDetails: "Upcoming Trainig",
            startDate: "9th Oct, 2021",
            deatilsBgColor: "rgb(67, 86, 121)"
        },
        {
            logoUrl: "https://dtkmdj8r1pumb.cloudfront.net/courses/20210209142127/logo-icp-acc.png",
            bgColor: "rgb(62, 107, 135)",
            heading: "Product Managemnet Launchpad",
            infoDetails: "Upcoming Trainig",
            startDate: "22nd Oct, 2021",
            deatilsBgColor: "rgb(49, 82, 103)"
        },
        {
            logoUrl: "https://dtkmdj8r1pumb.cloudfront.net/courses/20190401114239/A-CSPO.png",
            bgColor: "rgb(49, 130, 160)",
            heading: "Advanced Certified Scrum Product Owner",
            infoDetails: "Upcoming Trainig",
            startDate: "26th Oct, 2021",
            deatilsBgColor: "rgb(33, 89, 109)"
        },
        {
            logoUrl: "https://dtkmdj8r1pumb.cloudfront.net/courses/20201102100256/CPMP.png",
            bgColor: "rgb(63, 103, 122)",
            heading: "Product Managemnet Bootcamp",
            infoDetails: "Upcoming Trainig",
            startDate: "will be scheduled soon",
            deatilsBgColor: "rgb(41, 66, 76)"
        },
    ];
    return (
        <div className={`${ContentStyles.container} ${styles.cartContiner}`} >
            {
                data.length && data.map((course, index) => (<Cart key={index.toString()} course={course} />))
            }
        </div>
    );
}

export default Traings;