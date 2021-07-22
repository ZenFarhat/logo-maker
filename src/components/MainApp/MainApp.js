import React, { useEffect, useState } from 'react'
import './MainApp.css'

function MainApp() {
  const [coordinates, setCoordinates] = useState([0, 0])

  useEffect(() => {}, [coordinates])

  const dragEl = (e) => {
    let x = e.pageX
    let y = e.pageY
    setCoordinates([x, y])
  }

  return (
    <div className='mainApp'>
      <div className='canvas'>
        <div
          draggable={true}
          onDragEnd={dragEl}
          className='circle'
          style={{ left: coordinates[0], top: coordinates[1] }}
          id='circle'
        ></div>
      </div>
    </div>
  )
}

export default MainApp
