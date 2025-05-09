

import Logo from './images/FlipBitLogo.png'
import Avatar from './images/GameAvatar.png'

export default function Header() {

  return(
    <nav>
      <div className="header">
        
        <div className="navLeft">
          <div className="score-container container">
            <p className="score">Score</p>
            <p className="scoreValue box">650</p>
          </div>

          <div className="coins-container container">
            <p className="coins">Coins</p>
            <p className="coinValue box">100</p>
          </div>
        </div>

        <div className="logoBox">
          <img src={Logo} alt="" className="logo" />
        </div>

        <div className="head-mpty"></div>

        <img src={Avatar} alt="" className="gameAvatar" />

      </div>
    </nav>
  )
}