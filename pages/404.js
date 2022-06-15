import Head from 'next/head';
import styles from '../styles/NotFound.module.scss';

const NotFound = () => (
    <div className={styles.container}>
        <Head>
            <title>404 - Not Found</title>
        </Head>

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