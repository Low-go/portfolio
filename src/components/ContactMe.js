import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/ContactMe.css';

function ContactMe() {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <Element name="contact-me" className="contactme-section">
      <div className="container contact-form">
        <form
          onSubmit={submitForm}
          action="https://formspree.io/f/mzzpyyrv"
          method="POST"
        >
          <h1>Contact Me</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name *" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Your Email *" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" className="form-control" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <button type="submit" className="btnContact">Send Message</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea name="message" className="form-control" placeholder="Your Message *" style={{width: '100%', height: '150px'}} required></textarea>
              </div>
            </div>
          </div>
          {status === "SUCCESS" && <p>Thanks for your submission!</p>}
          {status === "ERROR" && <p>Oops! There was an error.</p>}
        </form>
      </div>
    </Element>
  );
}

export default ContactMe;