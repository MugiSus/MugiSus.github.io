import Link from 'next/link'
import { format as dateformat } from 'date-fns'
import styles from '../styles/CreationComponent.module.scss'

const CreationComponent = ({ url, image, title, date, description, icons }) => (
    <div className={styles.container}>
        <Link href={url}>
            <a>
                <img src={image} alt={title} className={styles.thumbnail}/>
                <div className={styles.propsContainer}>
                    <div className={styles.props}>
                        <time>{dateformat(date, 'yyyy.MM.dd')}</time><br />
                        <span>{title}</span>
                    </div>
                    <span className={`material-icons-outlined ${styles.icons}`}>
                        {icons?.join("") ?? "arrow_forward"}
                    </span>
                </div>
            </a>
        </Link>
    </div>
)

export default CreationComponent;
