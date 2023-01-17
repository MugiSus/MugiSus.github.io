/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Redirector() {
    const router = useRouter();
    
    useEffect(() => {
        const cardId = Object.keys(router.query)?.[0];
        if (cardId) router.push(`../v-card?${cardId}`);
    }, [router.isReady]);
    
    return null;
}