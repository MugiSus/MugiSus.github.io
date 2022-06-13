import Link from 'next/link';
import styles from '../styles/Header.module.scss'

const Header = () => (
    <div>
        <header className={styles.headerContainer}>
            <div className={styles.background} />
            <label htmlFor={styles.checkboxSidemenu} className={`material-icons-outlined ${styles.icons} ${styles.strokedText}`} data-text="menu">menu</label>
            <div className={`${styles.title} ${styles.strokedText}`} data-text="MugiSus.com">MugiSus.com</div>
            <span className={`material-icons-outlined ${styles.icons} ${styles.strokedText}`} data-text="share">share</span>
        </header>
        <input type="checkbox" className={styles.checkboxSidemenu} id={styles.checkboxSidemenu} />
        <div className={styles.placeholder} />
        <label htmlFor={styles.checkboxSidemenu} className={styles.sidemenuBackground} />
        <div className={styles.sidemenu}>
            <div className={styles.background} />
            <label htmlFor={styles.checkboxSidemenu} className={`material-icons-outlined ${styles.closeArrow} ${styles.strokedText}`} data-text="arrow_back">arrow_back</label>
            <h2 className={`${styles.sidemenuTitle} ${styles.strokedText}`} data-text="MugiSus.com">MugiSus.com</h2>
            <h3 className={`${styles.sidemenuTitle} ${styles.strokedText}`} data-text="Creations">Creations</h3>
            <h3 className={`${styles.sidemenuTitle} ${styles.strokedText}`} data-text="Articles">Articles</h3>
            <h3 className={`${styles.sidemenuTitle} ${styles.strokedText}`} data-text="MugiSus">MugiSus</h3>
            <h3 className={`${styles.sidemenuTitle} ${styles.strokedText}`} data-text="Careers">Careers</h3>
        </div>
    </div>
)

export default Header;