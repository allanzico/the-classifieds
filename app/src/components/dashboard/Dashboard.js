import React, {Component} from 'react';
import Notifications from "./Notifications";
import ClassifiedsList from "../classifieds/ClassifiedList";
import {connect} from 'react-redux';


class Dashboard extends Component {

    render() {
       const {classifieds} = this.props;
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
        classifieds: state.classified.classifieds
    }

}

export default connect(mapStateToProps)(Dashboard)