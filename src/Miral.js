import React, { useEffect, useState } from 'react'
import './Miral.css'
import Image from "./imag.jpg"

function Miral() {
  const [name, setName] = useState('mario');
  const handleClick = () => {
        setName("Nike Moke");
   
  }
  const [number, setNumber] = useState(0)

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };


 
  function onClick() {
    alert('You clicked me!');
  }


  // const today = new Date();
  const [color, setColor] = useState("color");
  const clicke=color=>{
    setColor(color)
    // setColor((prev)=> prev ===)
  }
  useEffect(()=>{
    // console.log('usefect')
    document.body.style.backgroundColor = color
     
  }, [color])


  const [walk, setWalk] = useState(true);

  function yassine() {
    setWalk(!walk);
  }



  return (
    <div className='Miral'>
        <div className='childern'>
            
        <div className='item'>
          <img src={Image }alt='' className='plistImag'/>
          <p className='Phq'>{name}</p>
          <button className='Btn-mi' onClick={handleClick}>clicke</button>
        </div>
        <div className='item'><img/>
          <p className='Phq'>{number}</p>
          <button className='mkh' onClick={() =>setNumber((prev) => prev + 1)}>clicke</button></div>
        <div className='item'>
        <img/>
          <p className='Phq'></p>
          <button>clicke</button>
        </div>
         <div className='item'>
         <img/>

         
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        
      />
      <h1>{user.name}</h1>
          <p className='Phq'></p>
          <button>clicke</button>
         </div>
        
        </div>
        <div className='choldern2'>
           <div className='item'>
           <img/>
          <p className='Phq'></p>
          <button onClick={onClick}>
            
            
            clicke</button>
           </div>
        <div className='item'>
        <img/>
          <p className='Phq'></p>
          <button onClick={()=> clicke('green')}>
            clickee3</button>
        </div>
        <div className='item'>
        <img/>
          
          <button  onClick={yassine}>clicke6 {walk ? 'Stop' : 'Walk'}</button>
          <p className='Phq'
          style={{
            color: walk ? 'darkgreen' : 'darkred'
          }}
          > {walk ? 'Walk' : 'Stop'}</p>
        </div>
         <div className='item'>
         <img/>
          <p className='Phq'></p>
          <button>clicke</button>
         </div>
        </div>
        
       
       
        
    </div>
  )
}

export default Miral