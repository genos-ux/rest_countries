import About from './Components/About'
import Layout from './Components/Layout';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact'



function App() {
  // const [dark,setDark] = useState(false);

  // function toggle(){
  //   setDark(prevState => !prevState);
  // }

  
  return (
  //  <div style={{backgroundColor: dark?"hsl(207, 26%, 17%)":"white"}}>
  //    <Nav mode= {toggle} tone={dark}/>
  //    <Country tone={dark}/>
  //  </div>
  <Routes>
  <Route path='/' element={<Layout/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  

</Routes>
    
  );
}

export default App;
