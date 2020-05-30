import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {signIn, signOut} from "../../store/actions/authActions";


const SignedIn = (props) => {
    return (
        <nav className="navbar">
            <ul className="main-navigation">
                <li >
                    <Link to="/create" className="link"> <button className="post-ad-button">Post Ad</button> </Link>
                </li>
                <li className="list-item">
                    <Link to="/" className="link">Dashboard</Link>
                </li>

                <li className="list-item">
                    <Link to="/notification" className="link">Notifications</Link>
                </li>
                <li className="list-item">
                    <Link to="/" className="link">Something</Link>
                </li>
                <li className="logo">
                    <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" ></i>
                </li>

                <li>
                    <form>
                        <input type="text" placeholder="search classifieds" className="search-bar"/>

                        <i className="fa fa-search search-icon"></i>

                    </form>
                </li>
                <li >
                    <Link to="/" className="link">
                        <button className="initials">{props.profile.initials}</button>
                    </Link>
                </li>
                <li>

                    <button className="logout-button" onClick={props.signOut}>
                        <i className="fa fa-sign-out" aria-hidden="true">Logout</i></button>
                </li>
            </ul>

        </nav>

    )
}

const mapDispatchToProps =(dispatch)=> {
    return{
        signOut: () => dispatch(signOut())
    }
}

export  default connect(null, mapDispatchToProps) (SignedIn);