import React from 'react'

import './home.css'

function Home() {
  return (

    <main className='main'>
      <div className='shape_block'></div>
      <div className='home_container'>
        <div className='bg_img col-4 col-lg-8'>
        </div>
        <div className='text_container col-8 col-lg-8'>
          <h1 className='h1_color'>{`${"I'M"}`} JULIA FACHIN</h1>
          <h1 className='h1_sub_color'>FULL STACK DEVELOPER</h1>
          <p className='home_text'>
            A full stack developer from Brazil, with HR background,
            and a real passion for Front-end magic, based on Canada!
          {`${" Let's "}`}code and create something awesome together!</p>
        </div>
      </div>
    </main>
  )
}

export default Home
