import './AddFilm.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddFilm({add}){
    
   const [test, setTest] = useState(false);
    const myfunction=()=>{  setTest(!test) }
    const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
   const [description, setDiscription] = useState('');
   const [rate, setRate] = useState();
   const [imgUrl, setImgUrl] = useState('');
   const [category, setCategory] = useState('');
 
  
   
   const film={title,description,date,rate,imgUrl,category,id:uuidv4()}

return(
   
<>

<button onClick={()=>myfunction()}  >+</button>
 
<div style={{display:test?'flex':'none'}}  className="input">
Movie Title:
<input placeholder="title here" onChange={(e)=>{setTitle(e.target.value)}} value={title}  type="text" id="fname" name="fname" />
Date:
<input placeholder="Date here" onChange={(e)=>{setDate(e.target.value)}} value={date}  type="text" id="fname" name="fname" />
Rate( 1To 5)
<input placeholder="Rate here" onChange={(e)=>{setRate(e.target.value)}} value={rate}  type="text" id="fname" name="fname" />
Movie Discription:
<input placeholder="Discription here" onChange={(e)=>{setDiscription(e.target.value)}} value={description}  type="text" id="fname" name="fname" />
Url Image:
<input placeholder="Image here" onChange={(e)=>{setImgUrl(e.target.value)}} value={imgUrl}  type="text" id="fname" name="fname" />
category:
<div style={{display :'flex'}}>
action:  <input type="checkbox" onChange={(e)=>{setCategory(e.target.value)}} value='action'/>
drama:  <input type="checkbox" onChange={(e)=>{setCategory(e.target.value)}} value='drama'/>
Biography:  <input type="checkbox" onChange={(e)=>{setCategory(e.target.value)}} value='Biography'/>
</div>
<br/>
<button  onClick={()=>add(film)} >add</button>
</div>
{console.log('hi',typeof add)}
</>

)
}
export default AddFilm