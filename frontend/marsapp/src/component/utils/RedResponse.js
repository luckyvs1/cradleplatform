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
                            <FaArrowUp id={"arrow"}/> :
                            <FaArrowDown id={"arrow"}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default RedResponse;
