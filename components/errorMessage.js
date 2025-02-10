import Head from 'next/head';
import styles from '../styles/ErrorMessage.module.scss';

const ErrorMessage = ({statusCode, title, message}) => (
    <div className={styles.container}>
        <Head>
            <title>{statusCode} - {title}</title>
            <meta name="robots" content="noindex" />
        </Head>

        <div className={styles.message}>
            <div className={styles.statusCode}>
                {statusCode}
            </div>
            <div className={styles.verticalLine} />
            <div className={styles.messageText}>
                {message}
            </div>
        </div>
    </div>
)

export default ErrorMessage;