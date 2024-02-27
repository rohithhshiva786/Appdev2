// Import React and any necessary modules
import React from 'react'

import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout} from '@mui/icons-material';

import './Home.css'; // Make sure to replace 'YourComponent' with the actual name of your React component
import About from "../Compontents/About"
import Levels from "../Compontents/Levels"
import Location from "../Compontents/Location"
import ClassSchedule from "../Compontents/ClassSchedule"
import Footer from "../Compontents/Footer"
// import Contact from "../Compontents/Contact"
import Lslider from "./Lslider"
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
    <div className='bodytt'>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">Smartchess</a>
            
          </div>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/class"> Class Shcedule</a></li>
            <li><a href="/Academy"> Academy</a></li>
            {/* <li><a href="/contact">Contact</a></li> */}
            <li><Link to="/feed"><a href="#">Feedback</a></Link></li>

            <Box sx={{ flexGrow: 0 }}>
                     <li>
                      <IconButton
                        onClick={handleClick} sx={{ p: 0}}
                        size="small"
                      >
                      <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black" ,marginLeft:"10px" , marginBottom:"-10px", marginTop:"-8px" }}></Avatar>
                      </IconButton></li></Box>
                </ul>
                <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 45, height: 45 ,bgcolor : "black"}}/> <b>My Account</b>
        </MenuItem>
        <Divider />
       
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountBox fontSize="small" />
          </ListItemIcon>
          <b>Profile</b>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to="/"><div className='logout'><b>Logout</b></div></Link>
        </MenuItem>
      </Menu>
        </div>
      </nav>
      <div className="imgb">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">Smart Chess</div>
        <div className="sub_title">Academy</div>
        <div className="btns">
          <Link to="/joinus">
          <button className='butt'>Join</button></Link>
          <Link to="/Form">
          <button >Admission</button></Link>
        </div>
      </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>

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
      </div><br></br><br></br><br></br>
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