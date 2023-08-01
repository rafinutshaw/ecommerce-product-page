"use client";
import { Listbox, Transition } from "@headlessui/react";
import { usePathname as useLocalePathname, useRouter } from "next-intl/client";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

export const LanguageSelector: React.FC = () => {
  const pathname = usePathname();
  const localePathName = useLocalePathname();
  const router = useRouter();
  const locales: string[] = ["EN", "NO"];
  const localeToLang: any = {
    "/": "en",
    "/no": "no",
  };

  const activeLocale: string = localeToLang[pathname];

  const [selected, setSelected] = useState(activeLocale.toUpperCase());

  const onLanguageChange = (lang: string) => {
    router.replace(localePathName, { locale: lang.toLowerCase() });
    setSelected(lang);
  };

  return (
    <div className="">
      <Listbox value={selected} onChange={onLanguageChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full border rounded-lg bg-white py-2 px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected}</span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {locales.map((lang) => (
                <Listbox.Option
                  key={lang}
                  className={({ active }) =>
                    `relative cursor-default select-none p-2 ${
                      active ? "bg-red-400" : "text-black-400"
                    }`
                  }
                  value={lang}
                >
                  {({}) => (
                    <>
                      <span className={`block truncate`}>{lang}</span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LanguageSelector;
