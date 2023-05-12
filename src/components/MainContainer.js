import React from 'react'
import Button from './Button'
import Container  from './Container'
const Box = () => {
  return (
    <div class='main-container'>
      <Button direction='horizontal' text="Up"/>
      <Container/>
      <Button direction='horizontal' text="Down"/>
      
    </div>

  )
}

export default Box
