import React from "react";
import {Alert, Col, Row} from "react-bootstrap"
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const RedResponse = ({isUp}) => {
    return (
        <>
            <Alert id={'reading-response'}>
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
            </Alert>
        </>
    );
}

export default RedResponse;
