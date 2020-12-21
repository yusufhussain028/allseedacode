import {FormControl, Form, Button} from 'react-bootstrap';
import React from 'react';
import finalFill2 from './pic/finalFill2.png';
import finalStep2 from './pic/finalStep2.png';
import how from './pic/how.png';
import PriceList2 from './invoiceComp2.jsx';

function CreditCard(){
	return(
	<>
	<div style={{marginLeft:'12%', marginBottom:'1%'}} >
	<img src={finalStep2}/>
	<img src={finalFill2}/>
	</div>
	<div style={{display:'flex', width:'70vw', marginLeft:'12%'}}>
  <Form.Control style={{width:'25vw'}} type="text" placeholder="Credit Card Number" />
  <Form.Control style={{width:'10vw', marginLeft:'1%'}} type="text" placeholder="Expiry Date" />
  <Form.Control style={{width:'8vw', marginLeft:'1%'}} type="text" placeholder="CVV" />
 </div>
   <div style={{marginLeft:'12%',marginTop:'5%', height:'20vh'}}>
  <img src={how}/>
  <div style={{display:'flex', marginTop:'1%'}}>
  <Form.Control style={{width:'10vw', marginLeft:'1%'}} type="text" placeholder="Expiry Date" />
  <Form.Control style={{width:'10vw', marginLeft:'1%'}} type="text" placeholder="Expiry Date" />
  </div>
  </div>
  <PriceList2/>
	</>
	)
}
export default CreditCard;