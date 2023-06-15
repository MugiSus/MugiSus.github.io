/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import styles from '../styles/VirtualCardIframe.module.scss'

export default function VirtualCardIframe() {
    const router = useRouter();

    const cardId = Object.keys(router.query)?.[0] ?? "none";
    console.log(cardId)
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Virtual Card</title>
            </Head>
            <iframe
                src={`https://v-card-gilt.vercel.app/?id=${cardId}&embed=true`}
                className={styles.frame}
            />
        </div>
    );
}