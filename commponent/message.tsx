"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from "./content";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "علی دایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون و برای شرایط فعل ",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "علی دایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون و برای شرایط فعل ",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "علی دایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون و برای شرایط فعل ",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    title: "علی دایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون و برای شرایط فعل ",
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    title: "علی دایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون و برای شرایط فعل ",
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    title: "علی دایی",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون و برای شرایط فعل ",
    image: "/images/product6.jpg",
  },
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // تشخیص تعداد آیتم‌ها بر اساس عرض صفحه
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  // اگر سایز صفحه تغییر کرد، index را اصلاح می‌کنیم
  useEffect(() => {
    const maxIndex = Math.max(items.length - itemsPerView, 0);

    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, currentIndex]);

  const nextSlide = () => {
    const maxIndex = items.length - itemsPerView;

    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  const prevSlide = () => {
    const maxIndex = items.length - itemsPerView;

    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative my-8  mx-auto min-2xl:max-w-9/12  xl:max-w-10/12 w-full "
      dir="rtl"
    >
        <div className="flex justify-between">
        <div className="px-6  mb-3">

        <Content description="نظر واقعی افرادی که با اطمینان پرونده‌شان را به ما سپردند" lable="نظرات موکلین
        " title="تجربه موکلان " />
        </div>
         <div className="flex gap-2">

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          
          flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-
          shadow-md
          transition
          hover:bg-gray-100
          sm:h-10
          sm:w-10
          mt-10
        "
      >
        <ChevronRight
          size={20}
          className="sm:h-[22px] sm:w-[22px] text-primary"
        />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
        flex
          h-9
          w-9
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          transition
          hover:bg-gray-100
          sm:h-10
          sm:w-10
          mt-10
        "
      >
        <ChevronLeft
          size={20}
          className="sm:h-[22px] sm:w-[22px] text-primary "
        />
      </button>
      </div>
        </div>

      {/* Carousel */}
      <div className="overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out mb-10"
          style={{
            transform: `translateX(${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0 px-2 sm:px-3"
              style={{
                width: `${100 / itemsPerView}%`,
              }}
            >
              <div className="h-full overflow-hidden rounded-2xl linear-base  shadow-lg py-8">

                
                {/* Content */}
                <div className="p-4 sm:p-5">
                <div className="flex justify-between">
                  <h3 className="mb-2 text-lg font-bold text-primary sm:text-xl">
                    {item.title}
                  </h3>
            
                </div>

                  <p className="text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Button */}
      
    </div>
  );
}