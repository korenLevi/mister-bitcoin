import './assets/scss/global.scss';
import { HomePage } from './pages/HomePage';
import { Contacts } from './pages/Contacts';
import { HashRouter as Router, Switch } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';
import { ContactDetails } from './pages/ContactDetails';
import { AppHeader } from './cmps/AppHeader';
// import { ContactsFilter } from './cmps/ContactsFilter';
import { ContactEdit } from './pages/ContactEdit';
import { Statistic } from './pages/Statistic';
// import { BitcoinApp } from './pages/BitcoinApp'
import { SignUp } from './pages/SignUp';
// import React from 'react';

export function App() {

  
  return (
    <Router >
      <div className="App">
        <AppHeader />
        
        <main className="main-container">
          <Switch>SignUp
            <Route exact component={ContactEdit} path="/contact/edit/:id?" />
            <Route exact component={SignUp} path="/" />
            <Route exact component={HomePage} path="/home" />
            <Route exact component={Contacts} path="/contacts" />
            <Route exact component={Statistic} path="/statistic" />
            <Route exact component={ContactDetails} path="/contact/:id" />
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;

