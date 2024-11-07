import React from 'react'

function Topmenu() {
  return (
    <div className='containerr'>
        {/* หัวข้อ */}
      <h2 className='texth2'>Top menu Burgerking</h2>

            {/* button menu */}
      <div className='menu'>
        <button className='buttonn'>ALL</button>
        <button className='buttonn'>Top-burger</button>
        <button className='buttonn'>Top-Pizzar</button>
        <button className='buttonn'>$$$$</button>
        <button className='buttonn'>$$$</button>
        <button className='buttonn'>$$</button>
      </div>


        {/* CRAD MENU */}
        <div className="boxcrad">
            <img src="./public/foodone.jpg" alt="" />
            <img src="./public/foodone.jpg" alt="" />
            <img src="./public/foodone.jpg" alt="" />
            <img src="./public/foodone.jpg" alt="" />
            
        </div>


    </div>
  )
}

export default Topmenu
