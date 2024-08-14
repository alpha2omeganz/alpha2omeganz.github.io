"use client";
import Script from "next/script";
import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = () => {
  const [recaptcha, setRecaptcha] = useState<string | null>()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const endpoint = 'https://api.alpha2omega.nz/contactus'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault()

    if (!recaptcha) {
      console.log('Recaptcha value was not provided.');
      return;
    }

    if (firstName.length === 0 || firstName.length > 256) {
      alert('A First Name between 1 and 256 characters is required.');
      return;
    }

    if (lastName.length === 0 || lastName.length > 256) {
      alert('A Last Name between 1 and 256 characters is required.');
      return;
    }

    if (email.length === 0 || email.length > 256) {
      alert('An Email Address between 1 and 256 characters is required.');
      return;
    }

    if (subject.length === 0 || subject.length > 1024) {
      alert('A Subject between 1 and 1024 characters is required.');
      return;
    }

    if (message.length === 0 || message.length > 1024) {
      alert('A Subject between 1 and 1024 characters is required.');
      return;
    }

    const data = { firstName, lastName, email, subject, message, recaptcha }
    const fetchPromise = fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    });
    fetchPromise
      .then(response => response.json())
      .then(data => {
        setSubmitting(false);
        setSubmitted(true);
        console.log(data);
    })
  }
  return (
    <div className="mx-1 mb-2">
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
      <form className={`${submitted && "hidden"}`} action={endpoint} onSubmit={handleSubmit} method="POST">
        <div className="text-lg">
          <span>Name <span className="text-sm">(required)</span></span>
          <div className="md:flex text-sm">
            <div className="pr-2">
              <h3>First Name</h3>
              <input type="text" className="form-control h-9 w-72 p-1" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength={256} required/><br/>
            </div>
            <div className="md:pl-2">
              <h3>Last Name</h3>
              <input type="text" className="form-control h-9 w-72 p-1" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength={256} required/><br/>
            </div>
          </div>
        </div>
        <p className="text-lg mt-2">
          Email Address <span className="text-sm">(required)</span>
        </p>
        <input type="email" className="form-control h-9 w-72 p-1" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={256} required/><br/>
        <p className="text-lg mt-2">
          Subject <span className="text-sm">(required)</span>
        </p>
        <input type="text" className="form-control h-9 md:w-96 w-80 p-1" value={subject} onChange={(e) => setSubject(e.target.value)} maxLength={1024} required/><br/>        
        <p className="text-lg mt-2">
          Message <span className="text-sm">(required)</span>
        </p>
        <textarea rows={3} className="form-control md:w-96 w-80 p-1" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={10*1024} required></textarea><br/>
        <div className="grid grid-cols-[auto_auto] w-min mt-1">
          <ReCAPTCHA className="col-start-1 mr-0" sitekey="6Lc0jhwqAAAAABLh_I3tv2wqjqCIZMAVHu5_NPTZ" onChange={(e) => setRecaptcha(e)} />
          <span className={`col-start-2 text-2xl text-red-600 text-left ${recaptcha && "hidden"} block`}>*</span>
        </div>
        <button type="submit" className="clear-both border border-black bg-white px-2 py-1 rounded mt-1 hover:bg-yellow-50 disabled:bg-gray-300" disabled={recaptcha === undefined || recaptcha === null || submitting}>Send</button>
      </form>
      <div className={`mt-2 text-lg ${!submitted && "hidden"}`}>
        Thank you. Your message has been sent.
      </div>
    </div>
  )
}
export default ContactForm