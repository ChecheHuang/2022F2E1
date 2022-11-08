import './homePage.scss'
import Nav from './components/Nav'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import { useEffect, useState } from 'react'
import { useLottie } from 'lottie-react'
import loadingSVG from './images/魔杖_loading.json'
// import test2 from './images/scroll_down.json'
// import test3 from './images/swipe_up.json'
function HomePage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  const options = {
    animationData: loadingSVG,
    loop: true,
  }
  const { View } = useLottie(options)
  if (loading) return <div className="loading">{View}</div>
  return (
    <>
      <div className="container">
        <Nav />
        <One />
        <Two />
        <Three />
      </div>
    </>
  )
}

export default HomePage
