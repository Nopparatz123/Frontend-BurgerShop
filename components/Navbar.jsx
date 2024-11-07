import React from 'react'

function Navbar() {



  return (
    <body>
      <header>
        <div className='box'>
    <div class="container">
        {/* LOGO */}
          <img class='imgs'src="./public/pngegg.png" alt="" />

            {/* SERCH&LOGIN */}
           <input class='input1' type="text" placeholder='Search' />
           <button className='Loginbutton'>LOGIN</button>  
      </div>
    </div>
      </header>
    </body>
  )
}

export default Navbar
