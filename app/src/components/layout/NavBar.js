import React from 'react';
import SignedIn from "./SignedInNav";
import SignedOut from "./SignedOutNav";
import {connect} from "react-redux";
import firebase from "firebase";


const NavBar = (props) => {

    const  {auth, profile} = props;
    const  links = auth.uid ? <SignedIn profile={profile}/> : <SignedOut/>
    return (
        <nav className="nav-bar">
            {links}
        </nav>
    )
}

const  mapStateToProps = (state) => {

    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export  default connect(mapStateToProps)(NavBar);