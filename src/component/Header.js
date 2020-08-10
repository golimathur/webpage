import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ children }) => {


return(
    <div>
        <Link to ='/tasks'></Link>
        <Link to ='/deadlines'></Link>
        <Link to ='/reports'></Link>
        <Link to ='/quotes'></Link>
        <Link to ='/engagementletter'></Link>
        <Link to ='/clients'></Link>
        
        { children }
       
        </div>

)
}

export default Header;