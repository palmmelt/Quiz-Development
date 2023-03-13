import React, { useContext } from 'react'
import { DataContect } from '../App'

const Menu = () => {
    const {setAppState} = useContext(DataContect);
  return (
    <div className='menu'>
      <h1>คำถามทั่วไป</h1>
      <button onClick={()=>setAppState('quiz')}>เริ่มทำแบบบททดสอบ</button>
    </div>
  )
}

export default Menu
