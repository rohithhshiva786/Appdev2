// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
  <div className='karadi'>
    <div className="over">
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        {/* <form className='frm' onSubmit={handleSubmit}> */}
        <form className='frm'>
            <h3 className="htag"><b>Login</b></h3>
           
            {/* <div className='rl'>
              <label>Choose your Role:</label>
              <input className="radioa" 
              type="radio" 
              value="Admin"
              name="role"
            
              id="adminRadio" required/>
              <label>ADMIN</label>
              <input className="radiou" 
              type="radio" 
              name="role" 
              value="User"
            
              id="userRadio" required/>
              <label>USER</label>
            </div><br></br> */}


            <label className='lab'>Username</label>
            <input className="in" 
            type="text" 
           
            name="username"
         
            placeholder="Enter your Username" 
            id="username" required/>

            <label className="lab">Password</label>
            <input className="in" 
            type="password" 
           
          name="password" 
     
            placeholder="Enter your Password" 
            id="password" required/>

            {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
          <Link to="/home">  <center><button className='but'>Login</button></center></Link>
            <br></br>
            
            
            <Link to="signup">  <h4> have an Account? <div className='reg'>Signup</div></h4></Link>
        </form>
    </div>
    </div>
  );
  };


export default Login;