import React from 'react';
import styles from './Team.module.css';
import { motion } from 'framer-motion';


const Team = () => {
    return (
        <section className={styles.teamContainer} id="trainers">
            <motion.div
            initial={{opacity: 0, translateX: "-100%"}}
            whileInView={{opacity:1, translateX: 0}}
            transition={{duration: 2}}
            className={styles.teamWrapper}>
                <div className={styles.teamText}>
                    <p className={styles.topLine}>private coaching</p>
                    <h1>Meet our Team</h1>
                    <p className={styles.teamDesc}>
                        All our personal trainers have over 30 years of experience
                        combined. Each trainer specializes in strength and mobility
                        workouts.
                    </p>
                </div>
                <div className={styles.teamText}>
                    <p className={styles.topLine}>free trial</p>
                    <h1>7 Day Trial</h1>
                    <p className={styles.teamDesc}>
                        You can work with each trainer for up to 7 days
                        for free in order to see if they are a
                        good fit for your goals.
                    </p>
                </div>
                <div className={styles.teamCard}>
                    <img src="/assets/images/trainer1.png" 
                    alt="trainer"
                    />
                    <p>austin</p>
                </div>
                <div className={styles.teamCard}>
                    <img src="/assets/images/trainer3.png"
                    alt="trainer" 
                    />
                    <p>lucia</p>
                </div>
                <div className={styles.teamCard}>
                    <img src="/assets/images/trainer6.png"
                    alt="trainer" 
                    />
                    <p>micheal</p>
                </div>
                <div className={styles.teamCard}>
                    <img src="/assets/images/trainer4.png"
                    alt="trainer"
                    />
                    <p>anna</p>
                </div>
            </motion.div>
        </section>
    )
}

export default Team