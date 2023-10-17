 
 
import { useEffect, useState } from 'react'
import './App.css'
 

function App() {
  

  return (
    <>
    <Counter></Counter>
    <Userinfo></Userinfo>
        
       
    </>
  
      
  )
}
function Userinfo(){
  const [users,setUsers] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users ')
    .then(res => res.json())
    .then(data => {
      console.log(data);
     

      setUsers(data)
    })

  },[])


  return <>
   <div class="bg-orange-400 text-yellow-50">
   <h1 class="text-5xl  p-8">Load All user info</h1> 
  <h1 class="text-3xl py-4  ">legend:{users.length}</h1> 
   </div>

   <div class="bg-orange-400    text-white text-2xl grid grid-cols-3">
 
  {
    users.map(user => <SingleUserInfo  user={user} ></SingleUserInfo>)
  }
 
 

   </div>

 
   
   
   
  </>
}
function SingleUserInfo (props){
  

  return <>
  <div class="  m-4 p-4 rounded text-center  bg-lime-800">
    <h2>Name:{props.user.name}</h2>
    <h2>Email:{props.user.email}</h2>
    <h2>Phone:{props.user.phone}</h2>
    <h2>Username:{props.user.username}</h2>
    <h2>id:{props.user.id}</h2>
    <h2>website:{props.user.website}</h2>
 
   
    
 
  </div>
  </>
}







function Counter (){
  const [count,setCount] = useState(0);
  function countIncemrnt(){
     const displayCount = count +1;
     setCount(displayCount)
  }
  function countDecment (){
   
        setCount(count -1)
    }
     
   


  return  (
    <div class="bg-fuchsia-700 text-white">
      <h1 class="text-4xl">Counter : {count}</h1>
      <button class="m-8 p-4 shadow-lime-700 bg-red-400 rounded" onClick={countIncemrnt}>Incement</button>
      <button class="m-8 p-4 bg-lime-800 rounded" onClick={countDecment}>Decement</button>
    </div>
  )
}

export default App
