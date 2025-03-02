import React from 'react';
import styles from './Contact.module.css';
import { motion } from 'motion/react';

const Contact = () => {
    return (
        <section className={styles.contactContainer}>
        <motion.div
        initial={{opacity: 0, translateY: "-100%"}}
        whileInView={{opacity:1, translateY: 0}}
        transition={{duration: 2}}
        >
            <h1>Get Access to Members Only Perks</h1>
            <p>Sign up for our newsletter below to get $10 
                off your first personal training session!
            </p>
            <div className={styles.content}>
                <form action="#">
                    <input type="email" placeholder="Enter your email" id="email" />
                    <button type="submit" className={styles.button}>sign up</button>
                </form>
            </div>
        </motion.div>
    </section>
    )
}

export default Contact
