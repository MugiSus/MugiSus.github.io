import styles from '../styles/NotFound.module.scss';

const NotFound = () => (
    <div className={styles.container}>
        <div className={styles.message}>
            <div className={styles.statusCode}>
                404
            </div>
            <div className={styles.separator} />
            <div className={styles.messageText}>
                This page could not be found.
            </div>
        </div>
    </div>
)

export default NotFound;