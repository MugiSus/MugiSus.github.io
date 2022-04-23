import Link from 'next/link'
import { format as dateformat } from 'date-fns'
import styles from '../styles/CreationComponent.module.scss'

import creationfeaturesYaml from '../data/creationfeatures.yaml'

const CreationComponent = ({ url, image, title, date, description, features }) => (
    <div className={styles.container}>
        <Link href={url}>
            <a>
                <img src={image} alt={title} className={styles.thumbnail}/>
                <div className={styles.propsContainer}>
                    <div className={styles.props}>
                        <time>{dateformat(date, 'yyyy.MM.dd')}</time><br />
                        <span>{title}</span>
                    </div>
                    {
                        features.map(feature => (
                            <span key={feature} className={`material-icons-outlined ${styles.propIcon}`}>{creationfeaturesYaml[feature]?.icon ?? ""}</span>
                        ))
                    }
                    <span className={`material-icons-outlined ${styles.propIcon}`}>
                        arrow_forward
                    </span>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.props}>
                        <time>{dateformat(date, 'yyyy.MM.dd')}</time><br />
                        <span>{title}</span>
                    </div>
                    <ul className={styles.featuresUl}>
                        {
                            (features ?? []).map(feature => (
                                <li key={feature}>
                                    <span className={`material-icons-outlined ${styles.featureIcon}`}>{creationfeaturesYaml[feature]?.icon}</span>
                                    <span className={styles.feature}>{creationfeaturesYaml[feature]?.description}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <p className={styles.description}>
                        {
                            description.split("\n").filter(line => line).map((line, index) => (
                                <span key={index}>{line}<br /></span>
                            ))
                        }
                    </p>
                </div>
            </a>
        </Link>
    </div>
)

export default CreationComponent;
