import React from "react";

const SortingFeature = ({ sortOrder, onSortOrderChange }) => {
  return (
    <select value={sortOrder} onChange={(e) => onSortOrderChange(e.target.value)}>
      <option value="asc">Sort A-Z</option>
      <option value="desc">Sort Z-A</option>
    </select>
  );
};

export default SortingFeature;
