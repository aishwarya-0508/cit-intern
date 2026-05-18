import React,{ useState,useEffect} from 'react'

const useEffectExam = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect called')
    }, [count])
  return (
<>
<h1>
    Count:</h1></>  )
}

export default useEffectExam