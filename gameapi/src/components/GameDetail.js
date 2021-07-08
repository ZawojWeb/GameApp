import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { smallImage } from '../util'

import playstation from '../img/playstation.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import nintendo from '../img/nintendo.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import ps5 from '../img/ps5.svg'
import xboxS from '../img/xbox-seriesx.svg'

import starEmpty from "../img/star-empty.png"
import starFull from "../img/star-full.png"

const GameDetail = ({pathId}) => {
    const history = useHistory();

    const exitDetailHandler = (e) =>{
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = "auto"
            history.push("/")
        }
    }

    const getStars = () =>{
        const stars = [];
        const raiting = Math.floor(game.rating);
        for (let i = 0; i < 5; i++) {
          if(i <= raiting){
              stars.push(<img alt="star"key={i} src={starFull}/>)
          }else{
            stars.push(<img alt="star"key={i} src={starEmpty}/>)
          } 
        }
        return stars;
    }
    const getPlatfromIcon = (platform) =>{
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Xbox Series S/X":
                return xboxS;
            case "Nintendo Switch":
                return nintendo;
            case "PlayStation 5":
                return ps5;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }

    }

    const {screenShot,game, isLoading} = useSelector(state => state.detail)
    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId} className="card-shaodw">
                <div className="detail">
                    <Stats className="stats">
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating : {game.rating}</p>
                            <div className="imageStar">
                            {getStars()}
                            </div>
                        </div>
                        <Info className="info">
                            <h3>Platforms</h3>
                            <Platforms className="platforms">
                                { (game.platforms)?.map(data =>(
                                    <img key={data.platform.id}src={getPlatfromIcon(data.platform.name)}></img>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media className="media">
                        <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image,640)} alt="image" />
                    </Media>
                    <Desctiption className="description">
                        <p>{game.description_raw}</p>
                    </Desctiption>
                    <div className="gallery">
                        {(screenShot.results)?.map(screen => (
                            <img key={screen.id} src={smallImage(screen.image,640)} alt="" />
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
    z-index: 1000;
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
    .imageStar{
        display: flex;
        img{
            width: 26px;
            height: 26px;
        }
    }
`
const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 1rem;
        max-width: 48px;
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
