import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "../components/dropdown";
import Pagination from "../components/pagination";
import NavBar from "../components/NavBar";
import ProfileDropdown from "../components/profileDropdown";
import listingCover from "../img/listingCover.jpg";

const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=7Unh1kAyAOZ6F8noo69HbStgYELO7SuGQoojhP2w35LWUHtWLRRLi16WTy4NkT-RF_p-s2tQZ5j7vudGmk5NzfV82RDSxuXym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLj4JCqQhfZE9tDCyL0DsaDvKfWJJkz_bHpsIQJQVpvOA7ljR2sCK6FuWDVWN13hQBmSiiBxXJBxolW0w1Xz8msRJb3Q5XrcdA&lib=MePB_WRytVvz23dr296_xE9QXSiohcWGh";

const ProductListing = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]); // 1. #1 State Variable for filtering the property search

  const fetchPropertiesData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data.data);
        // console.log(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchPropertiesData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //1. #2 Function for filtering the property search
  const handleSearchButtonClick = () => {
    const searchedProperties = properties.filter((property) => {
      return (
        property.city.toLowerCase().includes(search.toLowerCase()) ||
        property.state.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredProperties(searchedProperties);
  };
  console.log(filteredProperties);
  // 2. #1 Seach even after hitting "Enter key"
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearchButtonClick();
    }
  };

  const handleSuggestionClick = (city) => {
    setSearch(city);
    handleSearchButtonClick();
  };

  const propertySuggestions = properties
    .filter((property) => {
      return (
        property.city.toLowerCase().startsWith(search.toLowerCase()) ||
        property.state.toLowerCase().startsWith(search.toLowerCase())
      );
    })
    .slice(0, 5);

  //console.log(propertySuggestions);
  return (
    //Seach Input +Dropdown + Search Button
    <ListStyle>
      <div>
        <NavBar />
      </div>
      <InputBox>
        <input
          type="text"
          list="suggestions"
          value={search}
          onChange={handleSearch}
          placeholder="Search by City"
          onKeyDown={handleEnterKey} //2. #2 handleEnterKey function triggers when we hit "Enter key" */
        />
        <Dropdown
          suggestions={propertySuggestions}
          handleSuggestionClick={handleSuggestionClick}
        />

        <button onClick={handleSearchButtonClick}>Search</button>
        {/*1. #3 Button for filtered the property search*/}
      </InputBox>
      <Pagination filteredProperties={filteredProperties} />
    </ListStyle>
  );
};

const ListStyle = styled.div`
  background-image: url("https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2023/07/1920w%402x_nationalbrand.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  color: rgb(42, 42, 51);
  display: block;
  font-size: 15px;
  height: 488px;
  left: 0px;
  line-height: 22.5px;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
`;

const InputBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: row;
  align-items: center;

  input {
    padding: 1.6rem;
    appearance: none;
    background-color: rgb(246, 246, 250);
    border-bottom-color: rgb(0, 106, 255);
    border-bottom-left-radius: 4px;
    /* ... other input styles ... */
  }

  button {
    padding: 1.6rem;
    appearance: none;
    background-color: rgb(0, 106, 255);
    color: white;
    border: none;
    border-bottom-left-radius: 4px;
    cursor: pointer;
    margin-left: 1rem; /* Add some space between input and button */
  }
`;

export default ProductListing;
