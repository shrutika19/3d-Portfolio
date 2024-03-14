import React from 'react'
import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Shrutika Jaiswal.</span> 👋
            <br />
            A Full Stack Developer from Mumbai, India.
        </h1>
    ),
    2: (
        <InfoBox
            text="As a full stack developer with a year of hands-on experience, my passion for technology drives me to continuously expand my skill set."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="I have hands-on experience with MERN Stack, Asp .Net MVC, having worked on multiple projects utilizing these technologies. Additionally, I possess a strong understanding of Web APIs, Git, Databases.."
            link="/projects"
            btnText="Visit Site"
        />
    ),
    4: (
        <InfoBox
            text="If you're eager to start a new project and searching for developers, you're just a few clicks away from finding the perfect match!"
            link="/contact"
            btnText="Contact Me"
        />
    ),

}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo