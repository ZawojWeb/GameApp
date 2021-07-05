import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadGames} from './actions/gameAction'



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
