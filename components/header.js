import styles from '../styles/Header.module.scss'

const Header = () => (
    <div>
        <header className={styles.container}>
            <div className={styles.background} />
            {/* <span className={`material-icons-outlined ${styles.icons}`}>menu</span> */}
            <div className={styles.title}>MugiSus.com</div>
            {/* <span className={`material-icons-outlined ${styles.icons}`}>share</span> */}
        </header>

        <div className={styles.placeholder} />
    </div>
)

export default Header;