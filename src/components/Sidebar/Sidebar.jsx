import './sidebar.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoA from '../../assets/images/logo_a.png'
import LogoSubtitle from '../../assets/images/logo_s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoA} alt='logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='alexk' />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contacts'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>
      <ul>
        <li>
          {/* eslint-disable jsx-a11y/anchor-has-content */}
          <a target='_blank' rel='noreferrer'
             href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BA%D0%BB%D0%B8%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2-6bab1b225/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target='_blank' rel='noreferrer'
             href='https://github.com/SitaelJs'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target='_blank' rel='noreferrer'
             href='https://t.me/AlexCli'>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar