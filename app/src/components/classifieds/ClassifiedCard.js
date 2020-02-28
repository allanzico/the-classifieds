import React from 'react';
import moment from "moment";


const ClassifiedCard = ({classified}) => {
return (


        <div className="classifieds-card">
        <span className="card-title">
            {classified.title}
        </span>
            <p>
                {classified.content}
            </p>
            <p>
                added by {classified.authorName} {moment(classified.createdAt.toDate().toString()).calendar()}

            </p>
        </div>


)
}

export  default ClassifiedCard;