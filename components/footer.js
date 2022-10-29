import styles from '../styles/Footer.module.scss'

const Footer = () => (
    <div>
        <footer className={styles.container}>
            <div className={styles.copyright}>copyright ©︎ {new Date().getFullYear()} MugiSus</div>
        </footer>
    </div>
)

export default Footer;