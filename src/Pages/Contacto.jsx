import Header from "../Componentes/Header";
import '../Estilos/Contacto.css'
import { IoCallOutline, IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import InstagramEmbed from "../Componentes/InstagramEmbed";


function Contacto() {
    return (
        <div>
            <Header />
            <div className="contacto-container">

                <div className="contacto-instacontainer">
                    <h1>Contacto</h1>
                    <div className="contacto-tarjetero">
                        <div className="contacto-tarjeta">
                            <IoCallOutline className="contacto-logo" />
                        </div>
                        <div className="contacto-tarjeta">
                            <MdMailOutline className="contacto-logo" />
                        </div>
                        <div className="contacto-tarjeta">
                            <IoLocationOutline className="contacto-logo" />
                        </div>
                        <div className="contacto-tarjeta">
                            <IoLogoWhatsapp className="contacto-logo" />
                        </div>

                    </div>
                    <div className="contacto-texto">
                        <p>Contáctanos si tenes preguntas sobre nuestros productos, un pedido, o simplemente para conocer más sobre nuestra charcutería</p>
                        <p>Horarios de Atención</p>
                        <p>Lunes a Viernes: 9:00 - 23:00</p>
                        <p>Sabados: 9:00 - 21:00</p>
                        
                    </div>
                </div>
                <div className="contacto-instacontainer">
                    <h1>Visitanos en Instagram</h1>

                    <InstagramEmbed />

                </div>

            </div>
        </div>
    )
}


export default Contacto;