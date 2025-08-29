import Hero from '../Componentes/Hero'
import About from '../Componentes/About'
import Map from '../Componentes/Map'
import Header from '../Componentes/Header'
import ProductCard from '../Componentes/ProductCard'
import '../Estilos/Home.css'

function Home() {
    return (
        <>
            <Hero />
            <Header />

            <section className='home-section'>
                <h2 className='home-h2'>Nuestros Productos</h2>
                <div className='product-card-container'>
                    <ProductCard imagen="jamonImage"/>
                    <ProductCard imagen="embutidoImage"/>
                    <ProductCard imagen="quesoImage"/>
                    <ProductCard imagen="gourmentImage"/>
                </div>
                
                <About />
                <Map />
            </section>
        </>
    );
}

export default Home;