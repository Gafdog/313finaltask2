import React, { useState } from 'react';
import './MailList.css'; 

function Mail() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

  await fetch ('http://localhost:8080',{
  method:'post',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    email: email,
    status: 'subscribed'
  })
})
.then (response=>response.json())
.then (data=>JSON.parse(data))
.catch(err=>{
  console.log("Error:"+err)
})
    
  };

  return (
    <div className='header-div'>
      <form onSubmit={handleSubscribe}>
        <span className='words'>SIGN UP FOR OUR DAILY INSIDER</span>
        <div className='email'>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit' className='btn btn-lg btn-primary btn-block'>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Mail;
