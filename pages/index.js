/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { format as dateformat } from 'date-fns'
import styles from '../styles/Home.module.scss'

import CreationComponent from '../components/creationComponent.js';

import creationsYaml from '../data/creations.yaml'
import articlesYaml from '../data/articles.yaml'
import careersYaml from '../data/careers.yaml'
import creationfeaturesYaml from '../data/creationfeatures.yaml'

const Home = () => {
    const featureNames = Object.keys(creationfeaturesYaml);
    const creationFeatureFilterSet = new Set(featureNames.filter(feature => creationfeaturesYaml[feature]["filter-default"]));

    const doesFilterHas = (featureSet, filter) => filter.size === 0 || [...filter].every(feature => featureSet.has(feature));

    const creationFeatureFilterChange = (event) => {
        event.currentTarget.parentElement.classList.toggle(styles.selected, event.currentTarget.checked);
        if (event.currentTarget.checked)
            creationFeatureFilterSet.add(event.currentTarget.dataset.feature);
        else
            creationFeatureFilterSet.delete(event.currentTarget.dataset.feature);
        
        let matchCount = 0;
        document.querySelectorAll(`.${styles.creationComponents}`).forEach(creationComponent => // we don't use reduce here because it is undefined in NodeList
            matchCount += creationComponent.classList.toggle(
                styles.visible,
                doesFilterHas(new Set(creationComponent.dataset.features.split(",")), creationFeatureFilterSet)
            )
        );

        document.querySelector(`.${styles.noCreationsMatch}`).classList.toggle(styles.visible, matchCount === 0);
        console.log(creationFeatureFilterSet, matchCount);
    }

    const caluclateAge = (birthday) => {
        const today = new Date();
        const birthDate = new Date(birthday);
        return today.getFullYear() - birthDate.getFullYear() - (today.getMonth() < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    }

    if (typeof window !== 'undefined') {
        let background = document.querySelector('.background');
        window.addEventListener("scroll", () => {
            // document.body.style.setProperty("--scroll-y", `${window.scrollY * -0.1}px`);
            background.style.backgroundPositionY = `${window.scrollY * -0.2}px`;
        });
    }

    return (
        <div>
            <Head>
                <title>MugiSus.com</title>
                <meta name="description" content="国立木更津工業高等専門学校 情報工学科 の MugiSus です。これは むぎすす と発音し、麦煤 と書くこともあります。" />
            </Head>
            
            <main className={styles.main}>
                <div className={styles.sections} id="creations">
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>MugiSus&apos; Creations</h1>
                        <h2 className={styles.subtitle}>Artworks & Products</h2>
                    </div>
                    
                    <div className={styles.creationsFeatureFiltersContainer}>
                        {
                            featureNames.map(feature => (
                                <label key={feature} className={`${styles.creationsFeatureFilter} ${creationFeatureFilterSet.has(feature) ? styles.selected : ""}`}>
                                    <input type="checkbox" className={`creation`} defaultChecked={creationFeatureFilterSet.has(feature)} data-feature={feature} onChange={creationFeatureFilterChange} />
                                    <div className={`material-icons-outlined ${styles.creationsFeatureFilterIcon}`}>{creationfeaturesYaml[feature].icon}</div>
                                    <div className={styles.creationsFeatureFilterDescription}>{creationfeaturesYaml[feature].description}</div>
                                </label>
                            ))
                        }
                    </div>
                    
                    <ul className={styles.creationUl}>
                        {
                            creationsYaml.sort((a, b) => b.date.getTime() - a.date.getTime()).map((creation, index) => (
                                <article key={index} className={`${styles.creationComponents} ${doesFilterHas(new Set(creation.features), creationFeatureFilterSet) ? styles.visible : ""}`} data-features={creation.features}>
                                    <CreationComponent {...creation} />
                                </article>
                            ))
                        }
                        <div className={styles.noCreationsMatch}>
                            <span className={`material-icons-outlined ${styles.noCreationsMatchIcon}`}>filter_alt</span>
                            <span className={styles.noCreationsMatchText}>No Creations Match Your Filter (!)</span>
                        </div>
                    </ul>
                </div>
                
                <div className={styles.sections} id="articles">
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Articles</h1>
                        <h2 className={styles.subtitle}>Coming soon, i bet</h2>
                    </div>

                    <p className={styles.text}>
                        工事中です。<br />
                        今並んでるのは一時的なものです。近いうちに本当に記事が並ぶと思います。<br />
                        今はクリックしても Google とかに飛ぶだけです。
                    </p>

                    <ul className={styles.articlesUl}>
                        {
                            articlesYaml.sort((a, b) => b.date.getTime() - a.date.getTime()).map((article, index) => (
                                <article key={index}>
                                    <Link href={article.url}>
                                        <a>
                                            <div>
                                                <time>{dateformat(article.date, 'yyyy.MM.dd')}</time><br />
                                                <span>{article.title}</span>
                                            </div>
                                            <span className={`material-icons-outlined ${styles.articleIcon}`}>arrow_forward</span>
                                        </a>
                                    </Link>
                                </article>
                            ))
                        }
                    </ul>
                </div>

                <div className={styles.sections} id="mugisus">
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>MugiSus</h1>
                        <h2 className={styles.subtitle}>Minato Masayuki</h2>
                    </div>

                    <p className={styles.text}>
                        国立木更津工業高等専門学校 情報工学科 の {caluclateAge("2003/05/05")} 歳です。<br />
                        現在は休学中で、近日中に進学も検討しています。<br />
                        ハンドルネームは MugiSus で これは むぎすす と発音し、麦煤 と書くこともあります。<br />
                        正規表現は<code>/MugiSus|むぎ(すす)?|麦煤?/gi</code>です。<br />
                    </p>

                    <div className={styles.oyagiIconContainer}>
                        <div className={styles.oyagiIconBorder}>
                            <img src="/oyagi-icon.png" alt="MugiSus" height="192" width="192" className={styles.oyagiIcon} />
                        </div>
                    </div>

                    <p className={styles.text}>
                        言語は主に JavaScript (HTML+CSS, Next.js) C# (Unity) がつかえます。 <br />
                        フロントエンドがすきで、Web制作を始めゲーム制作にも注力しています。<br />
                        使用しているエディタは VSCode で、インデントはスペース4つです。
                    </p>
                    <p className={styles.text}>
                        2021年度 <Link href="https://jr.mitou.org">U-17未踏ジュニア</Link> に「<Link href="https://jr.mitou.org/projects/2021/telport">TELPort/テルポート</Link>」で採択されました。<br />
                        同年未踏ジュニアスーパークリエータ認定を受けています。
                    </p>
                    <p className={styles.text}>
                        デザインとお絵描きがそれぞれ少しずつできます。
                    </p>
                </div>

                <div className={styles.sections} id="careers">
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Careers</h1>
                        <h2 className={styles.subtitle}>More about me</h2>
                    </div>

                    <ul className={styles.careersUl}>
                        {
                            [...careersYaml.sort((a, b) => a.date.getTime() - b.date.getTime()), {date: Date.now(), content:"いま"}].map((career, index) => (
                                <li key={index}>
                                    <time>{dateformat(career.date, 'yyyy.MM.dd')}</time>
                                    <span>{career.content}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default Home;
