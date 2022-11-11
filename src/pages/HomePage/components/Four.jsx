import React, { useState } from 'react'

import one from '../images/Frame 13.png'
import two from '../images/Frame 12.png'
import three from '../images/Frame 11.png'
import useHeight from '../../../utils/useHeight'
import pp3 from '../images/pp3.png'
import { useEffect } from 'react'
function Four({ pp, setPP }) {
  const containerHeight = useHeight('.container')
  const four = document.querySelector('.four')
  const [show, setShow] = useState(false)
  useEffect(() => {
    const diff = four?.offsetTop - containerHeight || 1000000
    const num = 400
    if (diff < num && diff > 0) {
      setShow(true)
    }
  }, [containerHeight, four?.offsetTop])
  return (
    <section className="four">
      {!pp && (
        <img
          onClick={() => {
            setPP(2)
          }}
          className="pp3"
          src={pp3}
          alt=""
        />
      )}
      <h1>獎項</h1>
      <div className="imgContainer">
        <img className={show ? '' : 'unShow'} src={one} alt="" />
        <img className={show ? '' : 'unShow'} src={two} alt="" />
        <img className={show ? '' : 'unShow'} src={three} alt="" />
        <div className="fourText">已上皆提供完賽數位獎狀</div>
      </div>
    </section>
  )
}

export default Four
