import pauloImage from '../Assets/paulo.png';
import '../Estilos/About.css';
function About() {
    return (
        <section className='about-container'>
            <div className='about-text'>
                <h2>Sobre Nosotros</h2>
                <p>Más que una charcuteria, una pasion.</p>
                <p>Sabor que nace de la tradición.</p>
            </div>
            <div>
                <img src={pauloImage} alt="Paulo en el frente del local" className='about-image' />
            </div>
        </section>
    )
}

export default About;