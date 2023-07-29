import './about.scss'

import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} index={15} />
        </h1>
        <p>
          Courteous and enthusiastic, i am interested in IT
          and everything in its orbit. I recently began to be fascinated
          by web programming, e.g. developing apps and building websites.
        </p>
        <p>I'm quietly confident, naturally curious, and perpettualy working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If i need to define myself in one sentence that would be a family person,
          diving fanatic, and tech-obsessed!!!
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNode} color="#3C873A"/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
          </div>
        </div>
      </div>
    </div>
      <Loader type="pacman" />
    </>
  )
}

export default About