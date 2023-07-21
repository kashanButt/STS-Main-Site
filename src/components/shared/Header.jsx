import React from 'react'
import styles from '../../styles/Header.module.css'
import GetQuoteBtn from './GetQuoteBtn'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1>Logo</h1>
        </div>
        <div className={styles.navigation}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Packages</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        <div className={styles.quote}>
            <GetQuoteBtn/>
        </div>
    </div>
  )
}

export default Header