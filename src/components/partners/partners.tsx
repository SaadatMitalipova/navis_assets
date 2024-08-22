import "./partners.css";
import aeroNav from '../images/aeroNav.png'
import KAI from '../images/KAI.png'
import gazprom from '../images/gazprom.png'
import manas from '../images/manas.png'
import MMC from '../images/mmc.png'


function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners__content">
          <img src={aeroNav} alt="" className="logo-partners" />
          <img src={KAI} alt="" className="logo-partners" />
          <img src={gazprom} alt="" className="logo-partners" />
          <img src={manas} alt="" className="logo-partners" />
          <img src={MMC} alt="" className="logo-partners" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
