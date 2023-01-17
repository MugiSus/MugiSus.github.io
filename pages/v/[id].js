/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Redirector() {
    const router = useRouter();
    const { id } = router.query;
    
    useEffect(() => {
        console.log(id);
        if (id) 
            router.push(`../v-card?id=${id}`);
    }, [router.isReady]);
        
    return null;
}