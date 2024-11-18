import { useState } from 'react'

import './App.css'
import RevenueCard from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <div style={{display:"flex", justifyContent:"space-around"}}>
        <div style={{backgroundColor:'red'}} >hi</div>
        <div style={{backgroundColor:'green'}}>hi</div>
        <div style={{backgroundColor:"yellow"}}>hi</div>
       </div> */}

       {/* <div className='grid grid-cols-1 md:grid-cols-3 '>
       <div className="bg-red-600" >hi</div>
        <div  className="bg-green-500">hi</div>
        <div  className="bg-yellow-500">hi</div>
       </div> */}
       
       <div className='grid grid-cols-3'>
       <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} showWorning={true}/>
       </div>
       
     </>
  )
}

export default App
