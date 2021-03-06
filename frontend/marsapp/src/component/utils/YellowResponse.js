import React from "react";
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const YellowResponse = ({isUp}) => {
    return (
        <>
            <div>
                <div>
                    <strong id={"warning-shift"}>Warning</strong>
                    <div id={'triangle'} className={"text-center"}/>
                    <div className={"text-center"}>
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

export default YellowResponse;
