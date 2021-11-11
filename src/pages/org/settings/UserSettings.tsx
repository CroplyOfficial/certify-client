import { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import {
  CommonElementsOrg,
  TangleHistory,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Button,
} from "../../../components/ui";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import axios from "axios";
import { NewUserModal } from "./newUserModal";

const CustomMainContent = styled(MainContent)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  hr {
    margin: 1.5rem 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 350px;
  .lastBackupDate {
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme.settings.lastBackupDateColor};
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 350px;
  fieldset {
    margin-top: 2rem;
  }
  hr:last-of-type {
    padding-bottom: 2rem;
  }
`;

/**
 * Returns the BackupRestoreSettingsOrg component which is the page to
 * manage the backup/restore settings for the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component.
 * @returns {ReactElement} - The BackupRestoreSettingsOrg component.
 */
const OrgUserSettings = ({ theme }) => {
  /**
   * Function to handle change in settings triggered by the user.
   * @param {string} property - The key of the property to alter in the settings object.
   * @param {boolean} newValue - The new value to be assigned to the specified property.
   */

  const userInfoMeta = useSelector((state: RootState) => state.userLogin);
  const { userInfo }: any = userInfoMeta;

  const [users, setUsers] = useState<any[]>([]);
  const [user, setUser] = useState<any>();
  const [roles, setRoles] = useState<any>();
  const [selectedRole, setSelectedRole] = useState();
  const [visible, setVisible] = useState<boolean>(false);

  const createUser = async (username: string, password: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      "/api/users/staff-user",
      {
        username,
        password,
      },
      config
    );
    if (data) {
      getUsers();
      toast.success("User Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const assignRole = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      "/api/roles/assign",
      {
        id: user._id,
        role: selectedRole,
      },
      config
    );
    if (data) {
      getUsers();
      toast.success("Role Updated", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const saveSettingsBtn = (
    <Button primary btnColor={theme.btnPriBg} onClick={assignRole}>
      SAVE SETTINGS
    </Button>
  );
  const getRoles = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/roles`, config);
    setRoles(data);
  };

  const getUsers = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/users/@staff`, config);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);

  useEffect(() => {
    if (user && user.role && user.role.id) {
      setSelectedRole(user.role._id);
    }
  }, [user]);

  return (
    <>
      <CommonElementsOrg menuActive="Settings" />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NewUserModal
        visible={visible}
        setVisible={setVisible}
        action={createUser}
      />

      <PageContentContainer>
        <MainContentContainer>
          <CustomMainContent
            contentTitle="Users"
            settingsActive="Users"
            componentRight={saveSettingsBtn}
          >
            <Left>
              {users &&
                users.map((currUser) => (
                  <button
                    className={`role ${
                      user === currUser ? "active-role" : ""
                    } }`}
                    onClick={() => setUser(currUser)}
                  >
                    {currUser.username}
                  </button>
                ))}
              <button className="role newRole" onClick={() => setVisible(true)}>
                + New User
              </button>
            </Left>
            <Right>
              {user && (
                <>
                  <select
                    className="role-select"
                    onChange={(e: any) => setSelectedRole(e.target.value)}
                    value={selectedRole}
                  >
                    <option disabled>Select Role</option>
                    {roles &&
                      roles.map((role: any) => (
                        <option key={role._id} value={role._id}>
                          {role.name}
                        </option>
                      ))}
                  </select>
                </>
              )}
            </Right>
          </CustomMainContent>
        </MainContentContainer>
        <TangleHistory />
      </PageContentContainer>
    </>
  );
};

export default withTheme(OrgUserSettings);
