import { useState, useEffect } from 'react'
import './App.css'
import VideoBackground from './components/videoBackground'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const countdownDate = new Date('2024-08-01T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <VideoBackground>
        <div id="video-background">
          <div className="countdown-wrapper">
            <h1>
              {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes}{" "}
              minutos, {timeLeft.seconds} segundos
            </h1>
          </div>
        </div>
      </VideoBackground>
    </>
  );
}

export default App
