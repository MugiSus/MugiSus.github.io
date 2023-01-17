import { useRouter } from 'next/router'

export default function Redirector() {
    const router = useRouter();

    if (typeof window === 'undefined') {
        return null;
    }
    
    const { cardId } = router.query;
    router.push(`../v-card/${cardId ?? ''}`);
    
    return null;
}
