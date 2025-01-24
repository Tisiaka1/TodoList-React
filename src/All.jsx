import React from 'react'

const All = ({Message,value,color,setTextArr}) => {
// could i cook with .filter method??

const remove = (DeleteID)=>{

const Deleted = Message.filter((message)=>
message.ID !==DeleteID

)

setTextArr(Deleted)

console.log('Onclick is working')
}
  return (
    <div>

      
      <ul  className='AllDiv' style={{backgroundColor:color}}>

   
        {Message.map((element)=>



       
        <li key={element.ID}>  
        <div className='List'>

          
          {/* i have no idea if this is pratical lmao */}
        <span id="span" onClick={()=>remove(element.ID)} ></span>
       
       <p>{element.Text}</p> 
        </div>
        
        
        
        
        </li>
        
        )}


      </ul>


    </div>
  )
}

export default All