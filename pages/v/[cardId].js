/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Redirector() {
    const router = useRouter();
    const { cardId } = router.query;
    
    useEffect(() => {
        router.push(`../v-card/${cardId ?? ''}`);
    }, [router.isReady]);
        
    return null;
}