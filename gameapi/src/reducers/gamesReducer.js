
const initState = {
    popular : [],
    newGame : [],
    upComing : [],
    searched: []
}

const gameReducer = (state=initState,action)=>{
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state,
                popular:action.payload.popular,
                upComing:action.payload.upComing,
                newGame:action.payload.newGame
            }
        default:
            return {...state}
    }
}



export default gameReducer
