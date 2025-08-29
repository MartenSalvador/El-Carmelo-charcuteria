import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Productos from './Pages/Productos';
import Nosotros from './Pages/Nosotros';
import Contacto from './Pages/Contacto';
import Footer from './Componentes/Footer';



function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
      <Footer />

    </>

  )
}

export default App;
