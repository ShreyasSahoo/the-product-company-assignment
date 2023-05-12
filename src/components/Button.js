import React from 'react'
const Button = ({direction,text}) => {
  return (
    <button className={direction} >
      {text}
    </button>
  )
}

export default Button
