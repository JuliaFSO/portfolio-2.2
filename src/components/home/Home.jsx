import React from 'react'

import './home.css'

function Home() {
  return (

    <main className='main'>
      <div className="left-dotted-shape"></div>
      <div className='home_container'>
        <div className='bg_img'>
        </div>
        <div className='text_container'>
          <h1 className='h1_color'>{`${"I'M"}`} JULIA FACHIN</h1>
          <h1 className='h1_sub_color'>FULL STACK DEVELOPER</h1>
          <p className='home_text'>
            Greetings from Canada! {`${"I'm"}`} a <span className='highlight'>Full Stack Developer</span> with a unique twist {`${"– "}`}
            an HR background that adds a human touch to my code. Driven by my love for
            crafting <span className='highlight'>Front-end</span> magic, I'm eager to collaborate on coding adventures that bring ideas to life.
            {`${" Let's"}`} embark on a coding journey together!</p>
        </div>
      </div>
      <div className="right-dotted-shape"></div>
    </main>
  )
}

export default Home
