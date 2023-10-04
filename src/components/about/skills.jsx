import './about.css';
import Nextjs from '../../assets/images/nextjs_icon.png';
import Redux from '../../assets/images/redux_icon.png';
import Postgresql from '../../assets/images/postgresql_icon.png';
import Rails from '../../assets/images/rails_icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareJs, faReact, faHtml5, faNode, faCss3Alt, faBootstrap } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
  return (
    <div className='section_skills'>
      <div className='sub_title'>SKILLS</div>
      <div className='skill_column'>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <FontAwesomeIcon icon={faSquareJs} className='skill_icon' style={{ color: '#fff' }} />
          </div>
          <span className='skill_text'>Javascript</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <FontAwesomeIcon icon={faReact} className='skill_icon' style={{ color: '#fff' }} />
          </div>
          <span className='skill_text'>React.js</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <img src={Nextjs} className='skill_icon' alt='Next.js' />
          </div>
          <span className='skill_text'>Next.js</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <FontAwesomeIcon icon={faNode} className='skill_icon' style={{ color: '#fff' }} />
          </div>
          <span className='skill_text'>Node.js</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <img src={Redux} className='skill_icon' alt='Redux' />
          </div>
          <span className='skill_text'>Redux</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <FontAwesomeIcon icon={faHtml5} className='skill_icon' style={{ color: '#fff' }} />
          </div>
          <span className='skill_text'>HTML5</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <FontAwesomeIcon icon={faBootstrap} className='skill_icon' style={{ color: '#fff' }} />
          </div>
          <span className='skill_text'>Bootstrap</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <FontAwesomeIcon icon={faCss3Alt} className='skill_icon' style={{ color: '#fff' }} />
          </div>
          <span className='skill_text'>CSS3</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <img src={Rails} className='skill_icon' alt='Ruby on Rails' />
          </div>
          <span className='skill_text'>Ruby on Rails</span>
        </div>
        <div className='skill_set'>
          <div className='skill_icon_bkg'>
            <img src={Postgresql} className='skill_icon' alt='PostgreSQL' />
          </div>
          <span className='skill_text'>PostgreSQL</span>
        </div>
      </div>
    </div>
  )
}
