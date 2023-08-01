"use client";
import React, { Fragment } from "react";

import ArrowDownIcon from "@/public/icons/arrow-down.icon";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Category } from "./header-menu.types";

export const HeaderMenu: React.FC = () => {
  const menu: Category[] = [
    { title: "Sofa", items: ["item1", "item2", "item3"] },
    { title: "Chair", items: ["item1", "item2", "item3"] },
    { title: "Bed", items: ["item1", "item2", "item3"] },
    { title: "Table", items: ["item1", "item2", "item3"] },
  ];

  return (
    <>
      {menu.map((category: Category, categoryIndex: number) => (
        <Menu
          as="div"
          className="relative inline-block text-left"
          key={category.title}
        >
          <div>
            <Menu.Button className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {category.title}
              <div className="text-black-400 w-4 ml-3">
                <ArrowDownIcon />
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {category.items.map((item: string) => (
                <Menu.Item key={`${item}${categoryIndex}`}>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? "bg-red-400 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href={"#"}
                    >
                      {item}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      ))}
    </>
  );
};
