import { useRouter } from 'next/router'

export default function IRedirector() {
    const router = useRouter();

    if (typeof window === 'undefined') {
        return null;
    }
    
    router.push('https://virtualcard-mugisus.vercel.app');
    return null;
}