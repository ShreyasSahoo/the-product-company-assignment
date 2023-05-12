import React,{useState} from 'react'
import Button from './Button'
import Container  from './Container'
const Box = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMoveUp, setCanMoveUp] = useState(false);
  const [canMoveDown, setCanMoveDown] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);
  const [canMoveRight, setCanMoveRight] = useState(true);
  return (
    <div class='main-container'>
      <Button canMove={canMoveUp} setCanMoveDown={setCanMoveDown} setCanMoveUp={setCanMoveUp} setCanMoveLeft={setCanMoveLeft} setCanMoveRight={setCanMoveRight} direction='horizontal' text="up" position={position} setPosition={setPosition}/>

      <Container setPosition={setPosition} setCanMoveDown={setCanMoveDown} setCanMoveUp={setCanMoveUp} setCanMoveLeft={setCanMoveLeft} setCanMoveRight={setCanMoveRight} canMoveRight={canMoveRight} canMoveLeft={canMoveLeft}  position={position}/>
      
      <Button canMove={canMoveDown} setCanMoveDown={setCanMoveDown} setCanMoveUp={setCanMoveUp} setCanMoveLeft={setCanMoveLeft} setCanMoveRight={setCanMoveRight} direction='horizontal' text="down" position={position}  setPosition={setPosition}/>
      
    </div>

  )
}

export default Box
