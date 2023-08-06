import { UseSelector, useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { Formik } from "formik";
import { useState } from 'react';
import * as yup from 'yup';
import { shades } from '../../theme';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  )
}

export default Checkout;
