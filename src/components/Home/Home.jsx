import './home.scss'
import LogoA from '../../assets/images/logo_a.png'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'e', 'x', 'K']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoA} alt='developer' />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
          </h1>
          <h2>
            Fullstack Developer / React & node.js
          </h2>
          <Link className='flat-button' to='/contacts'>CONTACT ME</Link>
        </div>
      </div>
    </>
  )
}

export default Home