
import axios from 'axios';
import * as qs from 'qs';
import { useEffect, useState } from 'react';



export default function useStrapi(path, query) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const BEARER_TOKEN = "d80c823e80d96daaa72536a0100011ae63a422f962de313679f33edf591e95252148620c8a4836c98fe9d85e958e97b2fdd577549c9b022c779e8d8f3773891f9f2fca0b1ed4b3a753da9612911e12e658c782898c08e89050bfd8640f13f207373585c26cf541d449c0578513b6c259deec3abb36cf5cfbe9887db156c852c7"
  
  const searchQuery = qs.stringify(query
    ,
    { encode: false } // Prevents URL encoding for better compatibility with Strapi
  );

  useEffect(() => {
    const getStrapiData = async () => {
      const baseUrl = 'https://blm-cms.appii.space';
      const url = new URL(path, baseUrl);
      url.search = searchQuery;

      try {
        const res = await axios.get(url.href,{
          headers: {
              'Authorization': `Bearer ${BEARER_TOKEN}`
          }
      });
        setData(res.data);
        setError(null);
      } catch (err) {
        console.error({ error: err });
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getStrapiData();
  }, [path]); // Dependency array to re-run if `path` changes

  return { data, error, loading };
}
