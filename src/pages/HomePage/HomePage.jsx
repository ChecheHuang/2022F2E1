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
import pp1 from './images/pp1.png'
import pp2 from './images/pp2.png'
import pp3 from './images/pp3.png'
import pp4 from './images/pp4.png'
import pp5 from './images/pp5.png'

// import test2 from './images/scroll_down.json'
// import test3 from './images/swipe_up.json'
function HomePage() {
  const [loading, setLoading] = useState(false)
  const [pp, setpp] = useState([
    {
      className: 'pp1 pp',
      img: pp1,
      isClick: false,
    },
    {
      className: 'pp2 pp',
      img: pp2,
      isClick: false,
    },
    {
      className: 'pp3 pp',
      img: pp3,
      isClick: false,
    },
    {
      className: 'pp4 pp',
      img: pp4,
      isClick: false,
    },
    {
      className: 'pp5 pp',
      img: pp5,
      isClick: false,
    },
  ])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    let i = 0
    for (let v of pp) {
      if (v.isClick) i++
    }
    if (i === 5) {
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
  return (
    <>
      <div className="container">
        <Modal open={openModal} setOpenModal={setOpenModal} />

        {/* {pp.map((item, index) => {
          const { className, img, isClick } = item
          return (
            <div
              onClick={() => {
                const newPP = [...pp]
                newPP[index].isClick = true
                setpp(newPP)
              }}
              key={index}
              className={className}
            >
              {!isClick && <img src={img} alt="" />}
            </div>
          )
        })} */}

        <Nav />
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
      </div>
    </>
  )
}

export default HomePage
