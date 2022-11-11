import './homePage.scss'
import Nav from './components/Nav'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Modal from './components/Modal'

import { useEffect, useState } from 'react'
import { useLottie } from 'lottie-react'
import loadingSVG from './images/魔杖_loading.json'
function HomePage() {
  const [loading, setLoading] = useState(false)
  const [pp, setpp] = useState([false, false, false, false, false])

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    const isPP = pp.some((item) => {
      return item === false
    })
    if (!isPP) {
      setOpenModal(true)
    }
  }, [pp])

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
  function setPP(index) {
    setpp((prev) => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }
  return (
    <>
      <div className="container">
        <Modal open={openModal} setOpenModal={setOpenModal} />
        <Nav />
        <One />
        <Two pp={pp[0]} setPP={setPP} />
        <Three pp={pp[1]} setPP={setPP} />
        <Four pp={pp[2]} setPP={setPP} />
        <Five last={pp[4]} pp={pp[3]} setPP={setPP} />
      </div>
    </>
  )
}

export default HomePage
