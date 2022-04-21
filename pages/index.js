import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import articlesYML from '../data/articles.yml'

const Home = () => (
    <div>
        <Head>
            <title>MugiSus.com</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="The Portfolio of MugiSus" />
        </Head>

        <main className={styles.main}>
            <div className={styles.sections}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>MugiSus</h1>
                    <h2 className={styles.subtitle}>Minato Masayuki</h2>
                </div>

                <p className={styles.text}>
                    国立木更津工業高等専門学校 情報工学科 の 18 歳です。<br />
                    ハンドルネームは MugiSus で これは むぎすす と発音します。<br />
                    漢字だと 麦煤 と書くことがあります。<br />
                    正規表現は<code className={styles.code}>/MugiSus|むぎ(すす)?|麦煤?/gi</code>です。<br />
                </p>
                <p className={styles.text}>
                    言語は主に JavaScript (HTML+CSS, Next.js) C# (Unity) がつかえます。 <br />
                    フロントエンドがすきで、Web制作を始めゲーム制作にも注力しています。<br />
                    使用しているエディタは VSCode で、インデントはスペース4つです。
                </p>
                <p className={styles.text}>
                    2021年度 U-17未踏ジュニア に「TELPort/テルポート」で採択されました。<br />
                    同年未踏ジュニアスーパークリエータ認定を受けています。
                </p>
                <p className={styles.text}>
                    イイ感じのデザインとお絵描きがそれぞれ少しずつできます。
                </p>

                <div className={styles.oyagiIconContainer}>
                    <div className={styles.oyagiIconBorder}>
                        <Image src="/../public/oyagi-icon.png" alt="MugiSus" height={192} width={192} className={styles.oyagiIcon} />
                    </div>
                </div>
            </div>

            <div className={styles.sections}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Creations</h1>
                    <h2 className={styles.subtitle}>Artworks & Production</h2>
                </div>

                <p className={styles.text}>
                    私がつくりました。<br />
                </p>
            </div>
            
            <div className={styles.sections}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Articles</h1>
                    <h2 className={styles.subtitle}>Coming soon, i bet</h2>
                </div>

                <ul className={styles.articlesUl}>
                    {
                        articlesYML.map(article => (
                            <a href={article.url}>
                                <li>
                                    <span>
                                        <span className={styles.articleDate}>{article.date}</span><br />
                                        <span>{article.title}</span>
                                    </span>
                                    <span className={`material-icons-outlined ${styles.articleIcon}`}>arrow_forward</span>
                                </li>
                            </a>
                        ))
                    }
                </ul>
            </div>

            <div className={styles.sections}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Careers</h1>
                    <h2 className={styles.subtitle}>More about me</h2>
                </div>

                <ul className={styles.careerUl}>
                    <li>
                        <time>2003.05.05</time>
                        <span>うまれる</span>
                    </li>
                    <li>
                        <time>2008.04.29</time>
                        <span>そだつ</span>
                    </li>
                    <li>
                        <time>2022.04.22</time>
                        <span>いま</span>
                    </li>
                </ul>
            </div>
        </main>
    </div>
)

export default Home;
