import  React from 'react';

const ClassfiedDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container classified-details-container">
            <div className="card z-depth-0">
                <div className="classifieds-title">
                    <h1>TITLE </h1>
                </div>
                <div className="classified-details">
                    <div className="fakeimg" >Image</div>
                    <p>Some text..</p>
                    <p>
                        Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco.
                    </p>
                    <div className="content-actions">
                        <p>Added by someone</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default  ClassfiedDetails;