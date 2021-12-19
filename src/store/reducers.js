const initialState = {
    gifs: []
}

export default function reducers(state = initialState, action)
{
    switch (action.type) {
        case "GET_GIFS":
            return {...state, gifs: action.payload};
        default:
            return state;
    }
}
