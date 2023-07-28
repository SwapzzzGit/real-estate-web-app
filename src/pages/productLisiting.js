import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const url =
  "https://script.googleusercontent.com/macros/echo?user_content_key=KHkDvlCSDPyNwIu82ycr9x4twfu0fdl0T9V_CbuujNMhPrHMoWiQHQRFw2LZIL9N9nxN3AxUh4s_QGFd7Duc5sfKSlsQrzjbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLY999MAnJKWd_Ogd1xf_4-nA7D4VdPXzSfsudt4iYRcepzAUjZpKq5lSHuyOISmynFmgTuarEu2BA6sgBa34SJ7qroWavlf0g&lib=MePB_WRytVvz23dr296_xE9QXSiohcWGh";

const ProductListing = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPropertiesData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data.data);
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
