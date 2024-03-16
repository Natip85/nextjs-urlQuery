import React from "react";
import SearchMenu from "./SearchMenu";

interface NavbarProps {
  searchParams: { tab?: string; title?: string };
}
const Navbar = ({ searchParams }: NavbarProps) => {
  return (
    <div>
      <SearchMenu searchParams={searchParams} />
    </div>
  );
};

export default Navbar;
