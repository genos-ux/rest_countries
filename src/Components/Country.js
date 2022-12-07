import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Countries from './Countries';
import pic from './icons8-search-48.png'
import {useState, useEffect} from 'react'

const Country = (props) => {

    const [countryApi, setcountryApi] = useState([]);
    const [name, setName] = useState("");



    useEffect(function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountryApi(data))
    },[]);

    function handleText(e){
        const value = e.target.value;

        switch(value){
            case "Africa":
                const africa = countryApi.filter(country=>country.region === "Africa");
                setcountryApi(africa);
                break;

            case "Asia":
                const asia = countryApi.filter(country => country.region === "Asia");
                setcountryApi(asia);
                break;

            case "America":
                const america = countryApi.filter(country => country.region === "Americas");
                setcountryApi(america);
                break;

            case "Europe":
                const europe = countryApi.filter(country => country.region === "Europe");
                setcountryApi(europe);
                break;

            case "Oceania":
                const oceania = countryApi.filter(country => country.region === "Oceania");
                setcountryApi(oceania);
                break;


            default:
                console.log("empyty")      

        }

    }

    const El = countryApi && countryApi.map((country,index) => (
        <Countries key={index} item={country} mode={props.tone}/>
    ))

    function search(){
       const newArray = countryApi.filter(count => count.name.common === name
        )

       const result = countryApi ? setcountryApi(newArray) : "No such country exists";
       return (
           <>
                {result}
                <h1>Hello </h1>
           
           </>
       );
        
    }
    

    return (

        <div>

            <div className='d-flex px-5 mt-5'>
                <div>
                    <Form className="d-flex">
                        
                        <Form.Control type="text" placeholder="Normal text" onChange={(e) => setName(e.target.value)} value={name} style={{backgroundColor:props.tone?"#292d36":"white",border:props.tone?"none":'1px solid black',color:props.tone?"white":"black"}}/>
                        {/* <input type="text" placeholder="Search for a country..." onChange={(e) => setName(e.target.value)} value={name}/> */}
                        <Button variant="outline-success" className="w-25" onClick={search} style={{border:'none',position:'relative',right:'50px'}}><img src={pic} alt="" style={{width:'30px',height:'20px'}}/></Button>
                        
                    </Form>
                </div>

                <div style={{marginLeft:"auto"}}>
                
        
                    <Form.Select onChange={(e)=> handleText(e)} style={{backgroundColor:props.tone?"#292d36":'white',color:props.tone?"whitesmoke":"black"}}>
                        <option>Filter by region</option>
                        <option>Africa</option>
                        <option>America</option>
                        <option>Asia</option>
                        <option>Europe</option>
                        <option>Oceania</option>
                    </Form.Select>
        
        
                </div>

                
            </div>

            <div  className="p-4">{El}</div>

        </div>
    );
}
 
export default Country;