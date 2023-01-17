/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react';

function Redirector() {
    const router = useRouter();
    const { id } = router.query;
    
    useEffect(() => {
        console.log(id);
        if (id) router.push(`../v-card?id=${id}`);
    }, [router.isReady]);
        
    return null;
}

// add getInitialProps to v/[id].js
Redirector.getInitialProps = async () => {
    return {};
}

export default Redirector;