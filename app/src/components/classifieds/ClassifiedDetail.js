import  React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";

const ClassifiedDetails = (props) => {

    const  classified  = props;

    if (classified){
        return (
            <div className="container classified-details-container">
                <div className="card z-depth-0">
                    <div className="classifieds-title">
                        <h1>{classified.title} </h1>
                    </div>
                    <div className="classified-details">
                        <div className="fakeimg" >Image</div>
                        <p>Some text..</p>
                        <p>
                            {classified.content}
                        </p>
                        <div className="content-actions">
                            <p>Added by {classified.authorName}</p>
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
// if (state.firestore.data.classifieds) {
//     const classifieds = state.firestore.data.classifieds[id];
//     return {
//     classified: classifieds
//     }
// }
//const classified = classifieds[id]

    return {
        classified: classifieds
    }
}

export  default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'classifieds'}
    ])

)(ClassifiedDetails);