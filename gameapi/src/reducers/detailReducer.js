const initailState = {game:{}, screenShot:{}};

const detailReducer = (state=initailState,action) =>{
    switch (action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screenShot:action.payload.screenShot,
            }
        default:
            return {...state};
    }
}

export default detailReducer;