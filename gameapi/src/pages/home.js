import React,{useEffect} from 'react'
import GameDetail from '../components/GameDetail';
import {useDispatch,useSelector} from 'react-redux'
import {loadGames} from '../actions/gameAction'
import Game from '../components/game'
import styled from 'styled-components'
import {motion, AnimatePresence,AnimateSharedLayout} from 'framer-motion'
import { useLocation } from 'react-router-dom';

const Home = () =>{
    // get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    },[dispatch])

    const {popular,newGame,upComing, searched} = useSelector(state => state.games)
    const clearSearched = () =>{
        dispatch({type:"CLEAR_SEARCH"})
    }
    return(
        <GameList>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
            {searched.length ? (
            <div className="searched">
                <h2>Searched Games:</h2>
                <ClearButon onClick={clearSearched}>Clear Serch</ClearButon>
                <Games>
                    {searched.map((game)=>(
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
                    ))}
                </Games>
            </div>
            ) : ('')}
            <h2>Upcoming Games</h2>
            <Games>
                {upComing.map((game)=>(
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGame.map((game)=>(
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game)=>(
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    );
}


const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 5rem;
`
const ClearButon = styled(motion.div)`
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        margin: 1rem;
        text-align: center;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5rem;
        cursor: pointer;
        background: #ff7675;
        color: white;
`
export default Home