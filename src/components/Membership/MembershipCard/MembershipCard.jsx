import styles from './MembershipCard.module.css';
const MembershipCard = ({ title, iconUrl, text, price, paragraph, content, button }) => {
    return (
        <div className={styles.plansCard}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={iconUrl} alt={title} />
                </div>

                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <p>{price}</p>
                    <p>{paragraph}</p>
                    <p>{content}</p>
                </div>

                <a href="/" className={styles.button}>{button}</a>
            </div>
        </div>
    )
}

export default MembershipCard
