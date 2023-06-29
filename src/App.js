import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrousel from './components/carrousel/Carrousel';
import { useState } from 'react';
import NavBar from './components/navnar/NavBar';
import Producto from './components/producto/Producto';
import Changuito from './components/changuito/Changuito';

function App() {
  
  //Creamos nuestra lista de productos
  const [productos, guardarProductos] = useState([
    {id:0, articulo:"Mesa",precio:20000},
    {id:1, articulo:"Sillon", precio:200000},
    {id:2, articulo:"Silla", precio:50000},
    {id:3, articulo:"mantel", precio:10000},
    {id:4, articulo:"Mesa2",precio:20000},
    {id:5, articulo:"Sillon3", precio:200000},
    {id:6, articulo:"Silla4", precio:50000},
    {id:7, articulo:"mantel5", precio:10000},
  ])
  
  //Creamos nuestro changuito
  const [changuito, agregarProducto] = useState([]);
  



  return (
    <>
      <NavBar fixed="top"/>
      <Changuito
        changuito={changuito}
        agregarProducto={agregarProducto}
      />
      <Carrousel/>
      <h2>Listado de Productos</h2>
      { 
        productos.map(producto => (
          <Producto
            producto = {producto}
            productos = {productos}
            key={producto.id}
            changuito={changuito}
            agregarProducto={agregarProducto}
            //agregado
            
          />
        ))
      }
      
      <Footer/>
    </>
  );
}

export default App;
