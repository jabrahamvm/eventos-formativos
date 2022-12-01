import React from 'react'
import {Link} from 'react-router-dom'  // Import links from router
import Logo from '../img/logo.png'

const Navbar = () => {
    return (

        <nav>
            <ul>
                <li>
                    <div className="logo">
                        <img src={Logo} alt="" />
                        Rodrigo Nevarez
                    </div>
                </li>
                    
                <li>
                    <Link className='link' to="/EventosInscritos/5">
                        <h6>Mis Eventos</h6>
                    </Link>
                </li>

                <li>
                    <Link className='link' to="/TodasSolicitudes/5">
                        <h6>Mis Solicitudes</h6>
                    </Link>
                </li>
              
            </ul>
        </nav>

    /*
    <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className='link' to="/?cat=tech">
                        <h6>TECH</h6>
                    </Link>
                    <Link className='link' to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <span>John</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className='link' to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    */ 
        
    )
}

export default Navbar