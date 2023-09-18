import './about.css';
import Profile from './profile.jsx';
import Skills from './skills.jsx';
import Experience from './experience.jsx';

export default function About() {
  return (
    <div className='about_container'>
      <h1 className='head_title'>ABOUT ME</h1>
      <div className='bg_img_profile'></div>
        <Profile />
      <hr className='line' />
        <Skills />
      <hr className='line' />
        <Experience />
    </div>
  )
}
