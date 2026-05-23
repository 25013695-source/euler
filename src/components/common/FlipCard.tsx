import { useState } from 'react'
import './FlipCard.css'

interface FlipCardProps {
  title: string
  imageSrc: string
  imageAlt?: string
  frontText: string
  backText: string
}

const FlipCard = ({ title, imageSrc, imageAlt = '', frontText, backText }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flip-card-container">
      <button
        type="button"
        className={`flip-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped((current) => !current)}
        aria-pressed={flipped}
      >
        <div className="flip-card-inner">
          <div className="flip-card-face flip-card-front">
            <img src={imageSrc} alt={imageAlt} className="flip-card-image" />
            <div className="flip-card-content">
              <h2>{title}</h2>
              <p>{frontText}</p>
            </div>
          </div>

          <div className="flip-card-face flip-card-back">
            <div className="flip-card-content">
              <h2>Más información</h2>
              <p>{backText}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default FlipCard
