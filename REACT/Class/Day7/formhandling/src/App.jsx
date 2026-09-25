

const App = () => {
  const handleChange=(e)=>{
    const [nameuser,setNameUser]=useState("")
      const [ageUser,setAgeUser]=useState("")
  }
  const handleAge=(e)=>{

  }
  return (
    <>
    <div>
      <input  type="text" onChange={handlChange} placeholder="enter the Name"/>
      <input age="numbeer" onChnage={handleAge} placeholder="enter the Age"/>
      <button>Click Me</>
    </div>
    </>
  )
}

export default App