import React from 'react';
import './changuito.css';
import Producto from '../producto/Producto';
import Dropdown from 'react-bootstrap/Dropdown';


const Changuito = ({changuito, agregarProducto}) => {


    return ( 
        <>


            <Dropdown className="d-inline mx-2 changuito" autoClose={false}>
                <Dropdown.Toggle id="dropdown-autoclose-false">
                    Carrito
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>{changuito.map( producto => (
                        <Producto
                            
                            producto = {producto}
                            changuito={changuito}
                            agregarProducto={agregarProducto}
                            key = {producto.id}
                        /> 
                    ))}   </Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
           
        </>
     );
}
 
export default Changuito;