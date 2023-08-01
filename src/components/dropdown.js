import React from "react";

const Dropdown = ({ suggestions, handleSuggestionClick }) => {
  console.log(suggestions);
  return (
    <datalist id="suggestions">
      {suggestions.map((suggestion) => (
        <option
          key={suggestion.id}
          value={suggestion.city}
          onClick={() => handleSuggestionClick(suggestion.city)}
        >
          {suggestion.city}
        </option>
      ))}
    </datalist>
  );
};

export default Dropdown;
