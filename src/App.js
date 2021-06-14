import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' // For routing


import GlobalFonts from './components/fonts/fonts' // importing the fonts

import Login from './pages/Login'
import Onboarding from './pages/onboarding/Onboarding'
import Dashboard from './pages/Dashboard'
import Applications from './pages/applications/Applications'
import NewApplication from './pages/applications/NewApplication'
import ViewApplication from './pages/applications/ViewApplication'
import History from './pages/credentialHistory/History'
import ViewTransactionTangle from './pages/credentialHistory/ViewTransactionTangle'
import Users from './pages/users/Users'
import ViewUser from './pages/users/ViewUser'
import NewUser from './pages/users/NewUser'
import Identity from './pages/Identity'
import Credentials from './pages/credentials/Credentials'
import NewCredential from './pages/credentials/NewCredential'
import ViewCredential from './pages/credentials/ViewCredential'
import IssueCredential from './pages/credentials/IssueCredential'
import Settings from './pages/Settings'

const App = () => {
  return (
    <Router>
      <div className="App">
      <GlobalFonts />

        <Switch>
          <Route exact component={Login} path="/" title="Login" />
          <Route component={Onboarding} path="/onboarding" />
          <Route component={Dashboard} path="/dashboard" />
          <Route component={Applications} exact path="/applications" />
          <Route component={NewApplication} path="/applications/new" />
          <Route component={ViewApplication} path="/applications/view" />
          <Route component={History} exact path="/history" />
          <Route component={ViewTransactionTangle} path="/history/view" />
          <Route component={Identity} path="/identity" />
          <Route component={Settings} path="/settings" />
          <Route component={Credentials} exact path="/credentials" />
          <Route component={NewCredential} path="/credentials/new" />
          <Route component={ViewCredential} path="/credentials/view" />
          <Route component={IssueCredential} path="/credentials/issue" />
          <Route component={Users} exact path="/users" />
          <Route component={NewUser} path="/users/new" />
          <Route component={ViewUser} path="/users/view" />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
