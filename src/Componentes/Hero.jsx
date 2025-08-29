
import '../Estilos/Hero.css'
import logo from '../Assets/logo.jpg'
function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <img src={logo} alt="Logo El Carmelo" className="hero-logo" />
                <div>
                    <h1>Sabores que cuentan historias</h1>
                    <button className="btn-explorar">
                        Ver Productos
                    </button>

                </div>

            </div>
        </section>
    )
}
export default Hero;