import React,{useState} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'


const Registration=()=>{

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        place:""
    })

    const handleChange= e =>{
        const{name,value} = e.target

        setUser({
            ...user,[name]:value
        })



    }
    const registerData= () =>{
        const{name,email,password,place} =user
        if(name && email && password && place){

        axios.post("http://localhost:9002/register" ,user)
        .then(res =>console.log)


        }else{
            alert("invalid input")
        }

    }



  return (
    <div className="center">
        {console.log("user",user)}
            <h1>Register</h1>
        <form  method="post">
            <div className="txt_field">
                <input type="text" name='name' value={user.name} onChange={handleChange}  required/>
                <span></span>
                <label>Name</label>
            </div>
          <div className="txt_field">
            <input type="email" name='email' value={user.email}  onChange={handleChange} required/>
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" name='password' value={user.password}  onChange={handleChange} required/>
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
                <input type="text" name='place' value={user.place}  onChange={handleChange} required/>
                <span></span>
                <label>Place</label>
            </div>
         
          <div className="signup_link">
         <Link  to='/login'> <button  onClick={registerData}  className='btn btn-info rounded my-2 btn-sm'> submit</button></Link>
          <button className='btn btn-info rounded my-2 btn-sm float-left ms-5'>clear </button>
<h1>hi</h1>
          </div>
        </form>
      </div>
      
  
   
  )
}

export default Registration