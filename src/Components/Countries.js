import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Contact from './Contact'




function Countries(props) {
  

  return (
    <Card style={{ width: '17rem' ,display:"inline-block",backgroundColor:props.mode?'#292d36':"white",color:props.mode?"white":"black"}} className="m-4">
      
      <Card.Img variant="top" src={props.item.flags.png}  alt="Hello" style={{width:"100%",height:"150px"}}/>
      
      <Card.Body style={{textAlign:"justify",marginLeft: "10px"}} className="m-2">
        <Card.Title style={{fontWeight:"600"}}>{props.item.name.common}</Card.Title>
        <Card.Text >
          <p><span style={{fontWeight:"500"}}>Population</span>: {props.item.population}</p>
          <p><span style={{fontWeight:"500"}}>Region</span>: {props.item.region}</p>
          <p><span style={{fontWeight:"500"}}>Capital</span>: {props.item.capital}</p>
        </Card.Text>
      </Card.Body>

      

      
     
    </Card>
  );
}

export default Countries;