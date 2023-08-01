import React from "react";

type SearchIconType = {
  size?: number;
};

export const SearchIcon: React.FC<SearchIconType> = (props: SearchIconType) => {
  const { size = 16 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 16.6523L12.375 13.0273M14.3333 8.31901C14.3333 12.0009 11.3486 14.9857 7.66667 14.9857C3.98477 14.9857 1 12.0009 1 8.31901C1 4.63711 3.98477 1.65234 7.66667 1.65234C11.3486 1.65234 14.3333 4.63711 14.3333 8.31901Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
