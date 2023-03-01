// import Head from 'next/head'
import Head from 'next/head'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import '../styles/globals.scss'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const background = document.querySelector(".background");

		background.parentElement.addEventListener("scroll", (event) => {
			background.style.backgroundPositionY = `${event.currentTarget.scrollTop * -0.25}px`;
		});
	}, [])

	return (
		<div>
            <Head>
                <meta property="og:title" content="MugiSus.com" />
                <meta property="og:description" content="The Portfolio of MugiSus" />
                <meta property="og:image" content="/oyagi-icon.png" />
                <meta property="og:url" content="https://mugisus.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@MugiSus" />
                <meta name="twitter:creator" content="@MugiSus" />
                <meta name="twitter:title" content="MugiSus.com" />
                <meta name="twitter:description" content="The Portfolio of MugiSus" />
                <meta name="twitter:image" content="https://www.mugisus.com/oyagi-icon.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="main-container">
                <div id="top" />
                <Component {...pageProps} />
                {/* <Footer /> */}
                <div className="background">&nbsp;</div>
            </div>
		</div>
	)
}

export default MyApp
