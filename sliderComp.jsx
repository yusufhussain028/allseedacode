import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import PriceList2 from './invoiceComp2.jsx';
import budget from './pic/budget.png';
import fill from './pic/fill.png';
import {useState,useEffect} from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};





const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'grey',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export default function SliderComp() {
  const classes = useStyles();
  const [amount,setAmount]=useState(10);

  function getVal(e,val){
  setAmount(val);
  window.sessionStorage.setItem('amount', val);
}


  return (
  <>
  <div style={{width:'90vw', height:'50vh'}}>
    <div style={{marginLeft:'10%'}} className={classes.root}>
    <img src={budget}/>
    <img src={fill}/>
      <Typography gutterBottom>Daily Budgets</Typography>
      <PrettoSlider onChange={getVal} valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={window.sessionStorage.getItem('amount')} max={400}  />
      <div className={classes.margin} />
      <PriceList2 amt={amount}/>

    </div>
    </div>


    </>
  );
}