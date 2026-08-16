import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Card = () => {
    return (
    <div dir="rtl" className=" mb-4  flex flex-col justify-center mx-auto w-[80%] sm:w-[45%] lg:w-[30%]   rounded-xl overflow-hidden shadow-lg">
  <img  className="w-full" src="/img_card.png" alt="تصویر کارد"/>
  <div className="px-6 py-4">
    <div className="flex justify-between">
      
    <div className="font-bold text-xl mb-2">مقاله</div>
    <div className="flex">
    <div className=" text-sm mb-2">۱۴۰۵/۳/۳</div>
<FontAwesomeIcon className="text-sm h-4 w-4 mr-1" icon={faCalendarAlt} />
    </div>

    </div>
    <p className="text-gray-700 text-base text-justify">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای...    </p>
  </div>
  <div className="px-6 pb-2 mb-4 flex justify-end text-primary text-center">
    {/* <button className=" border-1 border-primary text-primary hover:bg-primary hover:text-white transition w-full py-3 rounded-xl  "> */}
    <Link href='/Article'>
              ادامه مطلب
    </Link>
            {/* </button> */}
<FontAwesomeIcon className="text-primary w-6 h-4 mt-1" icon={faArrowLeft} />
            
  </div>
      </div>  );
}
 
export default Card;