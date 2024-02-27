// eslint-disable-next-line no-unused-vars
// import React from 'react'
// import './Signup.css'
// import {Link} from 'react-router-dom'

// const SignUp = () => {
  
//   return (
//   <div className='karadi'>
//     <div className="over1">
//         <div className="background0">
//             <div className="shape"></div>
//             <div className="shape"></div>
//         </div>
        
        
//         <form className='fr'>
//             <h3 className="htag1"><b>Signup</b></h3>
           
            


//             <label className='lab1'>Username</label>
//             <input className="ins" 
//             type="text" 
           
//             name="username"
         
//             placeholder="Enter your Username" 
//             id="username" required/>

//             <label className="lab1">Password</label>
//             <input className="ins" 
//             type="password" 
           
//           name="password" 
     
//             placeholder="Enter your Password" 
//             id="password" required/>

//             <label className="lab1">Confirm Password</label>
//             <input className="ins" 
//             type="password" 
           
//           name="password" 
     
//             placeholder="Enter your Password" 
//             id="password" required/>

            
//             <Link to="/adminhome"><center><button className='bu'>Signup</button></center></Link>
//             <br></br>
            
            
            
//         </form>
//     </div>
//     </div>
//   );
//   };


// export default SignUp;




// import  { useState } from 'react';
// import './Signup.css';
// // import { Link } from 'react-router-dom';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }

//     try {
//       // Make HTTP request to your server
//       const response = await axios.post('http://localhost:8080/products/register', {
//         username,
//         password,
//       });
//       console.log(response.data); // Handle response from server
//       // Redirect user to admin home after successful signup
//       // For example:
//       // history.push('/adminhome');
//     } catch (error) {
//       console.error('Error signing up:', error);
//       // Handle error, show error message to user, etc.
//     }
//   };

//   return (
//     <div className="karadi">
//       <div className="over1">
//         <div className="background0">
//           <div className="shape"></div>
//           <div className="shape"></div>
//         </div>
//         <form className="fr" onSubmit={handleSubmit}>
//           <h3 className="htag1">
//             <b>Signup</b>
//           </h3>
//           <label className="lab1">Username</label>
//           <input
//             className="ins"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your Username"
//             id="username"
//             required
//           />
//           <label className="lab1">Password</label>
//           <input
//             className="ins"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your Password"
//             id="password"
//             required
//           />
//           <label className="lab1">Confirm Password</label>
//           <input
//             className="ins"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm your Password"
//             id="confirmPassword"
//             required
//           />
//           <center>
//             <button type="submit" className="bu">
//               Signup
//             </button>
//           </center>
//           <br />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;






// import { useState } from 'react';
// import './Signup.css';
// import axios from 'axios';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset any previous errors

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       setError("Passwords don't match");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:8080/products/register', {
//         username,
//         password,
//         mobile, 
//       });
//       console.log(response.data); // Handle response from server

//       // Optionally, you can redirect the user after successful signup
//       // history.push('/adminhome');
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         setError(error.response.data.message); // Display server error message to the user
//         console.error('Server Error:', error.response.data);
//       } else if (error.request) {
//         // The request was made but no response was received
//         setError('No response received from server');
//         console.error('No response received:', error.request);
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         setError('Error setting up the request');
//         console.error('Error:', error.message);
//       }
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="karadi">
//       <div className="over1">
//         <div className="background0">
//           <div className="shape"></div>
//           <div className="shape"></div>
//         </div>
//         <form className="fr" onSubmit={handleSubmit}>
//           <h3 className="htag1">
//             <b>Signup</b>
//           </h3>
//           <label className="lab1">Username</label>
//           <input
//             className="ins"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your Username"
//             id="username"
//             required
//           />
          
//           <label className="lab1">Password</label>
//           <input
//             className="ins"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your Password"
//             id="password"
//             required
//           />
//           <label className="lab1">Confirm Password</label>
//           <input
//             className="ins"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm your Password"
//             id="confirmPassword"
//             required
//           />
//           {error && <div className="error">{error}</div>}
//           <center>
//             <button type="submit" className="bu" disabled={loading}>
//               {loading ? 'Signing Up...' : 'Signup'}
//             </button>
//           </center>
//           <br />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileno, setMobile] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset any previous errors

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/products/register', {
        username:username,
        password:password,
        mobileno:mobileno,
        email:email
      });
      console.log(response.data); // Handle response from server

      // Optionally, you can redirect the user after successful signup
      // history.push('/adminhome');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message); // Display server error message to the user
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received from server');
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error setting up the request');
        console.error('Error:', error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div className="karadi">
      <div className="over1">
        <div className="background0">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="fr" onSubmit={handleSubmit}>
          <h3 className="htag1">
            <b>Signup</b>
          </h3>
          <label className="lab1">Username</label>
          <input
            className="ins"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
            id="username"
            required
          />
          
          <label className="lab1">Password</label>
          <input
            className="ins"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            id="password"
            required
          />
          <label className="lab1">Confirm Password</label>
          <input
            className="ins"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your Password"
            id="confirmPassword"
            required
          />
          <label className="lab1">Mobile Number</label>
          <input
            className="ins"
            type="text"
            value={mobileno}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your Mobile Number"
            id="mobile"
            required
          />
          <label className="lab1">Email Address</label>
          <input
            className="ins"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            id="email"
            required
          />
          {error && <div className="error">{error}</div>}
          <center>
            <button type="submit" className="bu" disabled={loading}>
              {loading ? 'Signing Up...' : 'Signup'}
            </button>
          </center>
          <br />
        </form>
      </div>
    </div>
  );
};

export default SignUp;


