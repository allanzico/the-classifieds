import React from 'react';
import ClassifiedCard from "./ClassifiedCard";
import {Link} from "react-router-dom";

const ClassifiedsList = ({classifieds})=>{
    return (
        <div>
            <h1 className="classifieds-heading">latest</h1>
            <div className="classifieds-section">

                {classifieds && classifieds.map(classified => {
                    return (
                        <div className="card-row" key={classified.id}>
                        <Link to={"/classified/" + classified.id} >
                            <ClassifiedCard classified={classified}/>
                        </Link>
                        </div>

                    )
                })}

            </div>
        </div>

    )
}

export default ClassifiedsList;