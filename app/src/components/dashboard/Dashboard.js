import React, {Component} from 'react';
import Notifications from "./Notifications";
import ClassifiedsList from "../classifieds/ClassifiedList";


class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard flex-container">
                <div className="classifieds-column">
                    <ClassifiedsList/>
                </div>
                <div className="notifications-column">
                    <Notifications/>
                </div>
            </div>
        )
    }

}

export default Dashboard