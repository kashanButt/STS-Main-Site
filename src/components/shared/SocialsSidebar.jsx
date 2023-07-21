import React from 'react'
import styles from '../../styles/SocialSidebar.module.css'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram } from 'react-icons/bi'

const SocialsSidebar = () => {
    return (
        <div className={styles.socialSidebar}>
            <BiLogoFacebook className={styles.icon} />
            <BiLogoLinkedin className={styles.icon} />
            <BiLogoInstagram className={styles.icon} />
        </div>
    )
}

export default SocialsSidebar