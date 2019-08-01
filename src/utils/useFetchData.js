import { useState, useEffect, useCallback } from 'react'

const useFetchData = url => {
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
  // Using useCallback to avoid effect hook exhaustive-deps
  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const result = await response.json()

      setIsLoading(false)
      setData(result)
    } catch (e) {
      setIsLoading(false)
      setIsError(true)
    }
  },[url])

  
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [{ data, isLoading, isError }, fetchData]
}

export default useFetchData
