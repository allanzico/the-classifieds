import React from 'react';

const ClassifiedCard = ({classified}) => {
return (
    <div className="card-row">
        <div className="classifieds-card">
        <span className="card-title">
            {classified.title}
        </span>
            <p>
                {classified.content}
            </p>
            <p>
                added by ..... 2 minutes ago
            </p>
        </div>
    </div>

)
}

export  default ClassifiedCard;