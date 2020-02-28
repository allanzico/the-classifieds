import  React  from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Notifications = (props) =>{
    const {auth} = props;
    if (!auth.uid) return <Redirect to="/signin"/>
    return(

        <div className="notifications-card">
            <p>Notifications</p>
        </div>
    )
}

const  mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }

}

export default connect(mapStateToProps) (Notifications);