import React from "react";
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const RedResponse = ({isUp}) => {
    return (
        <>
            <div>
                <div>
                    <strong>Urgent</strong>
                    <div id={"octagon"}/>
                    <div>
                        {isUp ?
                            <FaArrowUp id={"reading-table-response-arrow"}/> :
                            <FaArrowDown id={"reading-table-response-arrow"}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default RedResponse;
