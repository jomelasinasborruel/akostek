import React from "react";
import Link from "next/link";
import s from "./Header.module.scss";
import { useRouter } from "next/router";
import clsx from "clsx";
import Logo from "@/images/logo.png";
import Image from "next/image";

// asasa
const Header = () => {
  const route = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const navData = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Partners", url: "/partners" },
    { label: "News", url: "/news" },
    { label: "Contact Us", url: "/contact-us" },
  ];

  const handleLoading = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const url = e.currentTarget.href.split("/");

    if (isLoading === true || route.asPath === "/" + url[url.length - 1]) {
      e.preventDefault();
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <nav className="flex justify-center items-center bg-[#292929] relative">
      <div className="w-full flex h-[4.375rem] relative z-10 md:px-10 xl:px-20 px-4 max-w-[80rem]">
        <div className="justify-self-start self-start">
          <Image
            src={Logo}
            alt="akostek-logo"
            className="max-w-[4.375rem] h-auto"
          />
        </div>

        <div className={s["links-wrapper"]}>
          {navData.map((item, key) => (
            <div key={key}>
              <div className="relative transition-all duration-300">
                <Link
                  onClick={(e) => handleLoading(e)}
                  href={item.url}
                >
                  {item.label}
                </Link>
                <div className={s["link-underline"]} />
              </div>
            </div>
          ))}
        </div>
        <div />
      </div>
    </nav>
  );
};

export default Header;
