"use client"
import axios from 'axios';
import React, { useState } from 'react'

function MongoDb({params}) {
    const [groId, setGroId] = useState(params.id);
    const [item, setItem] = useState("");
    const [category, setCategory]=useState()
    const [unit, setUnit]=useState()

    useEffect(() => {
   const getGroData=async()=>{
    await axios.post("/api/dbdata", {groId}).then(res=>{
        console.log(res.data)

        setItem(res.data.item);
        setCategory(res.data.category);
        setUnit(res.data.unit)
    })
   }  
   getGroData();
     
     
    }, [params.id])
    
    
  return (
    <div>
<p>Item: {item}</p>
<p>category: {category}</p>
<p>unit: {unit}</p>

    </div>
  )
}

export default MongoDb