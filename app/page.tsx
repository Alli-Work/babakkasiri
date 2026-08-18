import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/commponent/hero";
import StatsBanner from "@/commponent/propertyNum";
import Test from "@/commponent/propertyNum";
import Content from "@/commponent/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Ability from "@/commponent/ability";
import About from "@/commponent/about";
import Articles from "@/commponent/articles";
import Rule from "@/commponent/rule";
import ContacMe from "@/commponent/contactMe";
import Carousel from "@/commponent/message";

export const metadata: Metadata = {
  title: "بابک کثیری | صفحه اصلی",
  description: "",
};


const Home = () => {
  return (
    <div className="   flex flex-col">
    
    <Hero/>
    <StatsBanner/>
   <Ability/>
   <About/>
   <Carousel/>
   <Articles/>
   <Rule/>
   <ContacMe/>
    </div>
  );
}
export default Home;
