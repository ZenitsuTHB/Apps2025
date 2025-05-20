import React, { useContext } from 'react'

function Colors() {

  const setColor = useContext

  function assignColor(event) {

    //Read the color to assign from the little circle
    let color = event.target.style.backgroundColor

    //assign the color to the variable
    setColor(color);
  }
  return (
    <div className='colors'>

      <div className='color' onClick={() => setColor('lightpink')}></div>
      <div className='color'></div>
      <div className='color'></div>
      <div className='color'></div>
    </div>
  )
}

export default Colors

