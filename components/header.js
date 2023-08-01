/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../styles/Header.module.scss'

import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    const isTop = router.pathname === "/";

    return (
        <>
            <header className={ isTop ? `${styles.headerContainer} ${styles.rounded}` : styles.headerContainer }>
                <div className={styles.background} />
                <label htmlFor={styles.checkboxSidemenu} className={`material-icons-outlined ${styles.icons} ${styles.strokedText}`} data-text="menu">
                    menu
                </label>
                <Link href={"#top"} passHref>
                    <div className={`${styles.title} ${styles.strokedText}`} data-text="MugiSus.com">
                        MugiSus.com
                    </div>
                </Link>
                <span className={`material-icons-outlined ${styles.icons} ${styles.strokedText}`} data-text="share">
                    share
                </span>
            </header>

            <input type="checkbox" className={styles.checkboxSidemenu} id={styles.checkboxSidemenu} />
            <label htmlFor={styles.checkboxSidemenu} className={styles.sidemenuBackground} />
            <div className={styles.sidemenu}>
                <div className={styles.background} />
                <label htmlFor={styles.checkboxSidemenu} className={`material-icons-outlined ${styles.closeArrow} ${styles.strokedText}`} data-text="arrow_back">
                    arrow_back
                </label>
                <Link href={"/"} passHref>
                    <h2 className={styles.strokedText} data-text="MugiSus.com">
                        MugiSus.com
                    </h2>
                </Link>
                <Link href={"/#creations"} passHref>
                    <h3 className={styles.strokedText} data-text="Creations">
                        Creations
                    </h3>
                </Link>
                <Link href={"/#articles"} passHref>
                    <h3 className={styles.strokedText} data-text="Articles">
                        Articles
                    </h3>
                </Link>
                <Link href={"/#mugisus"} passHref>
                    <h3 className={styles.strokedText} data-text="MugiSus">
                        MugiSus
                    </h3>
                </Link>
                <Link href={"/#careers"} passHref>
                    <h3 className={styles.strokedText} data-text="Careers">
                        Careers
                    </h3>
                </Link>
                <div className={styles.socialLinks}>
                    <Link href={"https://twitter.com/MugiSus"} passHref>
                        <img className={styles.socialLinkImage} src="/link-twitter.svg" alt="GitHub" />
                    </Link>
                    <Link href={"https://github.com/MugiSus"} passHref>
                        <img className={styles.socialLinkImage} src="/link-github.svg" alt="GitHub" />
                    </Link>
                </div>
                <div className={styles.strokedText} data-text="Copyright ©︎ 2023 MugiSus">
                    Copyright ©︎ 2023 MugiSus
                </div>
            </div>
        </>
    )
}

export default Header;