import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import Form from './form';
import SuccessPage from './success';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Github from '../../assets/images/github_icon.png';
import LinkedIn from '../../assets/images/linkedin_icon.png';

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <div className='contact_container'>
      <h1 className='head_title'>CONTACT</h1>
      <div className='contact_section'>
        <div className='message_container'>
          <h2>{`${"Start a Conversation!"}`}</h2>
          <p className='text_contact'>
            {`${"I'm"}`} just a message away, excited to talk about your next project,
              innovative concepts, or anything on your mind.
              Feel free to get in touch!
          </p>
          <p className='text_contact'>
            <FontAwesomeIcon icon={faLocationDot} className='icon' />
            <span className='text_contact'>Address: </span><strong>Toronto, ON, Canada</strong></p>
          <p className='text_contact'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <span className='text_contact'>Email: </span>
            <Link to="mailto:juliafso@gmail.com"><strong>juliafso@gmail.com</strong></Link></p>
          <p className='text_contact'>
            <FontAwesomeIcon icon={faPhone} className='icon' />
            <span className='text_contact'>Phone: </span>
            <Link to="https://api.whatsapp.com/send?phone=16479399042"><strong>+1 647 939-9042</strong></Link></p>
          <div>
            <Link to={'https://github.com/JuliaFSO/'} className='link' target='blank'>
              <button className='button'>
                GitHub <img src={Github} className='img_icon' alt='Github' />
              </button>
            </Link>
            <Link to={'https://www.linkedin.com/in/juliafachin/'} className='link' target='blank'>
              <button className='button'>
                LinkedIn <img src={LinkedIn} className='img_linkedin' alt='LinkedIn' />
              </button>
            </Link>
          </div>
          </div>
        <div className='section_column'>
          {showSuccessMessage ? ( <SuccessPage /> ) : ( <Form onSuccess={() => setShowSuccessMessage(true)} /> )}
        </div>
      </div>
    </div>
  )
}
