import "./ContactForm.css";

import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact">
      <h1>CONTACT.</h1>
        <div className="form-container">
          <form>
            <label>Your Name :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
            <label>Subect :</label>
            <input type="text" />
            <label>Message :</label>
            <textarea row="6" placeholder="Please type your message here"/>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>

    </div>
  )
}

export default ContactForm;