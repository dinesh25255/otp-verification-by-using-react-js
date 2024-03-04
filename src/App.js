import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
 
function App() {
  const [otp, setOtp] = useState('');
 
  const handleVerify = () => {
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    console.log('OTP is ', otp);
  };
 
  return (
    <div className="App">
      <h2>OTP verification screen in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h2>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span> </span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: "3rem", height: "3.5rem" }}
        renderInput={(props) => <input {...props} className='otp-input' />}
      />
      <div className='btn-container'>
        <button onClick={handleVerify}>Verify OTP</button>
      </div>
    </div>
  );
}
 
export default App;