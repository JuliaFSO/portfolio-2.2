import { Link } from 'react-router-dom';
import './about.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGear, faLocationDot, faEnvelope, faUser,
         faMicrophone, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import Github from '../../assets/images/github_icon.png';
import LinkedIn from '../../assets/images/linkedin_icon.png';

export default function Profile() {
  return (
    <div className='about_section'>
      <div className='sub_title'>PROFILE</div>
      <div className='section_column' style={{ width: '420px' }}>
        <ul><li className='text'><FontAwesomeIcon icon={faUser} className='icon' />
              Name: <strong>Julia Fachin</strong></li>
          <li className='text'><FontAwesomeIcon icon={faFlag} className='icon' />
              Nationality: <strong>Brazilian</strong></li>
          <li className='text'><FontAwesomeIcon icon={faGear} className='icon' />
              Experience: <strong>2 years</strong></li>
          <li className='text'><FontAwesomeIcon icon={faLocationDot} className='icon' />
              Address: <strong>Toronto, Canada</strong></li></ul>
      </div>
      <div className='section_column' style={{ width: '420px' }}>
        <ul>
          <li className='text'><FontAwesomeIcon icon={faPhone} className='icon' />
              Telephone: <Link to="https://api.whatsapp.com/send?phone=16479399042" className='text'><strong>+1 647 939-9042</strong></Link></li>
          <li className='text'><FontAwesomeIcon icon={faEnvelope} className='icon' />
              Email: <Link to="mailto:juliafso@mail.com" className='text'><strong>juliafso@mail.com</strong></Link></li>
          <li className='text'><FontAwesomeIcon icon={faMicrophone} className='icon' />
              Languages:
                <ul style={{ marginLeft: '110px', marginTop: '-30px'}}>
                  <li className='text' style={{ fontSize: '1em'}}><strong>English</strong></li>
                  <li className='text' style={{ fontSize: '1em'}}><strong>Portuguese</strong></li>
                </ul>
          </li>
        </ul>
      </div>
      <div className='section_column' style={{ width: '220px', textAlign: 'center' }}>
        <div>
        <a href="/julia_fachin_fullstack_developer.pdf" target='blank'>
          <button className='button_profile' download="julia_fachin_fullstack_developer.pdf">
            Download CV <FontAwesomeIcon icon={faFileArrowDown} className='download_icon' />
          </button>
        </a>
        </div>
        <div>
          <Link to={'https://github.com/JuliaFSO/'} className='link' target='blank'>
            <button className='button_profile'>
              GitHub <img src={Github} className='img_icon' alt='Github' />
            </button>
          </Link>
        </div>
        <div>
          <Link to={'https://www.linkedin.com/in/juliafachin/'} className='link' target='blank'>
            <button className='button_profile'>
              LinkedIn <img src={LinkedIn} className='img_linkedin' alt='LinkedIn' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
