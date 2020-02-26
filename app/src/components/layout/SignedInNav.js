import React from 'react';
import {Link} from "react-router-dom";


const SignedIn = () => {
    return (

            <ul className="main-navigation">
                <li className="list-item">
                    <Link to="/create" className="link"> <button className="post-ad-button">Post Ad</button> </Link>
                </li>
                <li className="list-item">
                    <Link to="/" className="link">Dashboard</Link>
                </li>

                <li className="list-item">
                    <Link to="notification" className="link">Notifications</Link>
                </li>
                <li className="list-item">
                    <Link to="" className="link">Something</Link>
                </li>
                <li className="list-item logo">
                    <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" ></i>
                </li>

                <li className="list-item">
                    <form className="search-signed-in">
                        <input type="text" placeholder="search classifieds"/><i className="fa fa-search"></i>
                    </form>
                </li>
                <li className="list-item">
                    <i className="fa fa-user-circle-o"></i>
                </li>
                <li className="list-item">
                    <Link to="" className="link">Logout</Link>
                </li>
            </ul>

    )
}

export  default SignedIn;