import  React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Redirect} from "react-router-dom";
import moment from "moment";

const ClassifiedDetails = (props) => {

    const  {classified, auth}  = props;
    if (!auth.uid) return <Redirect to="/signin"/>

    if (classified){

        return (
            <div className="container classified-details-container">
                <div className="card z-depth-0">
                    <div className="classifieds-title">
                        <h1>{classified.title} </h1>
                    </div>
                    <div className="classified-details">
                        <div className="fakeimg" >Image</div>

                        <p>
                            {classified.content}
                        </p>
                        <div className="content-actions">
                            <p>
                                added by{ classified.authorName }
                                { moment(classified.createdAt.toDate().toString()).calendar() }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="container">
                Loading...
            </div>
        )
    }


}

const  mapStateToProps =(state, ownProps) =>{
    //console.log(state);
const  id = ownProps.match.params.id;
const classifieds = state.firestore.data.classifieds;
const classified = classifieds ? classifieds[id] : null


    return {
        classified: classified,
        auth: state.firebase.auth
    }
}

export  default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'classifieds'}
    ])

)(ClassifiedDetails);