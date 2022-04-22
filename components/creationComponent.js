import Link from 'next/link'
// import Image from 'next/image'
import { format as dateformat } from 'date-fns'
import styles from '../styles/CreationComponent.module.scss'

const CreationComponent = ({ url, image, title, date, description, wip }) => (
    <div className={styles.container}>
        <Link href={url}>
            <a>
                <img src={`/creations/${image}`} alt={title} className={styles.thumbnail}/>
                <div className={styles.propsContainer}>
                    <div className={styles.props}>
                        <time>{dateformat(date, 'yyyy.MM.dd')}</time><br />
                        <span>{title}</span>
                    </div>
                    <span className={`material-icons-outlined ${styles.articleIcon}`}>{wip ? "videogame_asset_off" : "arrow_forward"}</span>
                </div>
            </a>
        </Link>
    </div>
)

export default CreationComponent;
