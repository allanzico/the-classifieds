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
        default:
            return state;
    }
}

export  default classifiedReducer;