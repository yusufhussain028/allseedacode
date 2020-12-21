import React from 'react';
import congrats from './pic/congrats.png';
import lastPic from './pic/lastPic.png';
import {Button} from 'react-bootstrap';


function Finish(props){
  return(
  <>
  <div style={{ marginTop:'10%', marginLeft:'10%'}}>
  <img src={congrats}/>
  </div>
  <img style={{position:'absolute', top:'40%', left:'10%'}} src={lastPic}/>

      <Button style={{marginLeft:'10%', marginTop:'5%'}} className='P1' variant="primary" size="lg">
      Go To Dashboard
    </Button>

  <div style={{width:'30vw', height:'35vh', position:'absolute', right:'5%', top:'33%', backgroundColor:'white', display:'flex', justifyContent:'space-around', borderRadius:'8px'}}>
  <div>
  <br/>
  <h5>Leads Per Day</h5>
  <hr/>
  <h5>Cost per lead</h5>
  <hr/>
  <h5>Start Date</h5>
  <hr/>
  <h5>End Date</h5>
  </div>
  <div>
  <br/>
  <h5>
  {
    window.sessionStorage.getItem('amount') >=50 && window.sessionStorage.getItem('amount') <100  ? (
  '10-20') :
  window.sessionStorage.getItem('amount') >=100 && window.sessionStorage.getItem('amount') <150  ? (
  '20-40') :
   window.sessionStorage.getItem('amount') >=150 && window.sessionStorage.getItem('amount') <200  ? (
  '40-60') :
   window.sessionStorage.getItem('amount') >=200 && window.sessionStorage.getItem('amount') <250  ? (
  '60-80') :
   window.sessionStorage.getItem('amount') >=250 && window.sessionStorage.getItem('amount') <300  ? (
  '80-100') :
   window.sessionStorage.getItem('amount') >=300 && window.sessionStorage.getItem('amount') <350  ? (
  '100-120') :
   window.sessionStorage.getItem('amount') >=350 && window.sessionStorage.getItem('amount') <400  ? (
  '120-140') :
  (0)
  }


  </h5>
  <hr/>
  <h5>$2.5-$5
  </h5>
  <hr/>
  <h5>22nd june 2020</h5>
  <hr/>
  <h5>No End Date</h5>
  </div>
  </div>
  </>
  );
}
export default Finish;