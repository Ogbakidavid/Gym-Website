import React from 'react'
import styles from './FeatureCard.module.css';

const FeatureCard = ({ title, iconUrl, text }) => {
    return (
        <div className={styles.featuresCard}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={iconUrl} alt={title} />
                </div>

                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default FeatureCard


// import styles from './FeatureCard.module.css';

// export const FeatureCard =() => {
//     return (
//         
//     );
// };