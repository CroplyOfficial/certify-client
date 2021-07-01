import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' // For routing

import GlobalFonts from './components/fonts/fonts' // importing the fonts

// importing org pages
import LoginOrg from './pages/org/LoginOrg';
import Onboarding from './pages/org/onboarding/Onboarding';

import Dashboard from './pages/org/Dashboard';

import ApplicationsOrg from './pages/org/applications/ApplicationsOrg';
import NewApplicationOrg from './pages/org/applications/NewApplicationOrg';
import ViewApplicationOrg from './pages/org/applications/ViewApplicationOrg';

import History from './pages/org/credentialHistory/History';
import ViewTransactionTangle from './pages/org/credentialHistory/ViewTransactionTangle';

import Users from './pages/org/users/Users';
import ViewUser from './pages/org/users/ViewUser';
import NewUser from './pages/org/users/NewUser';

import IdentityDashboard from './pages/org/identity/dashboard/IdentityDashboard';
import IdentityScan from './pages/org/identity/scan/IdentityScan';

import Credentials from './pages/org/credentials/Credentials';
import NewCredential from './pages/org/credentials/NewCredential';
import ViewCredential from './pages/org/credentials/ViewCredential';
import IssueCredential from './pages/org/credentials/IssueCredential';

import SettingsOrg from './pages/org/SettingsOrg';

// importing user pages
import LoginUser from './pages/user/LoginUser';
import RegisterUser from './pages/user/RegisterUser';

import PublicProfile from './pages/user/publicProfile/PublicProfile';
import ViewPublicProfile from './pages/user/publicProfile/ViewPublicProfile';

import ApplicationsUser from './pages/user/applications/ApplicationsUser';
import NewApplicationUser from './pages/user/applications/NewApplicationUser';
import ViewApplicationUser from './pages/user/applications/ViewApplicationUser';

import SettingsUser from './pages/user/SettingsUser';

// importing public pages
import Home from './pages/public/Home';
import Directory from './pages/public/Directory';
import Profile from './pages/public/Profile';

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

          <Route component={ApplicationsOrg} exact path="/org/applications" title="Applications" />
          <Route component={NewApplicationOrg} path="/org/applications/new" title="New Application" />
          <Route component={ViewApplicationOrg} path="/org/applications/view" title="View Application" />

          <Route component={History} exact path="/org/history" title="History" />
          <Route component={ViewTransactionTangle} path="/org/history/view" title="View Transaction Tangle" />

          <Route component={IdentityDashboard} path="/org/identity/dashboard" title="Identity Dashboard" />
          <Route component={IdentityScan} path="/org/identity/scan" title="Identity Scan" />


          <Route component={SettingsOrg} path="/org/settings" title="Settings" />

          <Route component={Credentials} exact path="/org/credentials" title="Credentials" />
          <Route component={NewCredential} path="/org/credentials/new" title="New Credential" />
          <Route component={ViewCredential} path="/org/credentials/view" title="View Credential" />
          <Route component={IssueCredential} path="/org/credentials/issue" title="Issue Credential" />

          <Route component={Users} exact path="/org/users" title="Users" />
          <Route component={NewUser} path="/org/users/new" title="New User" />
          <Route component={ViewUser} path="/org/users/view" title="View User" />

          {/* routing user pages */}
          <Route component={LoginUser} exact path="/user" title="Login" />
          <Route component={RegisterUser} path="/user/register" title="Register" />

          <Route component={ApplicationsUser} exact path="/user/applications" title="Applications" />
          <Route component={NewApplicationUser} path="/user/applications/new" title="New Application" />
          <Route component={ViewApplicationUser} path="/user/applications/view" title="View Application" />

          <Route component={PublicProfile} exact path="/user/publicProfile" title="Public Profile" />
          <Route component={ViewPublicProfile} path="/user/publicProfile/view" title="View Public Profile" />

          <Route component={SettingsUser} path="/user/settings" title="Settings" />

          {/* routing public pages */}
          <Route component={Home} exact path="/public" title="Home" />
          <Route component={Directory} path="/public/directory" title="Directory" />
          <Route component={Profile} path="/public/profile" title="Profile" />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
