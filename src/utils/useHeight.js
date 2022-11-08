import { useState, useEffect } from 'react'

function useHeight(className) {
  const [containerHeight, setContainerHeight] = useState(0)
  useEffect(() => {
    const handleScroll = (event) => {
      setContainerHeight(event.target.scrollTop)
    }
    const container = document.querySelector(className)
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [className])

  return containerHeight
}

export default useHeight
