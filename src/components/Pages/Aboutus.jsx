import ContentStyles from '../Body/Content.module.css';
import aboutus from '../img/aboutus.PNG';

import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
const Aboutus = () => {
    return (
        <div className={ContentStyles.container} >
            <h2 className={ContentStyles.heading}>Why we Matter?</h2>
            <div className={ContentStyles.details}>
                <aside className={ContentStyles.leftside}>
                    <h3 className={ContentStyles.subHeading}>Creative Thinking for creating an impact!</h3>
                    <p>
                        Leanpitch is problem solving. Whether it's your kid asking for a solution to his day to day problems or the risr in threats of Global Warming, its evident that the whole human kind needs to be product thinkers. We at Product Thinking community, strive to provide such a platform for practitioners to come together and learn from each other about the craft of building products. This Platform is run by the community for the community. We are a community with 46k+ prooduct thinkers hosting various events across India: Webinars every week. meet-ups every months in every city, two conference a year.
                    </p>

                </aside>
                <aside className={ContentStyles.rightside}>
                    <img src={aboutus} alt="No found" />
                </aside>

            </div>
            <p className={ContentStyles.aboutAction}>
                <button>
                    Join Our Community
                    <AiOutlineArrowRight />
                </button>
            </p>
        </div>
    );
}

export default Aboutus;