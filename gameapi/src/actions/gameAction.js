import axios from 'axios'
import {popularGamesUrl,upComingGamesUrl,newGamesUrl} from '../api'

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