import React, { useState } from 'react';
import './projects.css';
import ModalIndicaria from './modal_indicaria';
import ModalCryptoWallet from './modal_crypto_wallet';
import ModalMarkdown from './modal_markdown';
import ModalReactGiphy from './modal_react_giphy';
import ModalToDoApp from './modal_todo_app';
import ModalMoneyApp from './modal_money_app';
import indicaria from '../../assets/images/bckg_indicaria.jpg';
import crypto from '../../assets/images/bckg_crypto.jpg';
import markdown from '../../assets/images/bckg_markdown.jpg';
import react_giphy from '../../assets/images/bckg_react_giphy.jpg';
import toDo from '../../assets/images/bckg_toDo.jpg';
import money from '../../assets/images/bckg_money.jpg';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className='projects_container'>
      <h1 className='projects_head_title'>PROJECTS</h1>
      <div className="projects-left-dotted-shape"></div>
      <div className='section'>
        <div className='projects_cards'>
          <div className='card_container'>
            <div className='card'
                onClick={() => openModal('Indicaria')} style={{backgroundImage: `url(${indicaria})`}}>
              <div className='overlay'>
                <h1 className='proj_title'>Indicaria</h1>
              </div>
            </div>
          </div>
          <div className='card_container'>
            <div className='card'
                onClick={() => openModal('CryptoWallet')} style={{backgroundImage: `url(${crypto})`}}>
              <div className='overlay'>
                <h1 className='proj_title'>Crypto Wallet</h1>
              </div>
            </div>
          </div>
          <div className='card_container'>
            <div className='card'
                onClick={() => openModal('Markdown')}  style={{backgroundImage: `url(${markdown})`}}>
              <div className='overlay'>
                <h1 className='proj_title'>Markdown Previewer</h1>
              </div>
            </div>
          </div>
          <div className='card_container'>
            <div className='card'
                onClick={() => openModal('ReactGiphy')} style={{backgroundImage: `url(${react_giphy})`}}>
              <div className='overlay'>
                <h1 className='proj_title'>React Giphy</h1>
              </div>
            </div>
          </div>
          <div className='card_container'>
            <div className='card'
                onClick={() => openModal('ToDoApp')} style={{backgroundImage: `url(${toDo})`}}>
              <div className='overlay'>
                <h1 className='proj_title'>ToDo App</h1>
              </div>
            </div>
          </div>
          <div className='card_container'>
            <div className='card'
                onClick={() => openModal('MoneyApp')} style={{backgroundImage: `url(${money})`}}>
              <div className='overlay'>
                <h1 className='proj_title'>Money App</h1>
              </div>
            </div>
          </div>
          <div>
            {selectedProject === 'Indicaria' && <ModalIndicaria closeModal={closeModal} />}
            {selectedProject === 'CryptoWallet' && <ModalCryptoWallet closeModal={closeModal} />}
            {selectedProject === 'Markdown' && <ModalMarkdown closeModal={closeModal} />}
            {selectedProject === 'ReactGiphy' && <ModalReactGiphy closeModal={closeModal} />}
            {selectedProject === 'ToDoApp' && <ModalToDoApp closeModal={closeModal} />}
            {selectedProject === 'MoneyApp' && <ModalMoneyApp closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </div>
  )
}
