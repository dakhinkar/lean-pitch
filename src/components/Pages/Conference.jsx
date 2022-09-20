import ContentStyles from '../Body/Content.module.css';


import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
const Conference = () => {
    return (
        <div className={ContentStyles.container} >
            <p>
                Conferences are not just about learning from the speakers. It's also about meeting new people, learning from attendees, making connections, getting to know each other and being part of community.
            </p>
            <p>
                Having hosted the conference online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our conference in person to make it more effective.
            </p>
            <p>
                We will be back with more information once COVID subsides.
            </p>
            <p>
                <button>Notify Me <AiOutlineArrowRight /></button>
            </p>

        </div>
    );
}

export default Conference;

