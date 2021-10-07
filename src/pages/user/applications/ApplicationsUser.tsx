import { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import {
  CommonElementsUser,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Button,
  UserApplicationHolder,
} from "../../../components/ui";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { getMyApplications } from "../../../actions/applicationActions";

const DataHolder = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-row-gap: 2rem;
  margin-bottom: 1rem;
`;

/**
 * Returns the ApplicationsUser component which is the page that
 * displays the applications of the user.
 * @param {Object} theme - To receive the theme from the parent component.
 * @returns {ReactElement} - The ApplicationsUser component.
 */
const ApplicationsUser = ({ theme }) => {
  const dispatch = useDispatch();
  const myApplicationsMeta = useSelector(
    (state: RootState) => state.getMyApplications
  );
  const { myApplications, loading, error }: any = myApplicationsMeta;
  useEffect(() => {
    dispatch(getMyApplications());
  }, []);

  const newAppBtn = (
    <Button
      primary
      btnColor={theme.btnPriBg}
      onClick={() => (window.location.href = "/user/applications/new")}
    >
      + NEW APPLICATION
    </Button>
  );
  return (
    <>
      <CommonElementsUser menuActive="Applications" />
      <PageContentContainer>
        <MainContentContainer>
          <MainContent contentTitle="Applications" componentRight={newAppBtn}>
            <DataHolder>
              {loading ? (
                <div>loading</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                myApplications &&
                myApplications.map((appData) => (
                  <UserApplicationHolder appData={appData} />
                ))
              )}
            </DataHolder>
          </MainContent>
        </MainContentContainer>
      </PageContentContainer>
    </>
  );
};

export default withTheme(ApplicationsUser);
