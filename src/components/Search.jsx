import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div className="w-[600px] mx-auto">
      <input
        type="text"
        onChange={handleChange}
        name="country"
        value={searchText}
        id="country"
        placeholder="Search for a country..."
        className="w-full mt-3 px-[5px] py-[6px] border-[1px] border-gray-400 rounded-md"
      />
    </div>
  );
};

export default Search;
