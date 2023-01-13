/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { format as dateformat } from 'date-fns'
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';

import CreationComponent from '../components/creationComponent.js';

import creationsYaml from '../data/creations.yaml'
import articlesYaml from '../data/articles.yaml'
import careersYaml from '../data/careers.yaml'
import creationfeaturesYaml from '../data/creationfeatures.yaml'

const featureNames = Object.keys(creationfeaturesYaml);
// const selectedFeatures = new Set(featureNames.filter(feature => creationfeaturesYaml[feature]["filter-default"]));

const doesFilterHas = (featureSet, filterSet) => [...filterSet].every(feature => featureSet.has(feature));
const caluclateAge = (birthday) => new Date(Date.now() - new Date(birthday)).getUTCFullYear() - 1970;

const Home = () => {
	const [selectedFeatures, setSelectedFeatures] = useState(
		new Set(featureNames.filter(feature => creationfeaturesYaml[feature]["filter-default"]))
	);
	const [filteredCreations, setFilteredCreations] = useState(
		creationsYaml.filter(creation => 
			doesFilterHas(new Set(creation.features), selectedFeatures)
		).sort((a, b) => b.date - a.date)
	);
	
	const creationFeatureFilterChange = (event) => {
		const newSelectedFeatures = new Set(selectedFeatures);
		if (event.currentTarget.checked)
			newSelectedFeatures.add(event.currentTarget.dataset.feature);
		else
			newSelectedFeatures.delete(event.currentTarget.dataset.feature);
		
		const filteredResult = creationsYaml.filter(creation => 
			doesFilterHas(new Set(creation.features), newSelectedFeatures)
		).sort((a, b) => b.date - a.date);

		setFilteredCreations(filteredResult);
		setSelectedFeatures(newSelectedFeatures);
		
		console.log(newSelectedFeatures, filteredResult);
	}

	useEffect(() => {
		if (typeof window === 'undefined') return;

		let background = document.getElementsByClassName("background")[0];

		window.addEventListener("scroll", () => {
			background.style.backgroundPositionY = `${window.scrollY * -0.2}px`;
		});
	}, [])

	return (
		<div>
			<Head>
				<title>
					MugiSus.com
				</title>
				<meta
					name="description"
					content="MugiSus のポートフォリオです。いろいろつくります"
				/>
			</Head>
			
			<main className={styles.main}>
				<h1 style={{display: "none"}}>
					MugiSus.com
				</h1>

				<div className={styles.sections} id="creations">
					<div className={styles.titleContainer}>
						<h1 className={styles.title}>
							MugiSus&apos; Creations
						</h1>
						<h2 className={styles.subtitle}>
							Artworks & Products
						</h2>
					</div>
					
					<div className={styles.creationsFeatureFiltersContainer}>
						{
							featureNames.map(feature => (
								<label
									key={feature}
									className={`${styles.creationsFeatureFilter} ${selectedFeatures.has(feature) ? styles.selected : ""}`}
								>
									<input
										type="checkbox" 
										defaultChecked={selectedFeatures.has(feature)}
										data-feature={feature}
										onChange={creationFeatureFilterChange}
									/>
									<div className={`material-icons-outlined ${styles.creationsFeatureFilterIcon}`}>
										{creationfeaturesYaml[feature].icon}
									</div>
									<div className={styles.creationsFeatureFilterDescription}>
										{creationfeaturesYaml[feature].description}
									</div>
								</label>
							))
						}
					</div>
					
					<ul className={styles.creationUl}>
						{
							filteredCreations.length === 0 ? (
								<div className={styles.noCreationsMatch}>
									<span className={`material-icons-outlined ${styles.noCreationsMatchIcon}`}>
										filter_alt
									</span>
									<span className={styles.noCreationsMatchText}>
										No Creations Match Your Filter (!)
									</span>
								</div>
							) : (
								filteredCreations.map((creation, index) => (
									<article 
										key={index}
										className={styles.creationComponents}
									>
										<CreationComponent {...creation} />
									</article>
								))
							)
						}
					</ul>
				</div>
				
				<div className={styles.sections} id="articles">
					<div className={styles.titleContainer}>
						<h1 className={styles.title}>
							Articles
						</h1>
						<h2 className={styles.subtitle}>
							Coming soon, i bet
						</h2>
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
											<span className={`material-icons-outlined ${styles.articleIcon}`}>
												arrow_forward
											</span>
										</a>
									</Link>
								</article>
							))
						}
					</ul>
				</div>

				<div className={styles.sections} id="mugisus">
					<div className={styles.titleContainer}>
						<h1 className={styles.title}>
							MugiSus
						</h1>
						<h2 className={styles.subtitle}>
							Minato Masayuki
						</h2>
					</div>

					<p className={styles.text}>
						元高専生、現慶應義塾大学(SFC)環境情報学部 の {caluclateAge("2003/05/05")} 歳です。<br />
						ハンドルネームは MugiSus で これは むぎすす と発音し、麦煤 と書くこともあります。<br />
						正規表現は<code>/MugiSus|むぎ(すす)?|麦煤?/gi</code>です。<br />
					</p>

					<div className={styles.oyagiIconContainer}>
						<div className={styles.oyagiIconBorder}>
							<img
								className={styles.oyagiIcon}
								src="/oyagi-icon-gif.gif"
								alt="MugiSus"
								height="256"
								width="256"
							/>
						</div>
					</div>

					<p className={styles.text}>
						言語は主に JavaScript/TypeScript (HTML+CSS, Next.js) C# (Unity) がつかえます。 <br />
						フロントエンドがすきで、Web制作を始めゲーム制作にも注力しています。<br />
						使用しているエディタは VSCode で、インデントはスペース4つです。開き波括弧({'{'})は改行しません。
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
						<h1 className={styles.title}>
							Careers
						</h1>
						<h2 className={styles.subtitle}>
							More about me
						</h2>
					</div>

					<ul className={styles.careersUl}>
						{
							[
								...careersYaml.sort((a, b) => a.date.getTime() - b.date.getTime()),
								{date: Date.now(), content:"いま"}
							].map((career, index) => (
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
