import axios from 'axios'
import {GameDetailsURL,GameScreenshotURL} from '../api'
export const loadDetail = (id) => async (dispatch) =>{

    dispatch({
        type:"LOADING_DETAIL",
    })

    const detailData = await axios.get(GameDetailsURL(id));
    const detailDataScreen = await axios.get(GameScreenshotURL(id));

    dispatch({
        type:"GET_DETAIL",
        payload:{
            game:detailData.data,
            screenShot:detailDataScreen.data,
        },
    })
}
