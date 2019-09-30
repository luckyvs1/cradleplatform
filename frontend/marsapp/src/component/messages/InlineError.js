/**
 * Summary:
 *  Displays the error message as a single line
 */

import React from "react";
import PropTypes from "prop-types";



// for error handling
const InlineError = ({ text }) => (
    <span style={{ color: "#ae5856" }}>{text}</span>
);

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;