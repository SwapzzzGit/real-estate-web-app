import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=7Unh1kAyAOZ6F8noo69HbStgYELO7SuGQoojhP2w35LWUHtWLRRLi16WTy4NkT-RF_p-s2tQZ5j7vudGmk5NzfV82RDSxuXym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLj4JCqQhfZE9tDCyL0DsaDvKfWJJkz_bHpsIQJQVpvOA7ljR2sCK6FuWDVWN13hQBmSiiBxXJBxolW0w1Xz8msRJb3Q5XrcdA&lib=MePB_WRytVvz23dr296_xE9QXSiohcWGh";

const ProductListing = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPropertiesData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data.data);
        console.log(data.data);
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

  const searchedProperties = properties.filter((property) => {
    return (
      property.city.toLowerCase().includes(search.toLowerCase()) ||
      property.state.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by City"
      />

      {searchedProperties.length > 0 &&
        searchedProperties.map((property) => (
          <Card key={property.id}>
            <img src={property.homeMainPic} alt="Property" />
            <p>Street Address: {property.address}</p>
            <p>Price: ${property.price}</p>
            <p>City: {property.city}</p>
            <p>State: {property.state}</p>
            <p>Country: {property.country}</p>
            <p>Agent Name : {property.agent}</p>
            <button>
              <a href={`mailto:${property.email}`}>Contact Now</a>
            </button>
            <div>
              <img src={property.Pic1} alt={`Image 1`} />
              <img src={property.Pic2} alt={`Image 2`} />
              <img src={property.Pic3} alt={`Image 3`} />
              <img src={property.Pic4} alt={`Image 4`} />
              <img src={property.Pic5} alt={`Image 5`} />
            </div>
          </Card>
        ))}
    </div>
  );
};

const Card = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 300px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default ProductListing;
