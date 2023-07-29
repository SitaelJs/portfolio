import './contacts.scss'
import "mapbox-gl/dist/mapbox-gl.css";

import emailjs from '@emailjs/browser'
import React, { useEffect, useRef, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import {Map, Marker} from 'react-map-gl';


const Contacts = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    console.log('refForm', refForm.current)
    e.preventDefault()
    emailjs.sendForm('service_t909kqa', 'template_athi9dl', refForm.current, 'ZmyeyNePU3W4VpmCH')
      .then(() => {
          alert('Message successfully sent!'); window.location.reload()
        },
        () => {
          alert('Failed to send message, please try again.')
        },
      )

  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass}
                             strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                             index={15} />
          </h1>
          <p>
            I'm interested in all opportunities, open for all of your offers especially ambitious or
            large projects. However if you have other requests, you also can contact me in form below.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required />
                </li>
                <li>
                  <input type='submit' value='SEND' className='flat-button' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Alexander Klimanov,
          <br />
          Russian Federation
          <br />
          Moscow, Butlerova st. 4  <br />
          <span>klimanovfresh@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <Map
            mapboxAccessToken="pk.eyJ1Ijoic2l0YWVsanMiLCJhIjoiY2t0ZW9lbjJkMDBkMzJubnVqcHdiYXlrcSJ9.OV5HZaEnajAScFD5-Nk1yQ"
            initialViewState={{
              longitude: 37.525163,
              latitude:  55.653181,
              zoom: 13
            }}
            style={{width:"100%", height: "100%"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker longitude={37.525163} latitude={55.653181} />
          </Map>

        </div>
      </div>
      <div />
      <Loader type='pacman' active />
    </>
  )
}

export default Contacts