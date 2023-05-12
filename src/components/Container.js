import React from 'react'
import Button from './Button'
import Main from './Main'
const Container = () => {
  return (
    <div className='container'>
      <Button direction="vertical" text="Left"/>
      <Main />
      <Button direction="vertical" text="Right"/>
    </div>
  )
}

export default Container
