import React from 'react';
import bg from '../../images/notFound.png';


const notFound = {
    background: `url(${bg})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(124,0,0.0.1)',
    backgroundSize: 'cover',
    
}

const NotFound = () => {
    
    return (
        <div  style={notFound} sx={{margin: '0px', padding: '0px'}}>
             
        </div>
    );
};

export default NotFound;