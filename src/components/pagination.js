import React, { useState } from "react";

const Pagination = ({ filteredProperties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const currentItems = filteredProperties.slice(startIndex, endIndex);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <ul>
        {currentItems.map((property) => (
          <div>
            <li key={property.id}></li>
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
          </div>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage}</span>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          disabled={currentPage === pageNumber}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
export default Pagination;

{
  /*  Handrun Debug
data = 40
items per page = 5

pages total = 8

current page = 2

page 2 
1 = start index
2
3
4
5 = end index

end index = 2 * 5 = 10
start index = 10 - 5 = 5


0,1,2,3,4,5,6,7,8,9,10 */
}
