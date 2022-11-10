import { useEffect, useState } from 'react'
import './app.scss'
import useMouse from './utils/useMouse'
import { v4 as uuidv4 } from 'uuid'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Page2 from './pages/Page2/Page2'
function App() {
  const mousePos = useMouse()
  const [cursors, setCursors] = useState([{ x: 500, y: 500 }])
  useEffect(() => {
    const addStar = setInterval(() => {
      if (mousePos.x === 0 || mousePos.y === 0 || !uuidv4()) return
      setCursors((prev) => {
        const newState = [
          ...prev,
          { id: uuidv4(), x: mousePos.x - 4, y: mousePos.y },
        ]
        if (newState.length > 5) newState.shift()
        return newState
      })
    }, 400)

    return () => clearInterval(addStar)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/page2" element={<Page2 />} />
        </Routes>
      </HashRouter>
      {cursors.map((position, index) => {
        const { x, y, id } = position
        return (
          <div
            key={id || index}
            className="cursor"
            style={{
              top: y + 'px',
              left: x + 'px',
            }}
          />
        )
      })}
    </>
  )
}
export default App
