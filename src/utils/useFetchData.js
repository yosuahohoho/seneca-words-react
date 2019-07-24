import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()
      
      setIsLoading(false)
      setData(result)
    }
    catch(e) {
      setIsLoading(false)
      setIsError(true)
    }
  }
  
  // eslint-disable-next-line
  useEffect(() => {
    fetchData()
  }, [])

  return [{ data, isLoading, isError }, fetchData]

}

export default useFetchData;