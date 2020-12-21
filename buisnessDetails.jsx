import {FormControl, Form, Button} from 'react-bootstrap';
import React from 'react';
import Group from './Group.png';
import Lorem from './pic/Lorem.png';
import started from './started.png';
import './seeda.css';

function BusinessDetail(){



	return(
<>
<div style={{width:'90vw', height:'50vh'}}>
<div style={{marginLeft:'55%', marginTop:'5%'}}>
<img style={{position:'absolute', top:'42%', left:'7%'}} src={started} />
<img style={{position:'absolute', top:'57%', left:'7%', height:'12vh'}} src={Lorem} />
 <Form.Group style={{width:'40vw'}}>
  <Form.Control type="text" placeholder="Business Name" />
  <br/>
  <Form.Control type="text" placeholder="Website Name" />
  <br/>
  <Form.Control type="text" placeholder="Location Address" />
  <br/>
  <Form.Control type="text" placeholder="Phone Number" />
  <br/>
  <Form.Control type="text" placeholder="category" />
 </Form.Group>
</div>
</div>
  </>
  );
  }

  export default BusinessDetail;
