import Header from "../Componentes/Header";
import '../Estilos/Contacto.css'
import { IoCallOutline, IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import InstagramEmbed from "../Componentes/InstagramEmbed";
import fiambreImage from '../assets/fiambres.png'
import logo from '../assets/logo.jpg'

function Contacto() {
    return (
        <div>
            <Header />
            <div className="contacto-container">

                <div className="contacto-instacontainer">
                    <h1>Contacto</h1>
                    <div className="contacto-tarjetero">
                        <div
                            onClick={() => window.location.href = 'tel:+5492604810791'} 
                            className="contacto-tarjeta">
                            <IoCallOutline className="contacto-logo" />
                        </div>
                        <div
                            onClick={() => window.location.href = 'mailto:tinchone@gmail.com?subject=Hola&body=Quiero contactarte'} 
                            className="contacto-tarjeta">
                            <MdMailOutline className="contacto-logo" />
                        </div>
                        <div
                            onClick={() => window.open('https://www.google.com/maps?ll=-34.622699,-68.341985&z=1&t=m&hl=es-419&gl=DE&mapclient=embed&cid=17468107425812122075', '_blank')} 
                            className="contacto-tarjeta">
                            <IoLocationOutline className="contacto-logo" />
                        </div>
                        <div
                            onClick={() => window.open('https://wa.me/+5492604810791', '_blank')} 
                            className="contacto-tarjeta">
                            <IoLogoWhatsapp className="contacto-logo" />
                        </div>

                    </div>
                    <div className="contacto-texto">
                        <p>Contáctanos si tenes preguntas sobre nuestros productos, un pedido, o simplemente para conocer más sobre nuestra charcutería</p>
                        <p>Horarios de Atención</p>
                        <p>Lunes a Viernes: 9:00 - 23:00</p>
                        <p>Sabados: 9:00 - 21:00</p>
                        
                            <img className="contacto-image" src={logo} alt="Imagen de salames" />
                        
                        
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