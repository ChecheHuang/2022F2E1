import { useState, useEffect, useCallback } from 'react'

function useMouseY() {
  //   const [mousePosY, setMousePosY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const mouseListener = useCallback(
    (event) => {
      setMousePos((prev) => {
        const newState = prev
        newState.x = event.pageX
        newState.y = event.pageY
        return newState
      })
    },
    [setMousePos]
  )

  useEffect(() => {
    window.addEventListener('mousemove', mouseListener)
    return () => {
      window.removeEventListener('mousemove', mouseListener)
    }
  }, [mouseListener])

  return mousePos
}

export default useMouseY
