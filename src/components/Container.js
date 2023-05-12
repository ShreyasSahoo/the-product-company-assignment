import React from 'react'
import Button from './Button'
import Main from './Main'
const Container = ({position,setPosition,canMoveLeft,canMoveRight,setCanMoveDown,setCanMoveLeft,setCanMoveRight,setCanMoveUp}) => {
  return (
    <div className='container'>
      <Button setCanMoveDown={setCanMoveDown} setCanMoveUp={setCanMoveUp} setCanMoveLeft={setCanMoveLeft} setCanMoveRight={setCanMoveRight} canMove={canMoveLeft} setPosition={setPosition} position={position} direction="vertical" text="left"/>
      <Main position={position}/>
      <Button setCanMoveDown={setCanMoveDown} setCanMoveUp={setCanMoveUp} setCanMoveLeft={setCanMoveLeft} setCanMoveRight={setCanMoveRight} canMove={canMoveRight} setPosition={setPosition} position={position}  direction="vertical" text="right"/>
    </div>
  )
}

export default Container
