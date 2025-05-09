


import { useState } from 'react';
import './App.css';
import Header from './header';
import './header.css';
import Sticker from './images/sticker.png';
import FooterSection from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="rectangle">
        <div className="levelBox">
          <img src={Sticker} alt="" className="lvlSticker" />
          <h6 className="lvlnum">Level 2</h6>
        </div>
        <p className="find">Find the same image as fast as you can!</p>
      </div>

      <FooterSection />
    </>
  )
}

export default App
