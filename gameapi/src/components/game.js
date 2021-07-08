import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
// Redux
import {useDispatch} from 'react-redux'
import {loadDetail} from '../actions/detailAction'
import { Link } from 'react-router-dom'

const Game = ({name,released,id,image}) => {
    // Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        dispatch(loadDetail(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
           <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name} />
           </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    img{
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
`
export default Game
