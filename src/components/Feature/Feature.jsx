import React from 'react'
import styles from './Feature.module.css';
import { Features } from '../constants';
import FeatureCard from './FeatureCard/FeatureCard';
import { motion } from 'motion/react';

const Feature = () => {
    return (
        <section className={styles.Container} id="features">
            <motion.div
            initial={{opacity: 0, translateX: "-100%"}}
            whileInView={{opacity:1, translateX: 0}}
            transition={{duration: 2}}
            >
                <p>feature</p>
                <h1>What we offer</h1>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        {Features.map((item) => (
                            <FeatureCard 
                                key={item.title}
                                iconUrl={item.icon}
                                text={item.text}
                            />
                        ))}
                    </div>

                    <div className={styles.contentImg}>
                        <img src='/public/assets/images/img11.png' alt="gym center" />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Feature
