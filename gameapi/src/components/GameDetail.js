import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

const GameDetail = () => {
    const history = useHistory();

    const exitDetailHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = "auto"
            history.push("/")
        }
    }

    const {screenShot,game, isLoading} = useSelector(state => state.detail)
    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail className="card-shaodw">
                <div className="detail">
                    <Stats className="stats">
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating : {game.rating}</p>
                        </div>
                        <Info className="info">
                            <h3>Platforms</h3>
                            <Platforms className="platforms">
                                { (game.platforms)?.map(data =>(
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media className="media">
                        <img src={game.background_image} alt="image" />
                    </Media>
                    <Desctiption className="description">
                        <p>{game.description_raw}</p>
                    </Desctiption>
                    <div className="gallery">
                        {(screenShot.results)?.map(screen => (
                            <img key={screen.id} src={screen.image} alt="" />
                        ))}
                    </div>
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color:#ff7676 ;
    }
    &::-webkit-scrollbar-track{
        background: wheat;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`
const Stats = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 1rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
       
    }
`

const Desctiption = styled(motion.div)`
    margin: 5rem 0rem;
`
export default GameDetail
