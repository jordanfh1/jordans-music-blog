import React from 'react';
import styles from './page.module.css'; 
import { FaGithub , FaLinkedin } from "react-icons/fa";


const Contact = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>Let's Connect!</h1>
            <p className={styles.description}>
                I'm always excited to connect with fellow developers, musicians, and enthusiasts. Feel free to reach out!
            </p>
            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/jordan-houghton-2441711ba/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                   <FaLinkedin />
                    LinkedIn
                </a>
                <a href="https://github.com/jordanfh1" target="_blank" className={styles.link}>
                <FaGithub  /> GitHub
                </a>
                {/* need to other links */} 

            </div>
        </div>
    );
};

export default Contact;
