import React from 'react'
import {Route,Switch,Link} from 'react-router-dom'
// local imports
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreateMain from './pages/CreateMain';
import Account from './pages/Account';
import ViewLantern from './pages/ViewLantern';
import ViewLanternResults from './pages/ViewLanterResults';

// functional component, currently no state
function App() {
  // returns html & js => "JSX"
  return (
    <div className="App">
    {/* normal html */}
      <header>
        <p>Hey there I am the Header</p>
        {/* this is how we navigation to pages */}
        <Link to='/' style={{marginRight: "1rem"}}>Home</Link>
        <Link to='/Login'>Login</Link>
      </header>

      {/* JSX, notice pascal case on tags */}
      {/* this lets us handle navigation */}
      <Switch>
        {/* this is just one way to do routes */}
        {/* this route is the home page */}
        <Route exact path='/' component={Onboarding} />
        {/* we can add more routes here */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/account' component={Account} />
        <Route exact path='/home' component={Home} />
        <Route path='/home/create' component={CreateMain} />
        <Route path='/home/view/:id' component={ViewLantern} />
        <Route path='/home/view/:id/results' component={ViewLanternResults} />

        {/* ERROR Handling */}
        <Route >
          <h1>Error</h1>
          <p>Route/Page does not exist</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
