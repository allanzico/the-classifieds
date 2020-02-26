import React from 'react';
import SignedIn from "./SignedInNav";
import SignedOut from "./SignedOutNav";


const NavBar = () => {
    return (
        <nav className="nav-bar">
        <SignedIn/>
        <SignedOut/>

        </nav>
    )
}

export  default NavBar;