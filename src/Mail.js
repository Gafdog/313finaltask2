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
    /*const mailchimpData = {
      members: [
        {
          email_address: email,
          status: 'subscribed',
        },
      ],
    };

    const mailchimpUrl = 'https://us21.api.mailchimp.com/3.0/lists/fb16edc462'; 
    const mailchimpOptions = {
      method: 'POST',
      auth: 'azi:e1446934d028ad365be065463db76e4f-us21',
    };

    try {
      const mailchimpResponse = await fetch(mailchimpUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailchimpData),
      });

      
      if (mailchimpResponse.status === 200) {
        
        const sendGridResponse = await fetch('/send-welcome-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (sendGridResponse.status === 200) {
          console.log('Welcome email sent successfully.');
        } else {
          console.error('Failed to send welcome email.');
        }
      } else {
        console.error('Failed to subscribe to Mailchimp.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }*/
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