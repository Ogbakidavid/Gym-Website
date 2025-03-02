import React from 'react';
import styles from './Team.module.css';
import { motion } from 'motion/react';

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
                        combined. Each trainers specializes in strength and mobility
                        workouts.
                    </p>
                </div>
                <div className={styles.teamText}>
                    <p className={styles.topLine}>free trial</p>
                    <h1>7 Day Trial</h1>
                    <p className={styles.teamDesc}>
                        you can work with each trainer for up to 7
                        for free in other to see if they are
                        good fit for your goals.
                    </p>
                </div>
                <div className={styles.teamCard}>
                    <img src='/src/assets/image/trainer1.png' 
                    alt="trainer"
                    />
                    <p>austin</p>
                </div>
                <div className={styles.teamCard}>
                    <img src='/src/assets/image/trainer3.png' 
                    alt="trainer" 
                    />
                    <p>lucia</p>
                </div>
                <div className={styles.teamCard}>
                    <img src='/src/assets/image/trainer6.png' 
                    alt="trainer" 
                    />
                    <p>micheal</p>
                </div>
                <div className={styles.teamCard}>
                    <img src='/src/assets/image/trainer4.png'
                    alt="trainer"
                    />
                    <p>anna</p>
                </div>
            </motion.div>
        </section>
    )
}

export default Team
