import React, { useState } from 'react';
import axios from 'axios';

const SendOTPForm = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOTP = async () => {
    try {
      console.log("email recived from user:",email);
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setResponseMessage('Error sending OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>Send OTP</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <button onClick={handleSendOTP}>Send OTP</button>
      <div>{responseMessage}</div>
    </div>
  );
};

export default SendOTPForm;

