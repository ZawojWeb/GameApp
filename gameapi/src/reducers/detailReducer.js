const initailState = {game:{}, screenShot:{}, isLoading: true};

const detailReducer = (state=initailState,action) =>{
    switch (action.type){
        case "GET_DETAIL":
            return{
                ...state,
                game: action.payload.game,
                screenShot:action.payload.screenShot,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return{
                ...state,
                isLoading:true,
            }
        default:
            return {...state};
    }
}

export default detailReducer;