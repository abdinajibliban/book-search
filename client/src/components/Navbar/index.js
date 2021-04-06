import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{color: 'white'}}>
            <Link to="/" className="navbar navbar-brand me" >Google Book Search</Link>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/books" className="nav-link" >Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className="nav-link active">Saved</Link>
                    </li>     
                </ul>
            </div>      
        </nav>  
    );
}

export default Navbar