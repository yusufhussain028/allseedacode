import {FormControl, Form, Button} from 'react-bootstrap';
import React from 'react';
import Group from './Group.png';
import letsTalk from './pic/letsTalk.png';
import fill from './pic/fill.png';
import './seeda.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function CampaignDetail(){

	return(
<>
<div style={{width:'90vw', height:'50vh', marginLeft:'5%'}}>
<img src={letsTalk}/>
<img style={{position:'absolute', top:'34%', left:'5%'}} src={fill}/>
 <Form.Group style={{width:'40vw', marginTop:'3%'}}>
  <Form.Control type="text" placeholder="Campaign Name" />
  <br/>
  <Form.Control type="text" placeholder="Campaign Start Date" />
  <br/>
  <Form.Control type="text" placeholder="Campaign End Date" />
  <br/>
  <Form.Control type="text" placeholder="Enter 5 Potential Client" />
  <AddBoxIcon style={{position:'absolute', top:'69.5%', left:'43%'}} />
  <CalendarTodayIcon style={{position:'absolute', top:'60%', left:'43%'}} />
  <CalendarTodayIcon style={{position:'absolute', top:'50%', left:'43%'}} />
 </Form.Group>
</div>
  </>
  );
  }

  export default CampaignDetail;
