import CartIcon from "@/public/icons/cart.icon";
import Link from "next/link";
import React from "react";

export const HeaderActions: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-1 items-center ">
      <Link className="cursor-pointer" href="#">
        <CartIcon />
      </Link>
    </div>
  );
};

export default HeaderActions;
