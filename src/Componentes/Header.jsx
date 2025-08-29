import '../Estilos/Header.css';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <header className="header">

      <nav className="nav">
        <a href="https://api.whatsapp.com/send?phone=5492604810791&text=Quer%C3%A9s+hacerme+alguna+pregunta%2C+o+adquirir+productos%2C+env%C3%ADame+un+WhatsApp%21&fbclid=PAZXh0bgNhZW0CMTEAAafcPoerkQXpupFryV6uBE1yTknjrjjsNfNXB80kES-sdscDuY2nvMA3WcE7Gw_aem_P0Q1X5rkGW_rPm8_AxqPgQ" target='_blank'>
          <FaWhatsapp className='wsp-header' />
        </a>
        <NavLink to="/" className="nav-link" end  >Inicio</NavLink>
        {/*<NavLink to="/nosotros" className="nav-link" >Nosotros</NavLink>
        <NavLink to="/productos" className="nav-link" >Productos</NavLink>*/}
        <NavLink to="/contacto" className="nav-link" >Contacto</NavLink>

      </nav>

    </header>
  );
}
export default Header;