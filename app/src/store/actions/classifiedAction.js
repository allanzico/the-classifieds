export  const createClassified = (classified) => {
    return  (dispatch, getState, {getFirebase, getFirestore}) => {

        //Make async call
        const  firestore = getFirestore();
        const  profile = getState().firebase.profile
        const  authorId = getState().firebase.auth.uid
        firestore.collection('classifieds').add({
            ...classified,
            authorName: profile.name,
            authorId: authorId,
            createdAt: new Date()

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