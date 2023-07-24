import './animatedLatters.scss'

const AnimatedLetters = ({ letterClass, strArray, index }) => {

  return <span>
      {
        strArray.map((char, idx) => (
          <span key={char + idx} className={`${letterClass} _${idx + index}`}>
            {char}
          </span>
        ))
      }
  </span>
}

export default AnimatedLetters