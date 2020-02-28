const  initState = {
    classifieds: []
};

const classifiedReducer =(state = initState, action)=> {
    switch (action.type) {
        case "CREATE_CLASSIFIED":
            console.log('created', action.classified);
            return state;
        case 'CREATE_CLASSIFIED_ERROR':
            console.log('classified error', action.err);
            return state;
        case 'DELETE_CLASSIFIED_ERROR':
            console.log('delete classified error', action.err);
            return state;
        case 'DELETE_CLASSIFIED':
            console.log('classified deleted');
            const newClassifieds = state.classifieds.filter(classified => {
                return action.id !== classified.id
            });
            return {
                ...state,
                classifieds: newClassifieds
            };
        default:
            return state;
    }
}

export  default classifiedReducer;