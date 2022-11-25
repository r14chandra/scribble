import { useState, useEffect } from "react";

const useFetch = (url) => {
    // using array destructuring two values (initial value and callback function) that this hook returns
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for the resource');
                }
                return res.json();
            }) 
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name !== 'AbortError')
                    setError(err.message);
                    setIsLoading(false);
            })
        }, 1000);

        return () => abortController.abort();
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;