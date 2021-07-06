import { useState, useRef, useEffect } from "react";
import styled, {withTheme} from "styled-components";
import InputText from "./InputText";

const Container = styled.div`
  position: relative;
`;

const Search = styled(InputText)`
`;

const SearchResultsContainer = styled.div`
  width: 100%;
  margin-top: -1rem;
  z-index: 1;
  display: none;
  position: absolute;

`;

const SearchResults = styled.div`
  background-color: ${props => props.theme.mainColors.white};
  margin: 0 2%;
  border-radius: 0 0 10px 10px;
  padding: 1rem 0;
  box-shadow: 0px 19px 53px -4px rgba(0,0,0,0.3);
  overflow: auto;
  max-height: calc(35vh - 4rem);

  /**********************
  For the custom scrollbar 
  ***********************/

  &::-webkit-scrollbar {
      background: none;
      width:8px;
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
      background: none;
      border-radius: 30px;
      margin: 5px;
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
      background-color:#babac0;
      border-radius:16px;
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {
      display: none;
  }
`;

const SearchItem = styled.div`
  font-family: "Open Sans";
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${props => props.theme.mainColors.black};
  &:hover {
    background-color: ${props => props.theme.mainColors.blue};
    color: ${props => props.theme.mainColors.white};
  }
`;

const NoCredentialsFound = styled.div`
  font-family: "Open Sans";
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.mainColors.black};
`;

const useOutsideHandler = (containerRef, searchResultsContainerRef) => {
  useEffect(() => {
      const handleClickOutside = e => {
          if (containerRef.current && !containerRef.current.contains(e.target)) {
            searchResultsContainerRef.current.style.display = "none";
          }
      }

      // Bind the event listener
      window.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          window.removeEventListener("mousedown", handleClickOutside);
      };
  });
}


const DynamicSearch = ({credentialNames}) => {
  const [filtered, setFiltered] = useState(credentialNames);
  const [inputValue, setInputValue] = useState("");

  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const searchResultsContainerRef = useRef(null);
  useOutsideHandler(containerRef, searchResultsContainerRef);

  const filterData = (keyword: any) => {
    let search;
    try {
      search = new RegExp(keyword, 'gi');
      setFiltered(
        credentialNames.filter((item) => {
          if(search.test(item) ){
            return item;
          }
          else {
            return "";
          }
        })
      );
    } catch(e) {}
  };

  return (
    <Container ref={containerRef}>
      <Search 
        type="text"
        value={inputValue}
        placeholder="Search Credential" 
        inputRef={el => inputRef.current = el} 
        onFocus={() => searchResultsContainerRef.current.style.display = "block"}
        onChange={(e) => {
            setInputValue(e.target.value || "");
            filterData(e.target.value);
          }
        } 
      />
      <SearchResultsContainer ref={el => searchResultsContainerRef.current = el}>
        <SearchResults>
        {
          filtered.length > 0 ? 
          filtered.map((opt, index) => (
            <SearchItem 
              key={index}
              onClick={() => {
                  setInputValue(opt);
                  inputRef.current.nextElementSibling.classList.add("inputFilled");
                  searchResultsContainerRef.current.style.display = "none";
                }
              }
            >
                {opt}
            </SearchItem>
          )) :
          <NoCredentialsFound>No credentials found</NoCredentialsFound>
        }
        </SearchResults>
      </SearchResultsContainer>
    </Container>
  );
}

export default withTheme(DynamicSearch);