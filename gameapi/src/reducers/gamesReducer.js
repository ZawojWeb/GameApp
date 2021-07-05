
const initState = {
    popular : [],
    newGame : [],
    upComing : [],
    searched: []
}

const gameReducer = (state=initState,action)=>{
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state}
        default:
            return {...state}
    }
}

// Action Creator

const fetchGames = (userData) =>{
    return{
        type:"FETCH_GAMES",
        payload: userData,

    }
}

export default gameReducer
