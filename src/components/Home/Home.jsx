import React from 'react';
import styles from './Home.module.css'
import { motion } from 'motion/react';

const Home = () => {
    return (
        <section className={styles.heroContainer} id="home">
            <motion.div
            initial={{opacity: 0, translateX: "100%"}}
            whileInView={{opacity:1, translateX: 0}}
            transition={{duration: 2}}
            className={styles.content}>
                <h1>lux fitness</h1>
                <motion.p
                >Join Now for $29</motion.p>
                <a href="/" className={styles.btn}>get started</a>
            </motion.div>
        </section>
    )
}

export default Home
