import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav({mode,tone}) {


  
  return (
   
    <Navbar pt-0 mt-0>
      <Container  className="p-1 px-5 border-bottom" fluid>   
      <Navbar.Brand href="#home"><h5 style={{color: tone? "white": "hsl(209, 23%, 22%)" }}>Where in the world?</h5></Navbar.Brand>     
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='d-flex'>
            
            <h6 onClick={mode} style={{color:tone?"white":"black",cursor:"pointer"}}>Dark Mode</h6>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}


export default Nav;