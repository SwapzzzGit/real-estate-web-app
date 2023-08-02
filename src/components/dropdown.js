import React from "react";

const Dropdown = ({ suggestions, handleSuggestionClick }) => {
  console.log(suggestions);

  const uniqueStates = new Set(
    suggestions.map((item) => `${item.city.toLowerCase()}`)
  );

  const stateOptions = Array.from(uniqueStates).slice(0, 6);

  return (
    <datalist id="suggestions">
      {stateOptions.map((suggestion) => {
        console.log(suggestion); // Add this line to log each suggestion
        return (
          <option
            key={suggestion.id}
            value={suggestion.city}
            onClick={() => handleSuggestionClick(suggestion.city)}
          >
            {suggestion.city}
          </option>
        );
      })}
    </datalist>
  );
};

export default Dropdown;
