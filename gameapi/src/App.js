import React from 'react'
import {Route} from 'react-router-dom'
// Components and pages
import Home from './pages/home'
import Nav from './components/Nav'
import GlobalStyles from './components/globalStyled'

function App() {

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Nav></Nav>
        <Route path={["/game/:id","/"]} >
          <Home></Home>
        </Route>
    </div>
  );
}

export default App;
