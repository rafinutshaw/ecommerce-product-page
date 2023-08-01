"use client";
import SearchIcon from "@/public/icons/search.icon";

export const AppSearchbox: React.FC = () => {
  return (
    <div className="flex bg-red-400 items-center p-1 rounded-lg flex-1">
      <input
        className="w-full pl-4 px-2 py-1 rounded outline-none"
        placeholder="Search"
      />
      <div className="color-white mx-2">
        <SearchIcon />
      </div>
    </div>
  );
};

export default AppSearchbox;
