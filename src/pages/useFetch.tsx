import axios from 'axios';
import { useState, useEffect } from 'react';
import { Blog } from '../models/models';

interface props {
    baseURL: String;
}

const useFetch = ({baseURL}: props) => {
  const [data, setData] = useState(null);
  const [blogs, setBlogs] = useState<Array<Blog>>([]);
  const [mostReadBlogs, setMostReadBlogs] = useState<Array<Blog>>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //get movies
    axios.get(`${baseURL}mostReadBlogs`).then((response) => {
      setBlogs(response.data);
    });
  }, []);
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(baseURL, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [baseURL])

  return { data, isPending, error };
}
 
export default useFetch;