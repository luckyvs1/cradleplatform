import React from "react";
import {Alert, Col, Row} from "react-bootstrap"
import {Polyline} from "react-shapes";
import {FaArrowDown, FaArrowUp} from "react-icons/all";

const left = {
    margin: '11px',
};

const GreenResponse = () => {
    return (
        <>
            <Alert id={'reading-response'}>
                <div>
                    <div>
                        <strong>OK</strong>
                        <div id={"circle"}/>
                    </div>
                </div>
            </Alert>
        </>
    );
}

export default GreenResponse;
