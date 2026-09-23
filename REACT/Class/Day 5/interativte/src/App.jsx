

const App = () => {
  const student=[
    {Name:"Raji",Age:20,Email:"raji@13"},
    {Name:"Ram",Age:28,Email:"ram@42"},
    {Name:"Raji",Age:20,Email:"raji@13"},
    {Name:"Ram",Age:28,Email:"ram@42"},
    {Name:"Raji",Age:20,Email:"raji@13"},
    {Name:"Ram",Age:28,Email:"ram@42"},
    {Name:"Raji",Age:20,Email:"raji@13"},
    {Name:"Ram",Age:28,Email:"ram@42"},
    {Name:"Raji",Age:20,Email:"raji@13"},
   
    
    
  ]
  return (
    <>
    <div className="bg-purple-400 flex justify-between items-center p-5 gap-7 flex-wrap ">
    {student.map((e,i)=>(
      <div key={i} className="bg-white p-5 w-80 h-40 rounded-3xl">
      <h2>{e.Name}</h2>
      <p>{e.Age}</p>
      <p>{e.Email}</p>
       <button className="bg-red-400 text-black p-1 w-50 text-center rounded-2xl">Click </button>
      
        </div>
          ))}
          </div>
    </>
  )
}

export default App