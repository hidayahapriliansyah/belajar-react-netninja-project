import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(response => {
          if(!response.ok) {
            throw Error('Connected to resource but response not ok!');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if(err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 500);

    return () => abortCont.abort();
  }, [url]);

  return { error, isPending, data }
}

export default useFetch;