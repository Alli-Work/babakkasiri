"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
type DataItem = {
  lable: string;
  title: string;
  description: string;
};
const Content = (data:DataItem) => {
  return (
    <section
      id="home"
      dir="rtl"
      className="  "
    >
       <div className="flex flex-col">
        <p className="text-lg font-bold text-primary"> {data.lable}</p>
        <h3 className="text-2xl font-bold">{data.title}</h3>
        <p className="text-md">{data.description}</p>
       </div>
       
    </section>
  );
};

export default Content;