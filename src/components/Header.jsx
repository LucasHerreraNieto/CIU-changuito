import React, { Fragment } from 'react';


const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <h2>{titulo}</h2>
            <h4>soy el header (aca pongo el menu)</h4>
        </Fragment>
     );
}
 
export default Header;