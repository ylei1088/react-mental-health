import React from 'react';
import { Route, Switch } from 'react-router-dom';
// local imports
import Header from './components/Header';
// pages
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import CreateMain from './pages/CreateMain';
import ViewLantern from './pages/ViewLantern';
import Footer from './components/Footer';
import Team from './pages/Team';

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
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={Team} />
        <Route path="/home/create" component={CreateMain} />
        <Route path="/home/view/:id" component={ViewLantern} />

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
