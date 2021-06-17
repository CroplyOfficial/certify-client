import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' // For routing


import GlobalFonts from './components/fonts/fonts' // importing the fonts

// importing org pages
import LoginOrg from './pages/org/LoginOrg'
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
import SettingsOrg from './pages/org/SettingsOrg'

// importing user pages
import LoginUser from './pages/user/LoginUser'
import RegisterUser from './pages/user/RegisterUser'
import PublicProfile from './pages/user/publicProfile/PublicProfile'


const App = () => {
  return (
    <Router>
      <div className="App">
      <GlobalFonts />

        <Switch>
          {/* routing org pages */}
          <Route component={LoginOrg} exact path="/org" title="Login" />
          <Route component={Onboarding} path="/org/onboarding" title="Onboarding" />
          <Route component={Dashboard} path="/org/dashboard" title="Dashboard" />
          <Route component={Applications} exact path="/org/applications" title="Applications" />
          <Route component={NewApplication} path="/org/applications/new" title="New Application" />
          <Route component={ViewApplication} path="/org/applications/view" title="View Application" />
          <Route component={History} exact path="/org/history" title="History" />
          <Route component={ViewTransactionTangle} path="/org/history/view" title="View Transaction Tangle" />
          <Route component={Identity} path="/org/identity" title="Identity" />
          <Route component={SettingsOrg} path="/org/settings" title="Settings" />
          <Route component={Credentials} exact path="/org/credentials" title="Credentials" />
          <Route component={NewCredential} path="/org/credentials/new" title="New Credential" />
          <Route component={ViewCredential} path="/org/credentials/view" title="View Credential" />
          <Route component={IssueCredential} path="/org/credentials/issue" title="Issue Credential" />
          <Route component={Users} exact path="/org/users" title="Users" />
          <Route component={NewUser} path="/org/users/new" title="New User" />
          <Route component={ViewUser} path="/org/users/view" title="View User" />

          {/* routing org pages */}
          <Route component={LoginUser} exact path="/user" title="Login" />
          <Route component={RegisterUser} path="/user/register" title="Register" />
          <Route component={PublicProfile} exact path="/user/publicProfile" title="Public Profile" />
          <Route component={PublicProfile} path="/user/publicProfile/view" title="View Public Profile" />


        </Switch>

      </div>
    </Router>
  );
}

export default App;
