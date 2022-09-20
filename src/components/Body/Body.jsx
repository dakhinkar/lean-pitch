import styels from './Body.module.css';

import { Nav } from 'react-bootstrap';


import imgaeSrc from '../img/bodyBg.jpg';
import { typeContant } from './constant'
import { useState } from 'react';
import Traings from '../Pages/Traings';
import Blogs from '../Pages/Blogs';
import Conference from '../Pages/Conference';
import Meetups from '../Pages/Meetup';
import Aboutus from '../Pages/Aboutus';
import PodCasts from '../Pages/PodCasts';
import SpeakSeries from '../Pages/SpeakSeries';
import Speaker from '../Pages/Speaker';
import Vedios from '../Pages/Vedios';
import Volunteer from '../Pages/Volunteer';
import Webinars from '../Pages/Webinars';
// import Vedios from '../Pages/Vedios';
const Body = () => {
    const [type, setType] = useState("");
    const setHandler = (strType) => {
        console.log(strType);
        setType(strType);
    }
    return (
        <div className={styels.bodyContainer}>
            <img src={imgaeSrc} alt="" />
            <div className={styels.innerDiv}>
                <Nav className={`flex-column ${styels.asideContainer}`}>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.TRAINIG)}>Trainings</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.MEETUPS)}>Meetups</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.webinars)}>Webinars</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.Conference)}>Conference</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.vedios)}>Vedios</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.speakSeries)}>PM Speak Series</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.Blogs)}>Blogs</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.podcasts)}>Podcasts</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.speaker)}>Be A Speaker</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.Volunteer)} >Be A Volunteer</Nav.Link>
                    <Nav.Link href='#' onClick={() => setHandler(typeContant.aboutus)}>About Us</Nav.Link>
                </Nav>
                {
                    type === typeContant.TRAINIG && <Traings />
                }
                {

                    type === typeContant.Blogs && <Blogs />
                }
                {
                    type === typeContant.Conference && <Conference />
                }
                {
                    type === typeContant.MEETUPS && <Meetups />
                }
                {
                    type === typeContant.Volunteer && <Volunteer />
                }
                {
                    type === typeContant.aboutus && <Aboutus />
                }
                {

                    type === typeContant.podcasts && <PodCasts />
                }
                {
                    type === typeContant.speakSeries && <SpeakSeries />
                }
                {
                    type === typeContant.speaker && <Speaker />
                }
                {
                    type === typeContant.vedios && <Vedios />
                }
                {
                    type === typeContant.webinars && <Webinars />
                }
            </div>

        </div>
    )
}

export default Body;







