import '../Estilos/Map.css';
import { FaWhatsapp } from "react-icons/fa";

function Map() {
    return (
        <section className='map-container'>
            <div className='map-text'>
                <h2>Donde Encontrarnos</h2>
                <p>3 de febrero 840, San Rafael, Mendoza 5600</p>
                <a href="https://api.whatsapp.com/send?phone=5492604810791&text=Quer%C3%A9s+hacerme+alguna+pregunta%2C+o+adquirir+productos%2C+env%C3%ADame+un+WhatsApp%21&fbclid=PAZXh0bgNhZW0CMTEAAafcPoerkQXpupFryV6uBE1yTknjrjjsNfNXB80kES-sdscDuY2nvMA3WcE7Gw_aem_P0Q1X5rkGW_rPm8_AxqPgQ" target='_blank'>
                        <FaWhatsapp className='wsp-map' />
                    </a>
                <p className='numero'>+54 9 260 481-0791
                    
                </p>
            </div>
            <div className='map-image' onClick={() => window.open("https://www.google.com/maps/place/El+Carmelo+Charcutería", "_blank")} style={{ cursor: "pointer" }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53793042.20832805!2d-146.38885979999998!3d-34.6226991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96790978bf21cd33%3A0xf26b2f275de509db!2sEl%20Carmelo%20Charcuter%C3%ADa!5e0!3m2!1ses-419!2sde!4v1756443509092!5m2!1ses-419!2sde"
                    className="map-frame"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </section >
    )
}
export default Map;