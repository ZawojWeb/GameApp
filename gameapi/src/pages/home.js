import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadGames} from '../actions/gameAction'

const Home = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    })
    return(
        <div>
            <h1>HOME</h1>
        </div>
    );
}
export default Home