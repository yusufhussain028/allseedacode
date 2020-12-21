import React from 'react';

function PriceList2(props){
  return(
  <>
  <div style={{boxShadow:'10px 10px 5px #aaaaaa', width:'30vw', height:'35vh', position:'absolute', right:'5%', top:'33%', backgroundColor:'#5fe8f2', display:'flex', justifyContent:'space-around', borderRadius:'8px'}}>
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
export default PriceList2;