
import '../Estilos/ProductCard.css'
import jamonImage from '../assets/jamón.png';
import quesoImage from '../assets/queso.png';
import embutidoImage from '../assets/embutidos.png';
import gourmentImage from '../assets/gourmet.png';

const imagenes = {
    jamonImage,
    quesoImage,
    embutidoImage,
    gourmentImage
}
function ProductCard( {imagen} ) {
    return (
            <div className="product-card">
                <img src={imagenes[imagen]} className='imagen-producto' alt='producto'/>
            </div>

    )
}

export default ProductCard;