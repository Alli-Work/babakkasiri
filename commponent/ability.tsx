import { faBalanceScale, faBuilding, faContactBook, faContactCard, faFileContract, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from "./content";

const Ability = () => {
    return (  <div className="mx-auto min-2xl:max-w-9/12  xl:max-w-10/12 w-full   px-6  mb-3 mt-4" >
      <Content description="تخصص در دو حوزه اصلی حقوق تجاری و ملکی با رویکرد پیشگیرانه و حل‌مسئله" lable="خدمات حقوقی" title="حوزه‌های تخصصی" />
      <div className="flex max-md:flex-col my-5">
      <div className="w-1/2 max-md:w-full linear-right h-40 mr-4 max-md:mb-4 max-md:mr-0 shadow rounded-xl px-4 py-6">
      <div
            className="
              flex
              items-center
              justify-end
              gap-4
              text-[#242424]
            "
          >
            <div className="flex ">
              
              <span
                className="
                  text-2xl
                  font-bold
                  leading-none
                "
              >
                حقوق تجاری
              </span>

              
            </div>
            {/* Icon */}
            <div className="shrink-0 text-[#D9AE2B]">
              {/* icon */}
              <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faBuilding} />
            </div>

            {/* Text */}
          </div>
          <div className=" px-4 py-2 text-gray-600" dir="rtl">
            تنظیم و بررسی قراردادهای تجاری، اختلافات شرکتی، ورشکستگی و تصفیه، انحلال شرکت‌ها، و مشاوره حقوقی در معاملات بازرگانی.
          </div>
      </div>
      <div className="w-1/2 max-md:w-full linear-base h-40 ml-4 max-md:ml-0 shadow rounded-xl px-4 py-6">
      <div
            className="
              flex
              items-center
              justify-end
              gap-4
              text-[#242424]
            "
          >
            <div className="flex ">
              
              <span
                className="
                  text-2xl
                  font-bold
                  leading-none
                  
                "
              >
                حقوق ملکی
              </span>

              
            </div>
            {/* Icon */}
            <div className="">
              {/* icon */}
              <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faHome} />
            </div>

            {/* Text */}
          </div>
          <div className=" px-4 py-2 text-gray-600" dir="rtl">
            دعاوی ملکی، تنظیم قراردادهای خریدوفروش، اجاره، رهن، افراز ملک، رفع تصرف، و پیگیری پرونده‌های ثبتی در اصفهان.
          </div>
      </div>
      </div>
      <div className="flex max-md:flex-col my-5">
      <div className="w-1/2 max-md:w-full linear-right h-40 mr-4 max-md:mb-4 max-md:mr-0 shadow rounded-xl px-4 py-6">
      <div
            className="
              flex
              items-center
              justify-end
              gap-4
              text-[#242424]
            "
          >
            <div className="flex ">
              
              <span
                className="
                  
                  font-bold
                  leading-none
                  text-2xl
                  
                "
              >
                تنظیم قرارداد
              </span>

              
            </div>
            {/* Icon */}
            <div className="shrink-0 text-[#D9AE2B]">
              {/* icon */}
              <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faFileContract} />
            </div>

            {/* Text */}
          </div>
          <div className=" px-4 py-2 text-gray-600" dir="rtl">
تهیه و تنظیم انواع قراردادهای تجاری و ملکی با رعایت کلیه الزامات قانونی و حفاظت از منافع موکل.          </div>
      </div>
      <div className="w-1/2 max-md:w-full linear-base h-40 ml-4 max-md:ml-0 shadow rounded-xl px-4 py-6">
      <div
            className="
              flex
              items-center
              justify-end
              gap-4
              text-[#242424]
            "
          >
            <div className="flex ">
              
              <span
                className="
                  text-2xl
                  font-bold
                  leading-none
                  
                "
              >
                داوری و میانجیگری
              </span>

              
            </div>
            {/* Icon */}
            <div className="">
              {/* icon */}
              <FontAwesomeIcon className="text-primary w-2/4 h-2/4 text-4xl" icon={faBalanceScale} />
            </div>

            {/* Text */}
          </div>
          <div className=" px-4 py-2 text-gray-600" dir="rtl">
حل‌وفصل اختلافات از طریق داوری و میانجیگری، کاهش هزینه و زمان پرونده‌های حقوقی.          </div>
      </div>
      </div>
    </div> );
}
 
export default Ability;