import Link from 'next/link'
import Image from 'next/image'
import { format as dateformat } from 'date-fns'
import styles from '../styles/CreationComponent.module.scss'

const CreationComponent = ({ url, image, title, date }) => (
    <div className={styles.container}>
        <Link href={url}>
            <a>
                {/* <Image src={`/../public/creations/${image}`} alt={title} quality={80} height={500} width={800} objectFit="cover" /> */}
                <div className={styles.creationPropsContainer}>
                    <div className={styles.creationProps}>
                        <time>{dateformat(date, 'yyyy.MM.dd')}</time><br />
                        <span>{title}</span>
                    </div>
                    <span className={`material-icons-outlined ${styles.articleIcon}`}>arrow_forward</span>
                </div>
            </a>
        </Link>
    </div>
)

export default CreationComponent;
