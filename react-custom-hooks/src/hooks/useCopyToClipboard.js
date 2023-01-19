import { useEffect, useState } from "react"

const useCopyToClipboard = (duration) => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = (value) => {
        if(typeof value === 'number' || typeof value === 'string') {
            navigator.clipboard.writeText(value);
            setIsCopied(true);
        } else {
            console.error('Type of value is incompatible');
            setIsCopied(false);
        }
    }

    useEffect(() => {
        let timeout;
        if(isCopied && duration) {
            timeout = setTimeout(() => setIsCopied(false), duration);
        }
        return () => clearTimeout(timeout);
    }, [isCopied, duration])

    return {isCopied, copy};
}

export default useCopyToClipboard;