"use client";

import { faBalanceScale, faBriefcase, faCircleCheck, faHome, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactHTMLElement, useEffect, useState } from "react";

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    // تعداد مراحل انیمیشن
    const steps = end;

    // حداقل زمان بین تغییر اعداد
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      current += 1;

      setCount(current);

      if (current >= end) {
        clearInterval(interval);
        setCount(end);
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count.toLocaleString("fa-IR")}
      {suffix}
    </>
  );
};

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: 12,
    prefix: "+",
    label: "سال تجربه",
    icon:  <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faBalanceScale} />,
  },
  {
    value: 500,
    prefix: "+",
    label: "پرونده حقوقی موفق",
    icon:  <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faBriefcase} />,
  },
  {
    value: 98,
    suffix: "%",
    label: "رضایت موکلان",
    icon:  <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faCircleCheck} />,
  },
];

const StatsBanner: React.FC = () => {
  return (
    <section
      dir="rtl"
      className="w-full px-4 sm:px-6 lg:px-10 mt-44 max-md:mt-0 mb-12 "
    >
      <div
        className="
        linear-base
          mx-auto
          flex
          mx-auto min-2xl:max-w-9/12  xl:max-w-10/12  w-full 
          items-center
          justify-between
          rounded-lg
            shadow
            max-sm:items-start
            max-sm:justify-center
            max-sm:pr-12
          px-8
          py-12
          max-md:flex-col
          max-md:gap-8
          
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              flex
              items-center
              justify-center
              
              gap-4
              text-[#242424]
            "
          >
            {/* Icon */}
            <div className="shrink-0 text-[#D9AE2B]">
              {stat.icon}
            </div>

            {/* Text */}
            <div className="flex items-center gap-2">
              <span
                className="
                  text-3xl
                  max-lg:text-2xl
                  font-bold
                  leading-none
                
                "
              >
                <AnimatedNumber
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000}
                />
              </span>
              <span
                className="
                  text-2xl
                  max-xl:text-xl
                  font-bold
                  leading-none
                  max-sm:text-[23px]
                  max-lg:text-[20px]
                "
              >
                {stat.label}
              </span>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;