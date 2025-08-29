import { FaRegCopyright, FaInstagram } from "react-icons/fa6";
import '../Estilos/Footer.css'
import { FaWhatsapp } from "react-icons/fa";
import logoCarmelo from '../assets/logo.jpg'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer >
            <div>
                <NavLink to="/">
                    <img src={logoCarmelo} alt="logo el carmelo" className="logoCarmelo-footer" />
                </NavLink>


            </div>
            <div className="text-footer">
                <FaRegCopyright className="logo-footer" />
                <p className="texto-footer">El Carmelo</p>
            </div>
            <div className="redes-footer">
                <a target="_blank" href="https://www.instagram.com/elcarmelocharcuteria/?igsh=MTd1eTFzOW4wOHJycA%3D%3D&utm_source=qr">
                    <FaInstagram className="insta-footer" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5492604810791&text=Quer%C3%A9s+hacerme+alguna+pregunta%2C+o+adquirir+productos%2C+env%C3%ADame+un+WhatsApp%21&fbclid=PAZXh0bgNhZW0CMTEAAafcPoerkQXpupFryV6uBE1yTknjrjjsNfNXB80kES-sdscDuY2nvMA3WcE7Gw_aem_P0Q1X5rkGW_rPm8_AxqPgQ" target='_blank'>
                    <FaWhatsapp className='wsp-map' />
                </a>

            </div>



        </footer>
    )
}

export default Footer;