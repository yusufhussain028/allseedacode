	import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import NavB from './navbarComp.jsx';
import { useHistory } from "react-router-dom";
import {FormControl, Form, Button} from 'react-bootstrap';
import BusinessDetail from './buisnessDetails.jsx';
import GroupCopy from './pic/GroupCopy.png';
import CampaignDetail from './campaignComp.jsx';
import SliderComp from './sliderComp.jsx';
import PriceList2 from './invoiceComp2.jsx';
import CreditCard from './creditCard.jsx';
import Link from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Buisness Details', 'Campaign Details', 'Target & Budgets', 'Delivery & Payment'];
}



export default function BuisnessDetail() {
  const classes = useStyles();
    const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
     if(activeStep===2 )
     {
     setActiveStep((prevActiveStep) => prevActiveStep + .5);
     } 
     else if(activeStep===2.5){
       history.push('/finish/*');
     }     
     else{
     setActiveStep((prevActiveStep) => prevActiveStep + 1);
     }

  };

  const handleBack = () => {
  if(activeStep===3 || activeStep===2.5)
     {
     setActiveStep((prevActiveStep) => prevActiveStep - .5);
     }   
     else{
     setActiveStep((prevActiveStep) => prevActiveStep - 1);
     }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
  <>
  <img style={{position:'absolute', right:'92%', top:'0'}}src={GroupCopy}/>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
 
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}></Typography>
            <div>

             {activeStep === 0 ? (
             <BusinessDetail/>) 
             : activeStep === 1 ? (
             <CampaignDetail/>) 
             : activeStep === 2 ? (            
             <SliderComp/>)
              : activeStep === 2.5 ? (            
             <CreditCard/>)    
             : (<h2></h2>)
             }
               
              </div>


            {activeStep === 0 ? (<Button className='P1' variant="primary" size="lg" style={{marginLeft:'67%', width:'20vw'}} onClick={handleNext}>
             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}             
             </Button>            
                  ) 
             : (  <div style={{display:'flex', justifyContent:'space-around'}}>
             <Button style={{width:'20vw'}} variant="primary" size="lg" onClick={handleBack}
             className={classes.backButton}>Back</Button> 

             <Button className='P1' variant="primary" size="lg" style={{width:'20vw'}} onClick={handleNext}>
             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}             
             </Button>
              </div>

             )
             }
                
            

          </div>
        )}
      </div>
    </div>
    </>
  );
}
	