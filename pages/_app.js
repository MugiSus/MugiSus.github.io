// import Head from 'next/head'
import Head from 'next/head'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import '../styles/globals.scss'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);

	return (
		<>
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
            {/* <Footer /> */}
            <div
                className="main-container"
                onScroll={(event) => setBackgroundPositionY(event.currentTarget.scrollTop * -0.2)}
            >
                <div id="top" />
                <Header />
                <Component {...pageProps} />
                <div
                    className="background"
                    style={{
                        backgroundPositionY: backgroundPositionY,
                    }}
                >
                    &nbsp;
                </div>
            </div>
		</>
	)
}

export default MyApp
