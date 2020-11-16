import React from 'react';
import { Route, Switch } from 'react-router-dom';
// local imports
import Header from './components/Header';
// pages
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreateMain from './pages/CreateMain';
import Account from './pages/Account';
import ViewLantern from './pages/ViewLantern';
import ViewLanternResults from './pages/ViewLanterResults';
import Footer from './components/Footer';
import Team from './pages/Team';
import Forgot from './pages/Forgot';

// functional component, currently no state
function App() {
  // returns html & js => "JSX"
  return (
    <div className="App container">
      <Header />
      {/* JSX, notice pascal case on tags */}
      {/* this lets us handle navigation */}
      <Switch>
        <Route exact path="/" component={Onboarding} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={Forgot} />
        <Route exact path="/team" component={Team} />
        {/* needs alt navigation */}
        <Route path="/account" component={Account} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/create" component={CreateMain} />
        <Route path="/home/view/:id" component={ViewLantern} />
        <Route path="/home/view/:id/results" component={ViewLanternResults} />

        {/* ERROR Handling */}
        <Route>
          <h1>Error</h1>
          <p>Route/Page does not exist</p>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
