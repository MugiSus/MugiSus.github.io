/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import styles from '../styles/VirtualCardIframe.module.scss'

export default function VirtualCardIframe() {
    const router = useRouter();
    
    // useEffect(() => {
    //     const cardId = Object.keys(router.query)?.[0];
    //     if (cardId) router.push(`../v-card/?id=${cardId}`);
    // }, [router.isReady]);
    
    return (
        <iframe src="https://www.mugisus.com/v-card?id=22aq&embed=true" className={styles.frame} />
    );
}