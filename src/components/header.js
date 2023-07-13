import React from 'react';
import styles from './header.module.css';
import ResumeSvg from '../assests/resume.svg'

function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
            <p className={styles.heading}>
                A <span>Resume</span> that stands out!
            </p>
            <p className={styles.heading}>
                Make your own resume. <span>It's free</span>
            </p>
            </div>
            <div className={styles.right}>
                <img src={ResumeSvg} alt="Resume"/>

            </div>
        </div>
    );
}

export default Header;