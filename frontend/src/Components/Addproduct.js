import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from '../axios';

function Addproduct() {
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[quantity,setQuantity] = useState("");
    const[catogory,setCatogory] = useState("");

    const addProduct =(e) =>{
        e.preventDefault()
  
    axios.post('/addproduct',{name,price,quantity,catogory})
    .then(()=>{
        setName('')
        setPrice(0)
        setQuantity(0)
        setCatogory('')
    })
    .catch((error) =>alert(error.message));
}









  return (
    <div className="center">
    <h1>Add product</h1>
<form  method="post">
    <div class="txt_field">
        <input type="text" name='name' onChange={(e) =>setName(e.target.value)} value={name} required  />
        <span></span>
        <label>Name</label>
    </div>
  <div class="txt_field">
    <input type="number" name='price' onChange={(e) =>setPrice(e.target.value)} value={price} required/>
    <span></span>
    <label>Price</label>
  </div>
  <div className="txt_field">
    <input type="number" name="quantity" onChange={(e) =>setQuantity(e.target.value)} value={quantity} required/>
    <span></span>
    <label>Quantity</label>
  </div>
  <div className="txt_field">
        <input type="text" name="catogory" onChange={(e) =>setCatogory(e.target.value)} value={catogory}  required/>
        <span></span>
        <label>Catogory</label>
    </div>
 
  <div className="signup_link">
  <Link  to='/listproduct'> <button onClick={addProduct}className='btn btn-info rounded my-2 btn-sm'> submit</button></Link>

  </div>
</form>
</div>
  )
}

export default Addproduct