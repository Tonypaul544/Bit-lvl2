

import FooterIMG from './images/footer.png'
import './footer.css';
export default function footerSection() {

  return(
    <footer>
      <div className="footer">
        <img src={FooterIMG} alt="" className="footerIMG" />
      </div>
    </footer>
  );
}