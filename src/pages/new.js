// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";

// const url =
//   "https://script.googleusercontent.com/macros/echo?user_content_key=KHkDvlCSDPyNwIu82ycr9x4twfu0fdl0T9V_CbuujNMhPrHMoWiQHQRFw2LZIL9N9nxN3AxUh4s_QGFd7Duc5sfKSlsQrzjbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLY999MAnJKWd_Ogd1xf_4-nA7D4VdPXzSfsudt4iYRcepzAUjZpKq5lSHuyOISmynFmgTuarEu2BA6sgBa34SJ7qroWavlf0g&lib=MePB_WRytVvz23dr296_xE9QXSiohcWGh";
// const don = () => {
//   const [property, setProperty] = useState([]);

//   const fetchPropertiesData = () => {
//     fetch(url)
//       .then((response = response.json()))
//       .then((data) => {
//         setProperty(data.data);
//       })
//       .catch((error) => {
//         console.error("Error Occured :", error);
//       });
//   };
//   useEffect(() => {
//     fetchPropertiesData();
//   }, []);
//   return (
//     <div>
//       <NavBar />
//       {property?.length > 0 &&
//         property.map((property) => (
//           <div key={property.id}>
//             <img src={property.homeMainPic} alt="Main home Image" />
//             <p>Price : ${property.price}</p>
//             <p>Street Address : {property.address}</p>
//             <p>State : {property.state}</p>
//             <p>City : {property.city}</p>
//             <p>country : {property.country}</p>
//             <div>
//               <img src={property.pic1} alt="Image 1" />
//               <img src={property.pic2} alt="Image 2" />
//               <img src={property.pic3} alt="Image 3" />
//               <img src={property.pic4} alt="Image 4" />
//               <img src={property.pic5} alt="Image 5" />
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };
