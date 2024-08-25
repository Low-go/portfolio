import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/ContactMe.css';

function ContactMe() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Element name="contact-me" className="contactme-section">
      <div className="container contact-form">
        <form onSubmit={handleSubmit}>
          <h3>Contact Me</h3>
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
        </form>
      </div>
    </Element>
  );
}

export default ContactMe;