import React from "react";

const Dropdown = ({ suggestions, handleSuggestionClick }) => {
  console.log(suggestions);

  const uniqueStates = new Set(
    suggestions.map((item) => `${item.state.toLowerCase()}`)
  );
  const uniqueCities = new Set(
    suggestions.map((item) => `${item.city.toLowerCase()}`)
  );

  // console.log(uniqueStates)

  const stateOptions = Array.from(uniqueStates).slice(0, 6);
  const cityOptions = Array.from(uniqueCities).slice(0, 6);
  const arr = stateOptions.concat(cityOptions);
  console.log(arr);

  // console.log(stateOptions)
  return (
    <datalist id="suggestions">
      {arr.map((suggestion) => {
        // console.log(suggestion)
        // console.log(suggestion); // Add this line to log each suggestion
        return (
          <option
            // key={id}
            value={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </option>
        );
      })}
    </datalist>
  );
};

export default Dropdown;
