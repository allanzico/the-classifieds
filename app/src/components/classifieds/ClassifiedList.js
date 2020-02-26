import React from 'react';
import ClassifiedCard from "./ClassifiedCard";

const ClassifiedsList = ({classifieds})=>{
    return (
        <div>
            <h1 className="classifieds-heading">latest</h1>
            <div className="classifieds-section">

                {classifieds && classifieds.map(classified => {
                    return (
                        <ClassifiedCard classified={classified} key={classified.id}/>
                    )
                })}

            </div>
        </div>

    )
}

export default ClassifiedsList;