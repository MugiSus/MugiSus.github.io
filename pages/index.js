import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<div>
			<Head>
				<title>MugiSus.com</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="The Portfolio of MugiSus" />
			</Head>

			<main className={styles.main}>
				<div className={styles.sections}>
					<h1 className={styles.title}>MugiSus</h1>
					<h2 className={styles.subtitle}>Minato Masayuki</h2>

					<p className={styles.text}>
						国立木更津工業高等専門学校 情報工学科 の 18 歳です。<br />
						ハンドルネームは MugiSus で これは むぎすす と発音します。<br />
						漢字だと 麦煤 と書くことがあります。<br />
						正規表現は<code className={styles.code}>/MugiSus|むぎ(すす)?|麦煤?/gi</code>です。
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
					<h1 className={styles.title}>Creations</h1>
					<h2 className={styles.subtitle}>Artworks & Production</h2>

					<p className={styles.text}>
						私がつくりました。<br />
					</p>
				</div>
			</main>
		</div>
	)
}
