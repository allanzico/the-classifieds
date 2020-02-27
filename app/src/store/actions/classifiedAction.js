export  const createClassified = (classified) => {
    return  (dispatch, getState, {getFirebase, getFirestore}) => {

        //Make async call
        const  firestore = getFirestore();
        firestore.collection('classifieds').add({
            ...classified,
            authorName: 'Guy',
            authorId: 12,
            title: 'Test',
            content: 'something'
        }).then(()=>{
            dispatch({
                type: 'CREATE_CLASSIFIED',
                classified: classified
            })
        }).catch((err)=>{
            dispatch({
                type: 'CREATE_CLASSIFIED_ERROR', err
            })
        })

    }
}