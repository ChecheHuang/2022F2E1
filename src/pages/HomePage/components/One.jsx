import React from 'react'
import oneImg from '../images/oneImg.png'
import oneImg2 from '../images/oneImg2.png'
import paperTop from '../images/paperTop.png'
import paperDownLeft from '../images/paperDownLeft.png'
import paperDownRight from '../images/paperDownRight.png'
import useHeight from '../../../utils/useHeight'
import slideDown from '../images/scroll_down.json'
import { useLottie } from 'lottie-react'

export default function One() {
  const options = {
    animationData: slideDown,
    loop: true,
  }
  const { View } = useLottie(options)
  const containerHeight = useHeight('.container')
  const pageTopStyle = { transform: `translateY(-${containerHeight}px)` }
  const pageTopStyle2 = { transform: `translateY(-${containerHeight * 20}px)` }
  const pageImg2 = {
    transform: `translateY(-${
      window.innerWidth > 400
        ? containerHeight < 560
          ? containerHeight
          : 560
        : containerHeight < 940
        ? containerHeight
        : 940
    }px)`,
  }
  const pageBottomStyle = { transform: `translateY(${containerHeight}px)` }
  return (
    <section
      className="one"
      // style={{ paddingBottom: `${window.innerHeight - 608}px` }}
    >
      <div className="oneContainer">
        <div className="title">
          <h1>THE F2E</h1>
          <div>4th</div>
        </div>
        <div className="text1">前端工程師和介面 設計師，攜手合 作拿獎金</div>
        <div className="text2">
          羨慕別人的酷酷網頁動畫?滿足不了同事的許願?動畫技能樹太雜無從下手?
        </div>
        <img className="oneImg" src={oneImg} alt="" />
        <div className="text3">
          <div className="item">
            <div>報名總人數</div>
            <div>
              <span>1158</span>人
            </div>
          </div>
          <div className="item">
            <div>個人賽人數</div>
            <div>
              <span>1052</span>人
            </div>
          </div>
          <div className="item">
            <div>報名總人數</div>
            <div>
              <span>41</span>人
            </div>
          </div>
        </div>
        <div style={pageImg2} className="oneImg2"></div>
        {/* <img
          style={pageBottomStyle}
          className="paperDownRight"
          src={paperDownRight}
          alt=""
        /> */}
        {/* <img style={pageTopStyle} className="paperTop" src={paperTop} alt="" /> */}
        {/* <img
          style={pageBottomStyle}
          className="paperDownLeft"
          src={paperDownLeft}
          alt=""
        /> */}
        {/* <div style={pageTopStyle2} className="slideDown">
          {View}
        </div> */}
      </div>
    </section>
  )
}
