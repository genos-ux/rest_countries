import { useState } from 'react';
import Nav from './Nav';
import './Country'
import Country from './Country';
import { Outlet, Link } from "react-router-dom";



function Layout() {
  const [dark,setDark] = useState(false);

  function toggle(){
    setDark(prevState => !prevState);
  }

  
  return (
   <div style={{backgroundColor: dark?"hsl(207, 26%, 17%)":"white"}}>
     <Nav mode= {toggle} tone={dark}/>
     

     <Country tone={dark}/>
     
     
   </div>
  );
}

export default Layout;
