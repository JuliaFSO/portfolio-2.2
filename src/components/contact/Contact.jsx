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
      <div className='section'>
        <div className='input_container_small'>
          <h2>{`${"Let's chat!"}`}</h2>
          <p className='text'>
          {`${"Don't"}`} be shy to connect! {`${"I'm"}`} here and excited to chat about new projects,
          creative ideas, or anything that involves your vision.
            </p>
          <p className='text'>
            <FontAwesomeIcon icon={faLocationDot} className='icon' />
            <span className='text'>Address: </span><strong>GTA, ON, Canada</strong></p>
          <p className='text'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <span className='text'>Email: </span>
            <Link to="mailto:juliafso@mail.com"><strong>juliafso@mail.com</strong></Link></p>
          <p className='text'>
            <FontAwesomeIcon icon={faPhone} className='icon' />
            <span className='text'>Phone: </span>
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
