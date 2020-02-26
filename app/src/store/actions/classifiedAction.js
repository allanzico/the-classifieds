export  const createClassified = (classified) => {
    return  (dispatch, getState, {getFirebase, getFirestore}) => {

        //Make async call
        dispatch({
            type: 'CREATE_CLASSIFIED',
            classified: classified
        })
    }
}