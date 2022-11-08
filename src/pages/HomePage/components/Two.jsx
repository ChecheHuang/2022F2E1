import React, { useState } from 'react'
import twoLogo from '../images/twoLogo.png'
import twoItem1 from '../images/twoItem1.png'
import twoItem2 from '../images/twoItem2.png'
import twoItem3 from '../images/twoItem3.png'
import twoItem11 from '../images/twoItem1-1.png'
import twoItem12 from '../images/twoItem1-2.png'
import twoItem13 from '../images/twoItem1-3.png'

import useHeight from '../../../utils/useHeight'

import { useEffect } from 'react'

export default function Two() {
  const containerHeight = useHeight('.container')
  const two = document.querySelector('.two')
  const [shows, setShows] = useState([false, false, false])
  useEffect(() => {
    const diff = two?.offsetTop - containerHeight || 1000000
    const num = 800
    if (diff < num && diff > 0) {
      setShows((prev) => {
        const newState = prev
        newState[0] = true
        return newState
      })
    } else if (diff < 0 && diff > -num) {
      setShows((prev) => {
        const newState = prev
        newState[1] = true
        return newState
      })
    } else if (diff < -num && diff > -2 * num) {
      setShows((prev) => {
        const newState = prev
        newState[2] = true
        return newState
      })
    } else {
    }
  }, [containerHeight, two?.offsetTop])

  const twoItem = [
    {
      title: '視差滾動 Parallax Scrolling',
      logo: twoItem1,
      img: twoItem11,
      h1: 'The F2E 活動網站設計',
      text: '請參考本屆官網的手頁視差滾動技巧，並請您重新redesign本頁面來設計',
    },
    {
      title: '線上簽屬 Canvas',
      logo: twoItem2,
      img: twoItem12,
      h1: '今晚，我想來點點簽',
      text: '每次都要PDF簽名都要列印出來再掃描好麻煩，自幹一個Web版本的簽名服務吧!',
    },
    {
      title: 'Scrum JS draggable',
      logo: twoItem3,
      img: twoItem13,
      h1: 'Scrum 新手村',
      text: ' 設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解Scrum',
    },
  ]
  return (
    <section className="two">
      <img className="twoLogo" src={twoLogo} alt="" />
      <div className="twoText1">年度最強合作，三大關卡來襲</div>
      <div className="underLine"></div>
      {twoItem.map((item, index) => {
        return (
          <TwoItem show={shows[index]} key={index} item={item} index={index} />
        )
      })}
    </section>
  )
}

function TwoItem({ item, index, show }) {
  const { title, logo, img, h1, text } = item

  return (
    <div
      className={
        !show
          ? index === 1
            ? 'unShowRight twoItem'
            : 'unShowLeft twoItem'
          : 'twoItem'
      }
    >
      <div className="itemNav">
        <div>{title}</div>
        <img src={logo} alt="" />
      </div>
      <div className="itemContainer">
        <div className="twoItemImgContainer">
          <img src={img} alt="" />
        </div>
        <div className="itemText">
          <h1>{h1}</h1>
          <p>{text}</p>
          <div className="buttonContainer">
            <button>關卡攻略</button>
            <button>投稿</button>
          </div>
        </div>
      </div>
    </div>
  )
}
