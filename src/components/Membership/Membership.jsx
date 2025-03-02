import React from 'react'
import styles from './Membership.module.css';
import { membershipCards } from '../constants';
import  MembershipCard  from './MembershipCard/MembershipCard'; 
import { motion } from 'motion/react';

const Membership = () => {
    return (
        <section className={styles.plansContainer} id='membership'>
            <motion.div
            initial={{opacity: 0, translateX: "100%"}}
            whileInView={{opacity:1, translateX: 0}}
            transition={{duration: 2}}
            >
                <h1>View our Plans</h1>
                <h5>Get started today and receive 25% off your first month</h5>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        {membershipCards.map((item) => (
                            <MembershipCard 
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            text={item.text}
                            price={item.price}
                            paragraph={item.paragraph}
                            content={item.content}
                            button={item.button}
                            />
                        ))}
                    </div> 
                </div>
            </motion.div>
            
        </section>
    )
}

export default Membership
