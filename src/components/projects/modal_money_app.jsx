import { Link } from 'react-router-dom';

import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import MoneyAppImage from '../../assets/images/money_app.png';
import Github from '../../assets/images/github_icon.png';

export default function ModalMoneyApp({ closeModal }) {
  return (
    <div className='projects_container' onClick={closeModal}>
      <div className='modal_overlay'>
        <div className='modal_projects'>
          <div className='modal_external'></div>
           <div className='modal_content'>
            <h2 className='modal_title'>My Money App</h2>
              <div className='modal_info'>
                <div className='projects_text' style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  App is a payment cycle registration and analysis application.
                </div>
                <div className='projects_text' >
                  <FontAwesomeIcon icon={faFileLines} className='icon' />Project: <strong>Web App</strong>
                </div>
                <div className='projects_text' >
                  <FontAwesomeIcon icon={faFolder} className='icon' />Category: <strong>React/Redux Course</strong>
                </div>
                <div className='projects_text' >
                  <FontAwesomeIcon icon={faCode} className='icon' />Language: <strong>React, Redux HTML, CSS</strong>
                </div>
                <div className='projects_text' >
                  <FontAwesomeIcon icon={faCalendar} className='icon' />Date: <strong>03/2023</strong>
                </div>
                <div className='projects_text' >
                  <img src={Github} className='icon' alt='Github Money App' width={15} height={15} />
                    Github: <Link to={'https://github.com/JuliaFSO/my-money-app'} className='link' target='blank'>
                      <strong>github.com/JuliaFSO/my-money-app</strong>
                  </Link>
                </div>
                <div className='projects_text' >
                  <FontAwesomeIcon icon={faExternalLink} className='icon' />Preview:
                  <strong> Soon!</strong>
                </div>
              </div>
              <img src={MoneyAppImage} className='proj_img' alt="Money App" />
            <button className='close_button' ><FontAwesomeIcon icon={faXmark} className='close_icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
