import React from 'react';
import styles from './Footer.module.css';
import { motion } from 'motion/react';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <motion.div
            initial={{opacity: 0, translateY: "100%"}}
            whileInView={{opacity:1, translateY: 0}}
            transition={{duration: 2}}
            className={styles.footerContent}>
                <div className={styles.desc}>
                    <h1 className={styles.topLine}>lux fitness</h1>
                    <p className={styles.text}>luxury fitness gym located in Los Angeles, Bel-Air</p>
                    <p className={styles.phone}>305-234-6535</p>
                </div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0, translateY: "100%"}}
            whileInView={{opacity:1, translateY: 0}}
            transition={{duration: 2}}
            className={styles.footerLinksContainer}>
                <div className={styles.footerLinks}>
                    <h2 className={styles.title}>contact us</h2>
                    <a href="/" className={styles.links}>contact</a>
                    <a href="/" className={styles.links}>support</a>
                    <a href="/" className={styles.links}>sponsorships</a>
                </div>
                <div className={styles.footerLinks}>
                    <h2 className={styles.title}>memberships</h2>
                    <a href="/" className={styles.links}>pricing</a>
                    <a href="/" className={styles.links}>plans</a>
                    <a href="/" className={styles.links}>FAQ</a>
                </div>
                <div className={styles.footerLinks}>
                    <h2 className={styles.title}>social media</h2>
                    <a href="/" className={styles.links}>instagram</a>
                    <a href="/" className={styles.links}>facebook</a>
                    <a href="/" className={styles.links}>youtube</a>
                    <a href="/" className={styles.links}>x-twitter</a>
                </div>
            </motion.div>

            <motion.div 
            initial={{opacity: 0, translateX: "-100%"}}
            whileInView={{opacity:1, translateX: 0}}
            transition={{duration: 2}}
            className={styles.copyRight}>
                <p>&copy; Copyright All Rights Reserved</p>

                <div>
                    <p>Terms and Conditions</p>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer
