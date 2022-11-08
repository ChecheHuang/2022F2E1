import React from 'react'

function Three() {
  return (
    <section className="three">
      <h1>賽程時間</h1>
      <div className="threeOne">
        <div className="up">
          <div className="item active">
            <div>開始報名</div>
            <div></div>
            <div>
              10/13(四)早上11:00
              <br />
              至11/6(日)晚上23:59
            </div>
          </div>
          <div className="item">
            <div>開賽</div>
            <div></div>
            <div>
              UI組、團體組開賽10/31
              <br />
              前端組開賽11/7
            </div>
          </div>
          <div className="item">
            <div>登陸作品</div>
            <div></div>
            <div>
              10/31(一)中午12:00
              <br />
              至11/28(一)中午12:00
            </div>
          </div>
          <div className="item">
            <div>線上直播</div>
            <div></div>
            <div>
              11/3至11/24(每周四)
              <br />
            </div>
          </div>
        </div>
        <div className="down">
          <div className="item">
            <div>初選</div>
            <div></div>
            <div>12/05(五)</div>
          </div>
          <div className="item">
            <div>決選</div>
            <div></div>
            <div>12/05(五)</div>
          </div>
        </div>
        <div className="description">
          初選:將由六角學院前端、UI評審進行第一波篩選，並於12/5(五)公布初選佳作名單
          <br />
          決選:由三大企業針對該企業主題進行入圍最後篩選，並於12/23(五)公布企業得獎名單
        </div>
      </div>
    </section>
  )
}

export default Three
