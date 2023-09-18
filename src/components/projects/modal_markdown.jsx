import { Link } from 'react-router-dom';

import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import MarkdownImage from '../../assets/images/markdown_previewer.png';
import Github from '../../assets/images/github_icon.png';

export default function ModalMarkdown({ closeModal }) {
  return (
    <div className='projects_container' onClick={closeModal}>
      <div className='modal_overlay'>
        <div className='modal_projects'>
          <div className='modal_external'></div>
           <div className='modal_content'>
            <h2 className='modal_title'>Markdown Previewer</h2>
              <div className='modal_info'>
                <div className='text' style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  An app with real-time markdown formatting.
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFileLines} className='icon' />Project: <strong>Web App</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFolder} className='icon' />Category: <strong>Web Development Course</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCode} className='icon' />Language: <strong>React, HTML, CSS</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCalendar} className='icon' />Date: <strong>05/2023</strong>
                </div>
                <div className='text' >
                  <img src={Github} className='icon' alt='Github Markdown Previewer' width={15} height={15} />
                  Github: <Link to={'https://github.com/JuliaFSO/markdown-previewer'} className='link' target='blank'>
                    <strong>github.com/JuliaFSO/markdown-previewer</strong>
                  </Link>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faExternalLink} className='icon' />
                  Preview: <Link to={'https://juliafso-markdownpreviewer.netlify.app/'} className='link' target='blank'>
                    <strong>Click here to preview!</strong>
                  </Link>
                </div>
              </div>
              <img src={MarkdownImage} className='proj_img' alt="Markdown Previewer" />
            <button className='close_button' ><FontAwesomeIcon icon={faXmark} className='close_icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
