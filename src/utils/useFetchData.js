import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const result = await fetch(url)
        setData(result.data)
      }
      catch(e) {
        setIsError(true)
      }
      
    }

    fetchData()

    return [{ data, isLoading, isError }, fetchData]

  }, [])

}

export default useFetchData;