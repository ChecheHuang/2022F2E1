import React from 'react'
import './modal.scss'
function Modal({ open, setOpenModal }) {
  if (!open) return null
  return (
    <div className="overlay">
      <div className="modalContainer">
        <p
          onClick={() => {
            setOpenModal(false)
          }}
          className="closeBtn"
        >
          X
        </p>
        <div>恭喜您!獲得六角課程專屬折扣碼</div>
        <div>【HEXSCHOLL2022】</div>
      </div>
    </div>
  )
}

export default Modal
