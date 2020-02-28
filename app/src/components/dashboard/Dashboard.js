import React, {Component} from 'react';
import Notifications from "./Notifications";
import ClassifiedsList from "../classifieds/ClassifiedList";
import {connect} from 'react-redux';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";


class Dashboard extends Component {

    render() {
       const {classifieds, auth} = this.props;
       if (!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className="dashboard flex-container">
                <div className="classifieds-column">
                    <ClassifiedsList classifieds ={classifieds}/>
                </div>
                <div className="notifications-column">
                    <Notifications/>
                </div>
            </div>
        )
    }

}

const  mapStateToProps = (state)=>{
    return {
        classifieds: state.firestore.ordered.classifieds,
        auth: state.firebase.auth
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'classifieds'}])
)(Dashboard)