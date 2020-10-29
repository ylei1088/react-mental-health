import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
// local imports
import Home from './pages/Home';

// functional component, currently no state
function App() {
  // normal javascript
  const name = "IAM Teams Mental Health";


  // returns html & js => "JSX"
  return (
    <div className="App">
    {/* normal html */}
      <header>
        <p>Hey there I am the Header</p>
        {/* this is how we navigation to pages */}
        <Link to='/' style={{marginRight: "1rem"}}>Home</Link>
        <Link to='/test'>Test</Link>
      </header>

      {/* JSX, notice pascal case on tags */}
      {/* this lets us handle navigation */}
      <Switch>
        {/* this is just one way to do routes */}
        {/* this route is the home page */}
        <Route exact path='/'>
          {/* we can pass variables to pages/components as such... */}
          <Home name={name}/>
        </Route>
        {/* we can add more routes here */}
        <Route path='/test'>
          <h2>Hello from test page!</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
