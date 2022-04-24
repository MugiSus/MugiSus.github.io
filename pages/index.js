import Head from 'next/head'
import Link from 'next/link'
import { format as dateformat } from 'date-fns'
import styles from '../styles/Home.module.scss'

import CreationComponent from '../components/creationComponent.js';

import creationsYaml from '../data/creations.yaml'
import articlesYaml from '../data/articles.yaml'
import careersYaml from '../data/careers.yaml'

let creationFeatureFilter = [
    "pickup",
    // "responsive",
]

const caluclateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    return today.getFullYear() - birthDate.getFullYear() - (today.getMonth() < birthDate.getMonth() || today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
}

const Home = () => (
    <div>
        <Head>
            <title>MugiSus.com</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="The Portfolio of MugiSus" />
        </Head>

        <main className={styles.main}>
            <div className={styles.sections} id="creations">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>MugiSus&apos;s Creations</h1>
                    <h2 className={styles.subtitle}>Artworks & Products</h2>
                </div>

                <ul className={styles.creationUl}>
                    {
                        creationsYaml.filter(creation => creationFeatureFilter.some(feature => creation.features.includes(feature))).sort((a, b) => b.date.getTime() - a.date.getTime()).map((creation, index) => (
                            <article key={index}>   
                                <CreationComponent {...creation} />
                            </article>
                        ))
                    }
                </ul>
            </div>
            
            <div className={styles.sections} id="articles">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Articles</h1>
                    <h2 className={styles.subtitle}>Coming soon, i bet</h2>
                </div>

                <p className={styles.text}>
                    記事リンクを登録するのがめんどくさくて手をつけていません。<br />
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
                    ハンドルネームは MugiSus で これは むぎすす と発音します。麦煤 と書くこともあります。<br />
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
                        careersYaml.sort((a, b) => a.date.getTime() - b.date.getTime()).map((career, index) => (
                            <article key={index}>
                                <time>{dateformat(career.date, 'yyyy.MM.dd')}</time>
                                <span>{career.content}</span>
                            </article>
                        ))
                    }
                </ul>
            </div>
        </main>
    </div>
)

export default Home;
