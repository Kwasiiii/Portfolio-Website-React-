import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_cm6hsuq', 'template_7ly8hlb', e.target, 'user_tREzId4e2fhTEehRTqA5w')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="contact-us d-flex flex-column align-items-center">
      <h2 id="contact">Contact Me.☎️</h2>
      <div className="fab-icon d-flex">
        <a href="https://www.linkedin.com/in/kwasi-appiah-kubi/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Kwasiiii" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
      </div>
      <h4>OR</h4>
      <p>Send a message and I will get back to you within 24 hours.</p>
      <form method="post" onSubmit={sendEmail} className="d-flex flex-column">
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="">Message</label>
        <textarea name="message" className="message" id="" cols="30" rows="10"></textarea>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact