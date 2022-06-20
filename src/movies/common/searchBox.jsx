// import React from "react";

// const SearchBox = ({ value, onChange }) => {
//   return (
//     <input
//       name="query"
//       className="form-control my-3"
//       value={value}
//       type="text"
//       placeholder="Search..."
//       onChange={(e) => onChange(e.currentTarget.value)}
//     />
//   );
// };

// export default SearchBox;

import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
