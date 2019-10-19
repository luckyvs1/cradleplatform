/**
 * Summary:
 *  For later use when we receive data. The reducer will take them.
 *  Help with easier fetching data from api
 */


const initState = {
    //holds the data loging info? user info
    posts:[{
        patientId:null
    }]
}

export default function followUp(state = initState, action = {}) {
    switch (action.type) {
        case "patientFollowUp":
            let data = action
            // alter data
            console.log("patient follow up" , data.data)
            console.log("patient follow up" , state.posts)

            return {
                //spread the states in case of having multiple things inside of initState
                ...state,

                // override the data you want
                posts: data.data
            };


        default:
            return state;
    }
}