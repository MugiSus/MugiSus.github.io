import styles from '../styles/Header.module.scss'

const Header = () => (
    <div>
        <header className={styles.container}>
            <div className={styles.background} />
            <span className={`material-icons-outlined ${styles.icons} ${styles.strokedText}`} data-text="menu">menu</span>
            <div className={`${styles.title} ${styles.strokedText}`} data-text="MugiSus.com">MugiSus.com</div>
            <span className={`material-icons-outlined ${styles.icons} ${styles.strokedText}`} data-text="share">share</span>
        </header>

        <div className={styles.placeholder} />
    </div>
)

export default Header;