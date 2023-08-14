import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "../components/dropdown";
import Pagination from "../components/pagination";
import NavBar from "../components/NavBar";
import ProfileDropdown from "../components/profileDropdown";

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
    <div>
      <div>
        <NavBar />
      </div>
      <div>
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
      </div>
      <Pagination filteredProperties={filteredProperties} />
    </div>
  );
};

export default ProductListing;
