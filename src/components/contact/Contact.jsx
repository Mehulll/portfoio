// import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com"

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_aaeakro', 'template_nzq41xt', e.target, 'user_jPcOb5ksYKPx1vKqNEwMJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="contact" id="contact">
     <span>CONTACT</span>
     <h1>Say Hello.</h1>
     <p>Submit the form below so i can get back to you as soon as possible</p>
      <div className="content">
        <div className="contactLeft">
          <form id = "a-form" onSubmit = {sendEmail}>
            <label>Name</label><br/>
            <input type="text" name = "name"/><br/>
            <label>Email</label><br/>
            <input type="email" name = "email"/><br/>
            <label>Subject</label><br/>
            <input type="text" name = "subject"/><br/>
            <label>Message</label><br/>
            <input type="textarea" name = "message"/>
          </form>
        </div>
        <div className="contactRight">
          <h4>PHONE</h4>
          <span>Mobile: (+91) 6350381400</span>
          <h4>EMAIL</h4>
          <span>Email: mehul.aryan.2222@gmail.com</span>
          <h4>ADDRESS</h4>
          <span>Jaipur</span><br/>
          <span>Rajasthan, India</span>
        </div>
     </div>
     <button type = "submit" form = "a-form">Submit</button>
    </div>
  );
}