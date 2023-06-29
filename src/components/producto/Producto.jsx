import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {v4 as uuid} from 'uuid';


const Producto = ({producto, productos, changuito, agregarProducto}) => {

    //Extraigo los valores
    const {id, articulo, precio} = producto;

    //producto no repetido
    const noRepetir = (producto) => {
        const articulo = producto.articulo;
        const precio = producto.precio;
        const id = uuid();
        const nuevoProducto = {id, articulo, precio};
        if(changuito.includes(producto)){
            return nuevoProducto
        }else{
            return producto
        }
    }

    //Funcion para comprar un producto
    const seleccionarProducto = (id) => {
        //console.log("Seleccionar")
        const producto = productos.filter(
            producto => producto.id === id
        )[0];
        agregarProducto([
            ...changuito, noRepetir(producto) ]);
        console.log(changuito);
        console.log(changuito.includes(producto))
    }

    //eliminar producto
    /*const eliminarProducto = (id) => {
        const nuevoProducto = productos.filter( 
            producto => producto.id !== id
            );
        agregarProducto(nuevoProducto)
    }*/
    const eliminarProducto = (id) => {
        const productosNew = changuito.filter( producto => producto.id !== id);
        agregarProducto(productosNew)
    }   

   

    return (  
        <>
            
                {
                productos
                ?
                <Card style={{ width: '18rem', display:"inline-block",margin:'0 auto'}}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{producto.articulo}</Card.Title>
                        <Card.Text>
                            ${producto.precio}
                        </Card.Text>
                        {
                        productos
                        ?
                        <button
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                        >Añadir</button>
                        :
                        <button
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                        >Eliminar</button>}
                    </Card.Body>
                </Card>
                :
                <Card >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{producto.articulo}</Card.Title>
                        <Card.Text>
                            ${producto.precio}
                        </Card.Text>
                        {
                        productos
                        ?
                        <button
                        type="button"
                        onClick={ () => seleccionarProducto(id) }
                        >Añadir</button>
                        :
                        <button
                        type="button"
                        onClick={ () => eliminarProducto(id) }
                        >Eliminar</button>}
                    </Card.Body>
                </Card>
            
                }
            
        </>
    );
}
 
export default Producto;