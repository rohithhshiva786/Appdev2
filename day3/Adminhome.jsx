// Import React and any necessary modules
import React from 'react'

// import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
// import { AccountBox,  Logout} from '@mui/icons-material';

import './Adminhome.css'; // Make sure to replace 'YourComponent' with the actual name of your React component
// import About from "../Compontents/About"
// import Levels from "../Compontents/Levels"
// import Location from "../Compontents/Location"
// import ClassSchedule from "../Compontents/ClassSchedule"
import Footer from "../Compontents/Footer"
// // import Contact from "../Compontents/Contact"
// import Lslider from "./Lslider"
import { Link } from 'react-router-dom';

// Create a functional component
const Homepage = () => {
   
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='bodyttr'>
      <nav>
        <div className="menu7">
          <div className="logo7">
            <a href="#">Smartchess</a>
            
          </div>
          <ul>
            <li><a href="/AdminAcademy">Academy</a></li>
            <li><a href="/AdminCourses">Courses</a></li>
            <li><a href="/AddStudent">Student</a></li>
            
            {/* <li><a href="/contact">Contact</a></li> */}
            {/* <li><Link to=""><a href="#">Feedback</a></Link></li> */}
</ul>
           
        </div>
      </nav>
      <div className="imgbf">
        <div className="overlay9"></div>
      </div>
      <div className="center7">
        <div className="titleg">Smart Chess</div>
        <div className="sub_titleg">Academy</div>
        <div className="btnsg">
          {/* <Link to="">
          <button className='butt'>Join</button></Link> */}
          
          <button >ADMIN</button>
        </div>
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      {/* <div>

      <About/>
      </div>
      <br></br><br></br><br></br>
      <div>

      <Levels/>
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
        <Location/>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
        
        <ClassSchedule/>

      </div><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
      <Lslider/>
      </div><br></br><br></br><br></br> */}
      {/* <div>
        <Contact/>
      </div> */}
      <div>
        <Footer/>
      </div>
    </div>
    
   
  );
};

export default Homepage;