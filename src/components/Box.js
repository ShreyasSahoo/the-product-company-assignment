import React from 'react'
const Box = ({position}) => {

  return (
    <div className='box' style={{
        top: `${position.y}px`,
        left: `${position.x}px`
      }}>
      
    </div>
  )
}

export default Box;
