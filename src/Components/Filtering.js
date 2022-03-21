import React from "react";

const Filtering = ({ filter, setFilter }) => {
  return (
    <>
      <span className="my-3">
        <h3>Search</h3>
        <input
          className="col-2"
          type="text"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </>
  );
};

export default Filtering;
