import React from 'react';
import SignedIn from "./SignedInNav";
import SignedOut from "./SignedOutNav";
import {connect} from "react-redux";


const NavBar = () => {
    return (
        <nav className="nav-bar">
        <SignedIn/>
        <SignedOut/>

        </nav>
    )
}

const  mapStateToProps = (state) => {
    console.log(state)
    return{

    }
}

export  default connect(mapStateToProps)(NavBar);