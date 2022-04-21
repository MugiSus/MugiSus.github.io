import Head from 'next/head'
import styles from '../styles/Header.module.scss'

const Header = () => (
    <div>
        <header className={styles.container}>
            <span className={`material-icons-outlined ${styles.icons}`}>menu</span>
            <div className={styles.title}>MugiSus.com</div>
            <span className={`material-icons-outlined ${styles.icons}`}>share</span>
            
            <div className={styles.background} />
        </header>

        <div className={styles.placeholder} />
    </div>
)

export default Header;