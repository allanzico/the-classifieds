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

export const deleteClassified = (id) => {

    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const  firestore = getFirestore();

     firestore.collection('classifieds').doc(id).delete()
            .then(()=>{
                dispatch ({
                    type: 'DELETE_CLASSIFIED',
                    id: id
                })
            }).catch((err)=> {
            dispatch({
                type: 'DELETE_CLASSIFIED_ERROR', err
            })
        })

    }
}