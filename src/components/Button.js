import React,{useEffect} from 'react'

const Button = ({direction,text,setPosition,position,canMove,setCanMoveDown,setCanMoveLeft,setCanMoveRight,setCanMoveUp}) => {
    const handleMove=(text) =>{
        let { x, y } = position;
        const step = 50;
        switch (text) {
          case 'up':
            if (y > 0) y -= step;
            break;
          case 'down':
            if (y < 450) y += step;
            break;
          case 'left':
            if (x > 0) x -= step;
            break;
          case 'right':
            if (x < 450) x += step;
            break;
          default:
            alert('Invalid Input')
            return;
        }
    
        setPosition({ x, y });
      }
    const updateCanMove = ()=> {
        setCanMoveUp(position.y > 0);
        setCanMoveDown(position.y < 450);
        setCanMoveLeft(position.x > 0);
        setCanMoveRight(position.x < 450);
      }
     
      useEffect(()=>{
        updateCanMove()
      },[position])
      
    
  return (
    <button className={direction} onClick={()=>handleMove(text)} disabled={!canMove} >
      {text}
    </button>
  )
}

export default Button
