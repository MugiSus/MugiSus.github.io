// import Head from 'next/head'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            <Header />
			<Component {...pageProps} />
            <Footer />
            <div className="background">&nbsp;</div>
		</div>
	)
}

export default MyApp
