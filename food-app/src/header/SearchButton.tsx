import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { searchInput } from "../redux-toolkit/productSlice";
const SearchButton = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSearchBar = (value: string) => {
    setInput(value);
    dispatch(searchInput(value));
  };

  return (
    <div className="flex mb-4">
      <input
        placeholder="Search any recepie"
        className="bg-blue-50 rounded-sm  p-1 border-2 mr-4"
        value={input}
        onChange={(e) => handleSearchBar(e.target.value)}
      />
      <button className="rounded-lg bg-blue-900 p-1 px-2 text-white font-semibold mr-4">
        Search
      </button>
    </div>
  );
};

export default SearchButton;
