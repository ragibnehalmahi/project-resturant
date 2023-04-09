import React,{useState} from 'react'
import { AppBar,Box,Toolbar, Typography ,IconButton, Drawer, Divider} from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink} from 'react-router-dom';
import '../../styles/HeaderStyles.css'
const Header = () => {
  const [mobileopen,setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileopen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
       <Typography 
        color={'goldenrod'} 
        variant='h6' 
        component="div" 
        sx={{flexGrow:1,my:2}}>
          <FastfoodIcon/>
          My Resturant
        </Typography>
        <Divider/> 
       
          <ul className='mobile-navigation '>
            <li>
              <NavLink activeClassName="active" to={'/'}>Home</NavLink>
               
            </li>
            <li>
              <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
               
            </li>
            <li>
              <NavLink activeClassName="active" to={'/about'}>About</NavLink>
               
            </li>
            <li>
              <NavLink activeClassName="active" to={'/contact'}> Contact</NavLink>
               
            </li>
          </ul>

        
     </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor:"black"}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start' 
          sx={{
            mr:2,
            display:{sm:'none'},
          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon/>

          </IconButton>
        <Typography 
        color={'goldenrod'} 
        variant='h6' 
        component="div" 
        sx={{flexGrow:1}}>
          <FastfoodIcon/>
          My Resturant
          </Typography>
        
        <Box >
          <ul className='navigation-menu'>
            <li>
              <NavLink activeClassName="active" to={'/'}>Home</NavLink>
               
            </li>
            <li>
              <NavLink activeClassName="active" to={'/menu'}>Menu</NavLink>
               
            </li>
            <li>
              <NavLink activeClassName="active" to={'/about'}>About</NavLink>
               
            </li>
            <li>
              <NavLink activeClassName="active" to={'/contact'}> Contact</NavLink>
               
            </li>
          </ul>

        </Box>
        
        </Toolbar>
        
      </AppBar>
      <Box component='nav'>
        <Drawer variant='temporqary' open={mobileopen}
         onClose={handleDrawerToggle}
         sx={{display:{xs:'block',sm:'none'}, "& .MuiDrawer-paper":{
          boxSizing:'border-box',
          width:"240px"
        }}}>
          {drawer}
        </Drawer>
        
      </Box>
      <Box  >
        <Toolbar/>
      </Box>
      </Box></>
  )
}

export default Header