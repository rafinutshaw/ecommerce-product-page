import { AppImages } from "@/app/utils/constants";
import HeartIcon from "@/public/icons/heart.icon";
import UserIcon from "@/public/icons/user.icon";
import Image from "next/image";
import Link from "next/link";
import AppSearchbox from "./app-searchbox/app-searchbox";
import HeaderActions from "./header-actions/header-actions";
import { HeaderMenu } from "./header-menu/header-menu";
import LanguageSelector from "./language-selector/language-selector";

export const AppLayout: React.FC = () => {
  return (
    <>
      <div className="flex justify-center border-b-2">
        <div className="container h-16 w-full flex items-center px-2">
          <Link href="/">
            <Image
              src={AppImages.applogo}
              alt="app logo"
              height={30}
              width={140}
              className="mr-4"
            />
          </Link>

          <AppSearchbox />
          <div className="ml-4">
            <HeaderActions />
          </div>

          <div className="ml-4">
            <LanguageSelector />
          </div>
        </div>
      </div>
      <div className="flex justify-center border-b-2">
        <div className="container h-10 w-full flex items-center px-2 justify-between">
          <div>
            <HeaderMenu />
          </div>

          <div className="grid gap-4 grid-cols-2 items-center">
            <Link href={"#"}>
              <UserIcon />
            </Link>
            <Link href={"#"}>
              <HeartIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
