import{useState} from "react"

const App = () => {
  console.log('Compound Rerendering');

  const [countNumber,setCountNumber]=useState(0)
  const handleClick=()=>{
       setCountNumber(countNumber+1)
  }
  const handleDec=()=>{
    setCountNumber(countNumber-1)
  }
  const handleReset=()=>{
    setCountNumber(0)
  }
  return (
    <>
    <div>
    <h1>{countNumber}</h1>
    <button onClick={handleClick}>Count(++)</button>
    <button onClick={handleDec}>Count(--)</button>
    <button onClick={handleReset}>Reset</button>
    </div>
    </>
   
  )
}

export default App