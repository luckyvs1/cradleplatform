import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
// import AddBookCtA from "../ctas/AddBookCtA";

class DashboardPage extends React.Component {
    // componentDidMount = () => this.onInit(this.props);
    //
    // onInit = props => props.fetchBooks();

    render() {
        const {isConfirmed, books} = this.props;
        return (
            <div className="ui-toolbar">

                {!isConfirmed && <ConfirmEmailMessage/>}

                {/*{books.length === 0 ? <AddBookCtA /> : <p>You have books!</p>}*/}
            </div>
        );
    }
}

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    books: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed,
    };
}

export default connect(mapStateToProps, {})(DashboardPage);