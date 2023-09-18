import { Link } from 'react-router-dom';

import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import ToDoAppImage from '../../assets/images/toDo_app.png';
import Github from '../../assets/images/github_icon.png';

export default function ModalToDoApp({ closeModal }) {
  return (
    <div className='projects_container' onClick={closeModal}>
      <div className='modal_overlay'>
        <div className='modal_projects'>
          <div className='modal_external'></div>
           <div className='modal_content'>
            <h2 className='modal_title'>ToDo App</h2>
              <div className='modal_info'>
                <div className='text' style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  Streamline your daily to-dos.
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFileLines} className='icon' />Project: <strong>Web App</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFolder} className='icon' />Category: <strong>React/Redux Course</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCode} className='icon' />Language: <strong>React, Redux HTML, CSS</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCalendar} className='icon' />Date: <strong>07/2023</strong>
                </div>
                <div className='text' >
                  <img src={Github} className='icon' alt='Github ToDo App' width={15} height={15} />
                  Github: <Link to={'https://github.com/JuliaFSO/todo-app'} className='link' target='blank'>
                    <strong>github.com/JuliaFSO/todo-app</strong>
                  </Link>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faExternalLink} className='icon' />Preview:
                  <strong> Soon!</strong>
                </div>
              </div>
              <img src={ToDoAppImage} className='proj_img' alt="ToDo App" />
            <button className='close_button' ><FontAwesomeIcon icon={faXmark} className='close_icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
