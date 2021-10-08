import { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import {
  CommonElementsOrg,
  TangleHistory,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Hr,
  H6,
  Button,
  ToggleSwitch,
  SettingToggleSwitchTextL,
} from "../../../components/ui";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserSettings.scss";

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
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 350px;
  hr:last-of-type {
    padding-bottom: 2rem;
  }
`;

/**
 * Returns the NotifsPermsSettingsOrg component which is the page to
 * manage the notification and permission settings for the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component.
 * @returns {ReactElement} - The NotifsPermsSettingsOrg component.
 */
const RoleSettings = ({ theme }) => {
  interface IRoll {
    _id: string;
    name: string;
    canManageUsers: boolean;
    canManageIdentity: boolean;
    canViewHistory: boolean;
    canManageApplications: boolean;
    canManageCredentials: boolean;
  }
  const [roles, setRoles] = useState<IRoll[]>();
  const [roleId, setRoleId] = useState<string>();
  const [role, setRole] = useState<IRoll>();

  const userInfoMeta = useSelector((state: RootState) => state.userLogin);
  const { userInfo }: any = userInfoMeta;

  const getRoles = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const roles = await axios.get("/api/roles", config);
    setRoles([...roles.data]);
  };

  useEffect(() => {
    const getRole = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      if (roleId) {
        const role = await axios.get(`/api/roles/${roleId}`, config);
        setRole(role.data);
      }
    };
    getRole();
  }, [roleId]);

  useEffect(() => {
    getRoles();
  }, []);

  const saveRoleSettings = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    if (role) {
      const { data }: any = await axios
        .patch(`/api/roles/${roleId}`, role, config)
        .catch((error) => {
          toast.error("Something went wrong please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      if (data) {
        toast.success("Role updated successfuly", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        await getRoles();
      }
    } else {
      toast.error("No role selected", {
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

  const handleDelete = async (id: string) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const deleted = await axios.delete(`/api/roles/${id}`, config);
    if (deleted) {
      toast.success("Role deleted successfuly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setRole(null);
      await getRoles();
    }
  };

  const createNewRole = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const newRole = await axios
      .post(
        `/api/roles`,
        {
          name: `New Role ${Math.floor(Math.random() * 90 + 10)}`,
          identity: false,
          history: false,
          credentials: false,
          users: false,
          applications: false,
        },
        config
      )
      .catch((error) => {
        toast.error("Unable to create role please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    if (newRole) {
      toast.success("Role creted successfuly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      await getRoles();
      setRole(newRole.data);
    }
  };

  const saveSettingsBtn = (
    <Button primary btnColor={theme.btnPriBg} onClick={saveRoleSettings}>
      SAVE SETTINGS
    </Button>
  );
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
      <PageContentContainer>
        <MainContentContainer>
          <CustomMainContent
            contentTitle="Roles"
            settingsActive="Roles"
            componentRight={saveSettingsBtn}
          >
            <Left>
              {roles &&
                roles.map((role) => (
                  <button
                    className={`role ${
                      String(roleId) === String(role._id) ? "active-role" : ""
                    }`}
                    onClick={() => {
                      setRoleId(role._id);
                    }}
                  >
                    {role.name}
                  </button>
                ))}
              <button className="role newRole" onClick={createNewRole}>
                + New Role
              </button>
            </Left>
            <Right>
              {role && (
                <div className="roleContainer">
                  <h2>Role Name</h2>
                  <input
                    type="text"
                    className="nameInput"
                    value={role.name}
                    onChange={(event: any) => {
                      setRole({ ...role, name: event.target.value });
                      console.log(event.target);
                    }}
                  />
                  <div className="permissions">
                    <div className="roleInfo">
                      <h3>Manage Credentials</h3>
                      <ToggleSwitch
                        bgColorOn={theme.mainColors.blue}
                        bgColorOff={theme.mainColors.white}
                        btnColorOn={theme.mainColors.white}
                        btnColorOff={theme.mainColors.blue}
                        isOn={role.canManageCredentials}
                        onToggle={() => {
                          setRole({
                            ...role,
                            canManageCredentials: !role.canManageCredentials,
                          });
                        }}
                      />
                    </div>
                    <div className="roleInfo">
                      <h3>View History</h3>
                      <ToggleSwitch
                        bgColorOn={theme.mainColors.blue}
                        bgColorOff={theme.mainColors.white}
                        btnColorOn={theme.mainColors.white}
                        btnColorOff={theme.mainColors.blue}
                        isOn={role.canViewHistory}
                        onToggle={() => {
                          setRole({
                            ...role,
                            canViewHistory: !role.canViewHistory,
                          });
                        }}
                      />
                    </div>
                    <div className="roleInfo">
                      <h3>Manage Identity</h3>
                      <ToggleSwitch
                        bgColorOn={theme.mainColors.blue}
                        bgColorOff={theme.mainColors.white}
                        btnColorOn={theme.mainColors.white}
                        btnColorOff={theme.mainColors.blue}
                        isOn={role.canManageIdentity}
                        onToggle={() => {
                          setRole({
                            ...role,
                            canManageIdentity: !role.canManageIdentity,
                          });
                        }}
                      />
                    </div>
                    <div className="roleInfo">
                      <h3>Manage Users</h3>
                      <ToggleSwitch
                        bgColorOn={theme.mainColors.blue}
                        bgColorOff={theme.mainColors.white}
                        btnColorOn={theme.mainColors.white}
                        btnColorOff={theme.mainColors.blue}
                        isOn={role.canManageUsers}
                        onToggle={() => {
                          setRole({
                            ...role,
                            canManageUsers: !role.canManageUsers,
                          });
                        }}
                      />
                    </div>
                    <div className="roleInfo">
                      <h3>Manage Applications</h3>
                      <ToggleSwitch
                        bgColorOn={theme.mainColors.blue}
                        bgColorOff={theme.mainColors.white}
                        btnColorOn={theme.mainColors.white}
                        btnColorOff={theme.mainColors.blue}
                        isOn={role.canManageApplications}
                        onToggle={() => {
                          setRole({
                            ...role,
                            canManageApplications: !role.canManageApplications,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(role._id)}
                  >
                    Delete Role
                  </button>
                </div>
              )}
            </Right>
          </CustomMainContent>
        </MainContentContainer>
        <TangleHistory />
      </PageContentContainer>
    </>
  );
};

export default withTheme(RoleSettings);
