import { Link } from 'react-router-dom';

import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar_container'>
      <Link to="/" id="home" className='navbar_item home'>
        <span className='link_span'>Home</span></Link>
      <Link to="/about" id="about" className='navbar_item about'>
        <span className='link_span'>About</span></Link>
      <Link to="/projects" id="projects" className='navbar_item projects'>
        <span className='link_span'>Projects</span></Link>
      <Link to="/contact" id="contact" className='navbar_item contact'>
        <span className='link_span'>Contact</span></Link>
    </div>
  )
}
