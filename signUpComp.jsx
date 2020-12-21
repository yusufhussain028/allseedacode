import {FormControl, Form, Button} from 'react-bootstrap';
import React from 'react';
import Group from './Group.png';
import Lorem from './pic/Lorem.png';
import Bitmap from './pic/Bitmap.png';
import Triangle from './pic/Triangle.png';
import './seeda.css';
import { useHistory } from "react-router-dom";

function SignUp(){

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/About`; 
    history.push(path);
  }

	return(
<>
 <Form.Group className='FormP1'>
  <Form.Control type="text" placeholder="First Name" />
  <br/>
  <Form.Control type="text" placeholder="Last Name" />
  <br/>
  <Form.Control type="text" placeholder="Email Address" />
  <br/>
  <Form.Control type="text" placeholder="Phone Number" />
 </Form.Group>
   <div className="mb-2">
    <Button className='P1' variant="primary" size="lg" onClick={routeChange}>
      Get Started Today
    </Button>{' '}

  </div>
  <img style={{marginTop:'30px',marginLeft:'70px'}} src={Lorem} />


 <div>
  <img style={{position:'absolute',top:'12%', left:'60%', width:'40vw', height:'70vh'}} src={Triangle} />
    <img style={{position:'absolute', top:'22%', left:'60%', width:'40vw', height:'50vh'}} src={Bitmap} />
  </div>

  <img className='imgP1' src={Group} />
</>
);
}

export default SignUp;