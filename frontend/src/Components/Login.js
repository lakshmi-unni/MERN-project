import React,{useState} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'



const Login = ()=> {

    const [user,setUser] = useState({
        
        email:"",
        password:""
        
    })

    const handleChange= e =>{
        const{name,value} = e.target

        setUser({
            ...user,[name]:value
        })
    }

    const LoginData=() =>{
        axios.post("http://localhost:9002/login" ,user)
        .then(res=> alert(res.data.message))
        


    }

  return (
    <div className="center">
       { console.log(user)}
    <h1>Login</h1>
<form  method="post">
    
  <div class="txt_field">
    <input type="email"  name='email' value={user.email}  onChange={handleChange}required/>
    <span></span>
    <label>Email</label>
  </div>
  <div class="txt_field">
    <input type="password" name='password' value={user.password}  onChange={handleChange} required/>
    <span></span>
    <label>Password</label>
  </div>
  
  <div class="signup_link">
  <Link  to='/addproduct'><button  onClick={LoginData} className='btn btn-info rounded my-2 btn-sm'>submit</button></Link>
  <Link  to='/'><button className='btn btn-info rounded my-2 btn-sm float-left ms-5'>Registration</button></Link>

  </div>
</form>
</div>
  )
}

export default Login