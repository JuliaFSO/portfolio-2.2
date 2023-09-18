import { Link } from 'react-router-dom';

import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import CryptoImage from '../../assets/images/crypto_wallet.png';
import Github from '../../assets/images/github_icon.png';

export default function ModalCryptoWallet({ closeModal }) {
  return (
    <div className='projects_container' onClick={closeModal}>
      <div className='modal_overlay'>
        <div className='modal_projects'>
          <div className='modal_external'></div>
           <div className='modal_content'>
            <h2 className='modal_title'>Crypto Wallet</h2>
              <div className='modal_info'>
                <div className='text' style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  An app to register and keep up with your cryptocoins.
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFileLines} className='icon' />Project: <strong>Web App</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faFolder} className='icon' />Category: <strong>Ruby on Rails Course</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCode} className='icon' />Language: <strong>Ruby on Rails, HTML, CSS</strong>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faCalendar} className='icon' />Date: <strong>11/2022</strong>
                </div>
                <div className='text' >
                  <img src={Github} className='icon' alt='Github Crypto Wallet' width={15} height={15} />
                  Github: <Link to={'https://github.com/JuliaFSO/crypto_wallet'} className='link' target='blank'>
                    <strong>github.com/JuliaFSO/crypto_wallet</strong>
                  </Link>
                </div>
                <div className='text' >
                  <FontAwesomeIcon icon={faExternalLink} className='icon' />Preview: <strong>Soon!</strong>
                </div>
              </div>
              <img src={CryptoImage} className='proj_img' alt="Crypto Wallet" />
            <button className='close_button' ><FontAwesomeIcon icon={faXmark} className='close_icon' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
