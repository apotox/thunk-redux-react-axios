


const DELETE_ITEMS = payload => {

    return (dispatch, getState, api) => {


        api.delete(`items?key=${payload}`)
            .then(() => dispatch(SUCCESS_NOTIFICATION()))
            .catch(err => dispatch(FAILED_NOTIFICATION(err.message)))

    }
}