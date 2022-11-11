import React, { useState } from 'react'
import { useLottie } from 'lottie-react'
import loadingSVG from '../images/魔杖_loading.json'
import one from '../images/1.gif'
import two from '../images/2.gif'
import three from '../images/3.gif'
import four from '../images/4.gif'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import twoItem1 from '../images/twoItem1.png'
import twoItem2 from '../images/twoItem2.png'
import twoItem3 from '../images/twoItem3.png'
import pp4 from '../images/pp4.png'
import pp5 from '../images/pp5.png'

function Five({ pp, last, setPP }) {
  const [show, setShow] = useState(false)
  const options = {
    animationData: loadingSVG,
    loop: true,
  }
  const { View } = useLottie(options)
  return (
    <section className="five">
      {!pp && (
        <img
          onClick={() => {
            setPP(3)
          }}
          className="pp4"
          src={pp4}
          alt=""
        />
      )}
      {!last && (
        <img
          onClick={() => {
            setPP(4)
          }}
          className="pp5"
          src={pp5}
          alt=""
        />
      )}

      <div className={show ? 'fiveContainer hide' : 'fiveContainer '}>
        <h1>意想不到的好康</h1>
        <div>
          請點擊
          <span
            onClick={() => {
              setShow(true)
            }}
          >
            {View}
          </span>
        </div>
      </div>
      <div className={show ? 'fiveContainer2 ' : 'fiveContainer2 hide'}>
        <h1>各界大神直播分享</h1>
        <div className="itemContainer">
          <div className="item">
            <div className="itemTitle">網站的動態趨勢</div>
            <img src={one} alt="" />
            <div className="description">
              李明
              <br />
              版塊設計創辦人兼總監
            </div>
            <div className="time">11/03(四)20:00~21:30</div>
          </div>
          <div className="item">
            <div className="itemTitle">
              jQuery也可以做
              <br />
              到的互動效果
            </div>
            <img src={two} alt="" />
            <div className="description">
              Leo
              <br />
              Angular Taiwan 傳教士
            </div>
            <div className="time">11/10(四)20:00~21:30</div>
          </div>
          <div className="item">
            <div className="itemTitle">
              網頁可以拖拖拉拉
              <br />
              draggable.js介紹
            </div>
            <img src={three} alt="" />
            <div className="description">
              邱繼緯
              <br />
              前端工程師
            </div>
            <div className="time">11/17(四)20:00~21:30</div>
          </div>
          <div className="item">
            <div className="itemTitle">
              互動式網頁設計工程
              <br />
              師該具備那些技能?
            </div>
            <img src={four} alt="" />
            <div className="description">
              吳哲宇
              <br />
              墨雨互動設計創辦人
            </div>
            <div className="time">11/24(四)20:00~21:30</div>
          </div>
        </div>
        <footer>
          <div className="icons">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
          </div>
          <div className="bottom">
            <h1>贊助單位</h1>
            <div className="logos">
              <img src={twoItem1} alt="" />
              <img src={twoItem2} alt="" />
              <img src={twoItem3} alt="" />
            </div>
            <p> 六角日報&copy;Code:Carl / Design:KT </p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Five
