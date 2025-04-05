import React, { } from 'react'
import './SuccessMessage.scss';
import { Close } from '@mui/icons-material';
import { PaystackButton } from 'react-paystack';
import { useNavigate } from 'react-router-dom';

export default function SuccessMessage({ serviceFee, email }) {
  const navigate = useNavigate();
  const handleClose = () => {
    if (document.querySelector('.success-message').classList.contains('active')) {
      document.querySelector('.success-message').classList.remove('active');
    }
  }

  const componentProps = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: serviceFee * 100,
    publicKey: 'pk_live_362b1c5a898c1cbcc3997049f738136211f625bf',
    currency: "KES",
    metadata: {
      name: email,
    },
    text: `Submit & Pay`,
    onSuccess: (response) => {
      handleClose()
      alert("Your Loan Request Was Submitted Successfuly!");
      navigate("/");
    },
    onClose: () => {
      handleClose()
    },
  };

  return (
    <div className='success-message' id='success-message'>
      <Close className='close' onClick={handleClose} />
      <h1>You Are Almost Done!</h1>
      <h4>A Mandatory Service Fee of  <span>KSH {serviceFee}</span>  is Required To Process Your Loan Request.</h4>

      <PaystackButton {...componentProps} className='btn' />
    </div>
  )
}
