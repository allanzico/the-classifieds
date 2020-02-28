import React from 'react';
import {Link} from "react-router-dom";


const SignedOut = () => {
    return (

            <ul className="main-navigation">
                <li className="list-item logo">
                    <i className="fa fa-newspaper-o fa-2x" aria-hidden="true"></i>
                </li>
                <li className="list-item">
                    <Link to="/" className="link">THE CLASSIFIEDS</Link>
                </li>
                <li className="list-item">
                    <form className="search-signed-out">
                        <input type="text" placeholder="search classifieds"/><i className="fa fa-search"></i>
                    </form>
                </li>
                <li className="list-item">
                    <Link to="/signup" className="link">Signup</Link>
                </li>
                <li className="list-item">
                    <Link to="/signin" className="link">Login</Link>
                </li>
            </ul>

    )
}

export  default SignedOut;