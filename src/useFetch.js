import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { error, isPending, data }
}

export default useFetch;