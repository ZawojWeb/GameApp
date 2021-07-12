// Base URL
const base_url = "https://api.rawg.io/api/"
const key = `key=${process.env.REACT_APP_KEY_API}`

// Popular Games
const popular_games = "https://api.rawg.io/api/games"


// Getting the moth
const getCurrentMonth = () =>{
    const month = new Date().getMonth() +1;
    if(month < 10){
        return `0${month}`;

    }else{
        return month;
    }
}
// Current Day
const getCurrentDay = () =>{
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
}

// Curren day/month/year

const currentYear = new Date().getFullYear();
const currentMotn = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMotn}-${currentDay}`
const lastYear =`${currentYear-1}-${currentMotn}-${currentDay}`
const nextYear =`${currentYear+1}-${currentMotn}-${currentDay}`

const lastYearPopularGamge = `games?${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcomingGames = `games?${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${base_url}${lastYearPopularGamge}`
export const upComingGamesUrl = () => `${base_url}${upcomingGames}`
export const newGamesUrl = () => `${base_url}${newGames}`
// Game Details

export const GameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&${key}`

export const GameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&${key}`


export const searchGameUrl = (game_name) => `${base_url}games?${key}&search=${game_name}&page_size=9`