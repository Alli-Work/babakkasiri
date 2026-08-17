
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// import Property from "@/commponent/property";
// import Licence from "@/commponent/licence";
import Link from "next/link";
// import Transformation from "@/commponent/acardeon";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "درباره ما | کیمیا افروز سپاهان",
  description: "آشنایی با شرکت کیمیا افروز سپاهان",
};


const About = () => {
  return (
    <div  className="   mb-10 flex flex-col linear-base" id="about">


    <div className="py-10">
         <div className="mx-auto flex flex-wrap min-2xl:max-w-9/12 xl:max-w-10/12 w-full   xl:gap-20  justify-between items-center">
            
            <div className=" flex xl:flex-row flex-col justify-between">
                {/* <img  className="max-md:hidden min-2xl:w-1/2 w-full -mt-8 w-5/6  max-xl:pl-8 mx-auto md:pl-32 pl-12" src="/hero-about-1.png" alt="عکس کنار توضیح درباره ما"/>
                <img  className="min-md:hidden -mt-2 w-5/6 mx-auto  " src="/hero-about.png" alt="عکس کنار توضیح درباره ما"/> */}
                <div className=" max-xl:flex max-xl:justify-center">
                        <Image
                    src="/babakkasiri/hero-about.png"
                    alt="Hero"
                    width={10000}
                    height={10000}
                
                    className="w-fit   max-md:w-8/12  max-md:mb-6"
                />
                </div>
       <div dir="rtl" className="flex flex-col justify-start min-2xl:w-1/2 w-full min-xl:mt-24 max-xl:px-12">

       {/* <img  className="absolute   min-xl:-mt-16  md:-mt-6 max-md:ml-3 -mt-4 xl:pl-8 xl:w-1/6 md:w-3/12 w-6/12" src="/shape.png" alt="شکل کنار متن"/> */}
       <div className="px-6 text-5xl max-md:text-3xl  font-bold pb-6 leading-relaxed ">
        وکالت برای من
        <b className="text-primary">
&nbsp;
         مسئولیت است
        </b>
         ، نه صرفاً حرفه
         </div>
       <div className=" text-xl max-md:text-lg py-2 px-6   text-justify text-gray-600">من بابک کثیری کارشناس ارشد حقوق تجارت بین‌الملل، وکیل پایه یک دادگستری و عضو کانون وکلای اصفهان با بیش از ۱۲ سال سابقه فعالیت حقوقی. دارای سابقه کارآموزی قضایی، عضو کمیسیون رفاهی و فرهنگی کانون وکلای اصفهان، پژوهشگر حوزه‌های نوین حقوق و مشاور و مذاکره‌کننده شرکت‌های بازرگانی.
        </div>
        <div className="flex justify-center text-justify md:mb-12">
{/*             
            <button
              
            > */}
              <Link className="mt-10 bg-primary hover:bg-primary/90 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-10 py-4 rounded-xl text-xl max-sm:text-sm font-bold text-white" href="https://wa.me/+989132669979">
              ارتباط در واتساپ
              </Link>
            {/* </button> */}

            
              
              <Link className="mr-4 mt-10 glass text-primary hover:bg-primary hover:text-white border-1 border-primary hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-10 py-4 rounded-xl text-xl max-sm:text-sm font-bold" href="/#contact">
              درخواست مشاوره
              </Link>
            
        </div>
      
         </div>
         </div>
         </div>
    </div> 
    {/* <Licence/>
    <Property/>
    <Transformation/> */}
    
    </div>
  );
}
 
export default About;