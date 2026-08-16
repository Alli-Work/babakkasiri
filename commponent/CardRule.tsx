import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CardRule = () => {
    return (
//       <div dir="rtl" 
//       style={{
//       backgroundImage: "url('/ruleCard.png')",
//     }}
//       className=" mb-4  flex flex-col justify-center mx-auto w-[80%] sm:w-[45%] lg:w-[30%]   rounded-xl  shadow-lg  "
//   >
//   {/* <img  className="w-full" src="/img_card.png" alt="تصویر کارد"/> */}
//   <div className="px-6 py-4">
//     <div className="flex justify-between">
      
//     <div className="font-bold text-xl mb-2">فسفر</div>
//     <div className="flex">
//     <div className=" text-sm mb-2">۱۴۰۵/۳/۳</div>
// <FontAwesomeIcon className="text-sm h-4 w-4 mr-1" icon={faCalendarAlt} />
//     </div>

//     </div>
//     <p className="text-gray-700 text-base">
// لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای...    </p>
//   </div>
//   <div className="px-6 pb-2 mb-4 flex justify-end text-primary text-center">
//     {/* <button className=" border-1 border-primary text-primary hover:bg-primary hover:text-white transition w-full py-3 rounded-xl  "> */}
//     <Link href='/Article'>
//               ادامه مطلب
//     </Link>
//             {/* </button> */}
// <FontAwesomeIcon className="text-primary w-6 h-4 mt-1" icon={faArrowLeft} />
            
//   </div>
//       </div> 
<div className="relative mx-auto h-fit w-full max-w-[450px] w-[80%] sm:w-[45%] lg:w-[30%] overflow-hidden rounded-[25px]  bg-white/5 mb-6">

  {/* تصویر */}
  <img
    src="/ruleCard.png"
    alt="قانون"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* لایه گرادیان روی تصویر */}
  <div className="absolute inset-0 shadow-lg" />

  {/* محتوا */}
  <div className="relative z-10 flex h-full flex-col p-12">

    {/* بالای کارت */}
    <div className="flex items-start justify-between ">

      {/* تاریخ */}
      <div className="flex items-center gap-2 text-sm font-bold text-base">
        <span>📅</span>
        <span>۱۴۰۵/۳/۳</span>
      </div>

      {/* عنوان */}
      <h2 className="text-2xl font-bold text-base">
        قانون
      </h2>

    </div>

    {/* متن */}
    <div className="mt-8" dir="rtl">
      <p className="text-md leading-7 text-gray-500 text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
        و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای
        شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای...
      </p>
    </div>

    {/* ادامه مطلب */}
    <div className="mt-auto">
      <button className="flex items-center gap-2 text-lg font-bold text-primary transition hover:text-base cursor-pointer">
        <span className="text-3xl leading-none">←</span>
        <span>ادامه مطلب</span>
      </button>
    </div>

  </div>
</div>
       );
}
 
export default CardRule;