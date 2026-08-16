"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>

    <section
      id="home"
      dir="rtl"
      className=" "
      style={{backgroundImage:"/hero.png"}}
    >
      {/* Background */}
      <Image
        src="/hero11.png"
        alt="Hero"
        width={10000}
        height={10000}
      
        className="max-md:hidden absolute w-full  -z-10   min-h-30"
        style={{minHeight:"32rem"}}
      />
      <Image
        src="/hero222.png"
        alt="Hero"
        width={10000}
        height={10000}
      
        className="min-md:hidden absolute w-full  -z-10   min-h-30 max-sm:h-96"
        
      />
      {/* <img src="/hero2.png" alt="عکس پس زمینه خانه" className="absolute max-xl:hidden min-h-[650px] w-full max-sm:h-8/12 max-lg:h-9/12 max-md:h-8/12  max-2xl:h-10/12 h-9/12 -z-10  xl:-mt-12 " />
      <img src="/hero_md2.png" alt="عکس پس زمینه خانه" className="absolute max-md:hidden min-h-[650px] min-xl:hidden w-full  max-sm:h-8/12 max-lg:h-9/12 max-md:h-8/12  max-2xl:h-10/12 h-9/12 -z-10  xl:-mt-12 " />
      <img src="/hero_sm_3.png" alt="عکس پس زمینه خانه" className="absolute min-md:hidden min-h-[900px] w-full  h-full -z-10  -mt-60 " /> */}
            <div className=" absolute inset-0  -z-10  " />

       <div className=" mx-auto min-2xl:w-9/12  xl:w-10/12 max-md:w-11/12 max-md:pb-10  min-md:px-6 min-2xl:pt-40 min-2xl:pb-20 pt-24 min-2xl:mt-24 mt-8 max-md:mt-96 max-sm:mt-48">

        {/* Tag */}
        <div className=" rounded-2xl flex  justify-start min-md:w-1/2 ">

        <div className="   inline-flex items-center gap-3 rounded-full  px-5 py-2 mb-3 min-md:w-7/12 ">
          <span className="w-3 h-3 rounded-full bg-primary"></span>
          <span className="text-white max-lg:text-sm">
وکیل دادگستری . اصفهان          </span>
        </div>
        </div>

        {/* Main Content */}
        <div className=" max-md:glass max-md:backdrop-blur-xs max-md:py-4 max-md:bg-[#FDF9F0] rounded-2xl min-md:w-7/12 text-right flex flex-col lg:flex-row justify-between items-center gap-20">

          {/* Right */}
          <div className="max-md:text-center flex-1 text-white  max-md:text-base">

            <h1 className=" max-2xl:text-4xl max-xl:text-2xl  max-sm:text-2xl text-5xl   font-bold leading-relaxed">
              <div>

              همراه مطمئن شما در حل پرونده‌های 
              </div>
              {/* تولیدکننده <div className="max-sm:hidden">تخصصی</div> مکمل‌های

معدنی برای خوراک دام و طیور */}
           
              <div className="text-primary px-2">

              حقوقی، تجاری و ملکی 
              </div>
            </h1>

            <p className="mt-3 text-xl max-md:px-4  max-md:font-bold  max-xl:text-sm max-md:text-sm  leading-9 text-white  max-md:text-gray-700">
              ارائه خدمات تخصصی در دعاوی ملکی، تجاری و تنظیم قراردادها

                
              با بیش از ۱۲ سال تجربه موفق در حل پرونده‌های پیچیده.
               </p>


              <Link
  href="https://wa.me/+989132669979"
  className="min-md:mt-10 mr-1 max-lg:mt-4 inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 max-sm:w-44 max-sm:h-14 max-lg:py-4 max-lg:px-6  px-10 py-4 max-lg:px-6   rounded-lg text-xl max-lg:text-sm font-bold"
>
 ارتباط در واتساپ
</Link>

<Link
  href="/#contact"
  className="min-md:mr-4 mr-1 min-md:mt-10 max-md:text-primary max-md:bg-white/25 max-lg:mt-4 inline-flex items-center justify-center border-2 border-primary text-white hover:bg-primary/90 hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 max-sm:w-44  px-10 py-4 max-lg:px-6   max-lg:py-4 rounded-lg text-xl max-lg:text-sm font-bold "
>
درخواست مشاوره
</Link>
          </div>

          {/* Left */}
         
        </div>
      </div>
    </section>
    
    {/* <section className="min-md:hidden" style={{marginBottom:"35rem"}}>
        <Image
            src="/hero-md.png"
            alt="Hero"
            width={10000}
            height={10000}
          
            className="absolute w-full  -z-10   min-h-30"
            style={{minHeight:"30rem"}}
          />
    <div
    style={{marginTop:"30rem"}}
      className=" 
      mx-auto
                w-10/12
        rounded-2xl
        border
        border-[rgba(255,255,255,0.52)]
        bg-[rgba(255,255,255,0.11)]
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        backdrop-blur-[3.3px]
        absolute inset-0  -z-10
        h-94
        
      "
    >
      <div dir="rtl" className="flex justify-center py-4 text-2xl font-bold text-white">
        وکیل پایه یک دادکستری
        <p className="px-2 text-primary">
          بابک کثیری     
        </p>
      </div>
      <div dir="rtl" className="flex justify-center py-4 px-20 text-sm text-white">
        با سال‌ها تجربه در حقوق تجاری و ملکی، کنار موکلانم می‌ایستم تا پیچیده‌ترین دعاوی را با دقت و حرفه‌ای‌گری حل‌وفصل کنم.
      </div>
            <div className="flex justify-center">
                    <Link
              href="https://wa.me/+989913190060"
              className=" mr-1 max-lg:mt-4 inline-flex items-center justify-center bg-primary hover:bg-primary/90 hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 max-sm:w-44 max-sm:h-14 max-lg:py-4 max-lg:px-6  px-10 py-4 max-lg:px-6   rounded-lg text-xl max-lg:text-sm font-bold"
            >
            مشاوره در واتساپ
            </Link>

            <Link
              href="/Products"
              className="min-md:mr-4 mr-1  max-lg:mt-4 text-white inline-flex items-center justify-center border-2 border-primary  hover:bg-primary/90 hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 max-sm:w-44  px-10 py-4 max-lg:px-6   max-lg:py-4 rounded-lg text-xl max-lg:text-sm font-bold "
            >
            درخواست مشاوره
            </Link>
            </div>
    </div>
    </section> */}
    </>
  );
};

export default Hero;