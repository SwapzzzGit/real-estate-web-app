import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const url = "https://zillow56.p.rapidapi.com/search?location=houston%2C%20tx";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "97329724d6msh931a6b178bd44acp129128jsn79c9ceb9cd8a",
    "X-RapidAPI-Host": "zillow56.p.rapidapi.com",
  },
};
const ProductListing = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results); // Storing the data in the 'users' state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <NavBar />
      {users.length > 0 && (
        <div>
          {/* Render the image from the 'users' state */}
          <img src={users[0].imgSrc} alt="Property" />
          <p>Street Address: {users[0].streetAddress}</p>
          <p>State: {users[0].state}</p>
          <p>Price: {users[0].price}</p>
          <p>Zipcode: {users[0].zipcode}</p>
          <p>City: {users[0].city}</p>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
