import React from 'react'

// Components and pages
import Home from './pages/home'
import GlobalStyles from './components/globalStyled'

function App() {

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
        <Home></Home>
    </div>
  );
}

export default App;
