import { Link } from 'react-router-dom';

import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import ReactGiphyImage from '../../assets/images/react_giphy.png';
import Github from '../../assets/images/github_icon.png';

export default function ModalReactGiphy({ closeModal }) {
  return (
    <div className='projects_container' onClick={closeModal}>
      <div className='modal_overlay'>
        <div className='modal_projects'>
          <div className='modal_external'></div>
           <div className='modal_content'>
            <h2 className='modal_title'>React Giphy</h2>
              <div className='modal_info'>
                <div className='text' style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  WebApp to find your favorite gifs!
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFileLines} className='icon' />Project: <strong>Web App</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFolder} className='icon' />Category: <strong>React Course</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCode} className='icon' />Language: <strong>React, HTML, CSS</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCalendar} className='icon' />Date: <strong>07/2022</strong>
                </div>
                <div className='text' >
                  <img src={Github} className='icon' alt='Github React Giphy' width={15} height={15} />
                  Github: <Link to={'https://github.com/JuliaFSO/react-giphy'} className='link' target='blank'>
                    <strong>github.com/JuliaFSO/react-giphy</strong>
                  </Link>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faExternalLink} className='icon' />
                  Preview: <Link to={'https://juliafso.github.io/react-giphy/'} className='link' target='blank'>
                    <strong> Click here to preview!</strong>
                  </Link>
                </div>
              </div>
              <img src={ReactGiphyImage} className='proj_img' alt="React Giphy" />
            <button className='close_button' ><FontAwesomeIcon icon={faXmark} className='close_icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
