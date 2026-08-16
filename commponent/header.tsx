
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
// const pathname = "";
  const isActive = (path:any) => pathname === path;
  return (
    <header className="fixed  top-6 max-md:top-3 right-0 w-full z-50 " dir="rtl">
      <div className="mx-auto min-2xl:max-w-9/12  xl:max-w-10/12 w-11/12 bg-base border-2 rounded-3xl drop-shadow-xl h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between backdrop-blur-xs">

        {/* Logo type */}
        <div className="flex">

        <Link href="/">
        <p className=" text-3xl text-primary">بابک کثیری</p>
        </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex gap-20 xl:text-xl">

            <li>
              <Link
                href="/"
                className={`${isActive("/") ? "text-primary font-bold" : "text-gray-100"} hover:text-primary`}
              >
                خانه
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                className={`${isActive("/#about") ? "text-primary font-bold" : "text-gray-100"} hover:text-primary`}
              >
                
                
                درباره ما
              </Link>
            </li>

            <li>
              <Link
                href="/Articles/"
                className={`${isActive("/Articles") ? "text-primary font-bold" : "text-gray-100"} hover:text-primary`}
              >
                مقالات
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`${isActive("/Articles/") ? "text-primary font-bold" : "text-gray-100"} hover:text-primary`}
              >
                قوانین
              </Link>
            </li>
            
            {/* <li>
              <Link
                href="/contactus/"
                className={`${isActive("/contactus/") ? "text-primary font-bold" : "text-gray-100"} hover:text-primary`}
              >
                دوره ها
              </Link>
            </li> */}
            {/* <li>
              <Link
                href="/contactus/"
                className={`${isActive("/contactus/") ? "text-primary font-bold" : "text-gray-100"} hover:text-primary`}
              >
                تماس با ما
              </Link>
            </li> */}
            
          </ul>
        </nav>

        {/* Button + Hamburger */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <Link
            href="/#contact"
            className={`hidden lg:block rounded-xl px-8 py-3 transition
              ${isActive("/#contact")
                ? "bg-white text-primary border border-primary"
                : "bg-primary text-white hover:bg-base hover:text-primary border border-transparent"
              }`}
          >
            دریافت مشاوره
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-lg p-2 bg-primary  border-1 "
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden mt-2 mx-4 rounded-xl bg-white shadow-lg">
          <nav>
            <ul className="flex flex-col text-center">

              <li className="shadow">
                <Link
                  href="/"
                  className={`block py-4 ${
                    isActive("/") ? "text-primary font-bold" : "text-gray-700"
                  } hover:bg-gray-50`}
                  onClick={() => setIsOpen(false)}
                >
                  خانه
                </Link>
              </li>

              <li className="shadow">
                <Link
                  href="/aboutUs"
                  className={`block py-4 ${
                    isActive("/aboutUs/") ? "text-primary font-bold" : "text-gray-700"
                  } hover:bg-gray-50`}
                  onClick={() => setIsOpen(false)}
                >
                  درباره ما
                </Link>
              </li>

              <li className="shadow">
                <Link
                  href="/Products"
                  className={`block py-4 ${
                    isActive("/Products/") ? "text-primary font-bold" : "text-gray-700"
                  } hover:bg-gray-50`}
                  onClick={() => setIsOpen(false)}
                >
                  محصولات
                </Link>
              </li>

              <li className="shadow">
                <Link
                  href="/contactus"
                  className={`block py-4 ${
                    isActive("/contactus/") ? "text-primary font-bold" : "text-gray-700"
                  } hover:bg-gray-50`}
                  onClick={() => setIsOpen(false)}
                >
                  تماس با ما
                </Link>
              </li>
              
            
              <li className="p-4">
                <a
                  href="tel:03142316002"
                  className="block rounded-xl bg-primary py-3 text-white"
                  onClick={() => {setIsOpen(false);window.location.href = "tel:+989123456789"}}
                >
                  دریافت مشاوره
                </a>
              </li>

            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Headers;