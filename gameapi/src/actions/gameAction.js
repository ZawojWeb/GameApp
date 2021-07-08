import axios from 'axios'
import {popularGamesUrl,upComingGamesUrl,newGamesUrl, searchGameUrl} from '../api'

export const loadGames = () => async(dispatch) =>{
    const popularData = await axios.get(popularGamesUrl())
    const upComingData = await axios.get(upComingGamesUrl())
    const newGamesData = await axios.get(newGamesUrl())
   dispatch({
       type: "FETCH_GAMES",
       payload:{
           popular:popularData.data.results,
           upComing: upComingData.data.results,
           newGame: newGamesData.data.results,
       }
   })
}




export const fetchSearch = (game_name) => async(dispatch) =>{
    const searchGames = await axios.get(searchGameUrl(game_name))

    dispatch({
        type:"FETCH_SEARCHED",
        payload:{
            searched:searchGames.data.results,
        }
    })
}