import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' // For routing


import GlobalFonts from './components/fonts/fonts' // importing the fonts

import Login from './pages/org/Login'
import Onboarding from './pages/org/onboarding/Onboarding'
import Dashboard from './pages/org/Dashboard'
import Applications from './pages/org/applications/Applications'
import NewApplication from './pages/org/applications/NewApplication'
import ViewApplication from './pages/org/applications/ViewApplication'
import History from './pages/org/credentialHistory/History'
import ViewTransactionTangle from './pages/org/credentialHistory/ViewTransactionTangle'
import Users from './pages/org/users/Users'
import ViewUser from './pages/org/users/ViewUser'
import NewUser from './pages/org/users/NewUser'
import Identity from './pages/org/Identity'
import Credentials from './pages/org/credentials/Credentials'
import NewCredential from './pages/org/credentials/NewCredential'
import ViewCredential from './pages/org/credentials/ViewCredential'
import IssueCredential from './pages/org/credentials/IssueCredential'
import Settings from './pages/org/Settings'

const App = () => {
  return (
    <Router>
      <div className="App">
      <GlobalFonts />

        <Switch>
          <Route exact component={Login} path="/org" title="Login" />
          <Route component={Onboarding} path="/org/onboarding" />
          <Route component={Dashboard} path="/org/dashboard" />
          <Route component={Applications} exact path="/org/applications" />
          <Route component={NewApplication} path="/org/applications/new" />
          <Route component={ViewApplication} path="/org/applications/view" />
          <Route component={History} exact path="/org/history" />
          <Route component={ViewTransactionTangle} path="/org/history/view" />
          <Route component={Identity} path="/org/identity" />
          <Route component={Settings} path="/org/settings" />
          <Route component={Credentials} exact path="/org/credentials" />
          <Route component={NewCredential} path="/org/credentials/new" />
          <Route component={ViewCredential} path="/org/credentials/view" />
          <Route component={IssueCredential} path="/org/credentials/issue" />
          <Route component={Users} exact path="/org/users" />
          <Route component={NewUser} path="/org/users/new" />
          <Route component={ViewUser} path="/org/users/view" />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
