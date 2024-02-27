// eslint-disable-next-line no-unused-vars
import React from 'react'
import axios from 'axios'
import './AdminSignup.css'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
  <div className='karadi'>
    <div className="over1">
        <div className="background0">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        {/* <form className='frm' onSubmit={handleSubmit}> */}
        <form className='fr'>
            <h3 className="htag1"><b>Admin Signup</b></h3>
{/*            
            <div className='rl1'>
              <label>Choose your Role:</label>
              <input className="radioa1" 
              type="radio" 
              value="Admin"
              name="role"
            
              id="adminRadio" required/>
              <label>ADMIN</label>
              <input className="radiou1" 
              type="radio" 
              name="role" 
              value="User"
            
              id="userRadio" required/>
              <label>USER</label>
            </div><br></br> */}


            <label className='lab1'>Username</label>
            <input className="ins" 
            type="text" 
           
            name="username"
         
            placeholder="Enter your Username" 
            id="username" required/>

            <label className="lab1">Password</label>
            <input className="ins" 
            type="password" 
           
          name="password" 
     
            placeholder="Enter your Password" 
            id="password" required/>

            <label className="lab1">Confirm Password</label>
            <input className="ins" 
            type="password" 
           
          name="password" 
     
            placeholder="Enter your Password" 
            id="password" required/>

            {/* <center><button onSubmit={(e) => handleSubmit(e) } className='but'>Login</button></center> */}
            <Link to="/AdminLogin"><center><button className='bu'>Signup</button></center></Link>
            <br></br>
            
            
            {/* <h4> have an Account? <div className='reg'>Signup</div></h4> */}
        </form>
    </div>
    </div>
  );
  };


export default SignUp;