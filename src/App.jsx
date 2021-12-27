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
export function App() {
  return (
    <Router >
      <div className="App">
        <AppHeader/>
        <main>
          <Switch>
            <Route exact component={HomePage} path="/" />
            <Route exact component={Contacts} path="/contacts" />
            <Route exact component={ContactDetails} path="/contact/:id" />
            <Route exact component={ContactEdit} path="/contact/edit/:id" />
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;

