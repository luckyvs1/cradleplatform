/**
 * Summary:
 *  For later use when we receive data. The reducer will take them.
 *  Help with easier fetching data from api
 */


const initState = {
    //holds the data loging info? user info
    data:[
        {patientId:''}
    ]
}

const followUp = (state = initState, action ) => {
    switch (action.type) {
        case "patientFollowUp":
            let data = action
            return {
                //spread the states in case of having multiple things inside of initState
                ...state,

                data: data.data
            };


        default:
            return state;
    }
}
export default followUp;