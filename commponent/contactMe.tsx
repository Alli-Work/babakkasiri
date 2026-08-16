'use client'
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from "./content";
import { useState } from "react";

const ContacMe = () => {
    const [showSuccess, setShowSuccess] = useState(false);
const [countdown, setCountdown] = useState(4);

    const [errors, setErrors] = useState<Record<string, string>>({});
        // const router = useRouter();

   const [formData, setFormData] = useState({
      fullname: "",
     
      phone: "",
      title: "",
      message: "",
    });
    const validate = () => {
    const errors: Record<string, string> = {};
      
    if (!formData.fullname.trim()) {
      errors.fullname = "نام الزامی است";
     
    }

    if (!/^(?:09\d{9}|۰۹[۰-۹]{9})$/.test(formData.phone)) {
      errors.phone = "شماره موبایل معتبر نیست";
    }

    if (formData.title.length < 4) {
      errors.title = "موضوع را انتخاب کنید است";
    }

    if (formData.message.length < 3) {
      errors.message = "پیام کوتاه است";
    }

    return errors;
  };
    const handleChange = (
        e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        console.log("kkkk");
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        try {
          if (Object.keys(validationErrors).length > 0) {
            // console.log("ssss",validationErrors);
            return;
          }
          // console.log('kkk',formData)
        //   const res = await axios.post(
        //     IPdata.IP+"api/message/create",
        //     formData
        //   );
          // alert(res.data.message);
          
          setFormData({
            fullname: "",
            phone: "",
            title: "",
            message: "",
          });
          setShowSuccess(true);
      setCountdown(4);

      let counter = 4;

      const timer = setInterval(() => {
        counter -= 1;
        setCountdown(counter);

        if (counter <= 0) {
          clearInterval(timer);
        //   router.push("/");
        }
      }, 1000);
    
        } catch (err) {
          console.error(err);
          // alert("خطا در ارسال اطلاعات");
        }
      };
      // console.log(errors);
    
    return (  
    <div className="linear-base" id="contact">
        <div className="mx-auto min-2xl:max-w-9/12  xl:max-w-10/12 w-full   px-6  mb-3 py-6">
        <div dir="rtl" className=" flex  " >
        <Content description="اصفهان، خیابان نواب صفوی (صمدیه)، ساختمان پامچال، طبقه سوم
شنبه تا چهارشنبه — ۹ صبح تا ۵ عصر" lable="فرم ارتباط" title="تماس با من" />
<div className="w-1/2"></div>
        </div>
        
        <div dir="rtl" className="mx-auto max-xl:w-full w-7/12 p-6 ">
    
             <div className="w-full   mx-auto justify-center bg-white shadow-xl rounded-2xl px-20 py-8 max-md:p-8">
    
             <form onSubmit={handleSubmit} className="space-y-5">
               {/* Name */}
               <div>
                 <label className="block mb-2 text-sm font-medium text-gray-700">
                   نام و نام خانوادگی
                 </label>

                 <input
                   type="text"
                   name="fullname"
                   placeholder="علی دایی"
                   value={formData.fullname}
                   onChange={handleChange}
                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  //  required
                   />
                {errors.fullname && (
                  <p className="text-red-500 text-sm mt-1">
                      {errors.fullname}
                  </p>
)}               </div>
    
               {/* Phone */}
               <div>
                 <label className="block mb-2 text-sm font-medium text-gray-700">
                   شماره تلفن
                 </label>
                 <input
                   type="tel"
                   name="phone"
                   placeholder="+1 234 567 890"
                   value={formData.phone}
                   onChange={handleChange}
                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
                 {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                  </p>
)}               
               </div>

    
               {/* Password */}
               <div>
                 <label className="block mb-2 text-sm font-medium text-gray-700">
حوزه حقوقی
                 </label>
                 {/* <input
                   type="text"
                   name="text"
                   placeholder="خرید محصول"
                   value={formData.title}
                   onChange={handleChange}
                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  //  required
                 /> */}
                 <select
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    
                  >
                     <option value="---">---</option>
                    <option value="خرید محصول">خرید محصول</option>
                    <option value="ایرادات خرید">ایرادات خرید</option>
                    <option value="مشاوره">مشاوره</option>
                    {/* <option value="محصول ۳">محصول ۳</option> */}
                  </select>
                 {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                      {errors.title}
                  </p>
)}               
               </div>
    
               {/* Message */}
               <div>
                 <label className="block mb-2 text-sm font-medium text-gray-700">
                   پیام
                 </label>
                 <textarea
                   name="message"
                   rows={4}
                   placeholder=" پیام خودرا بنویسید ..."
                   value={formData.message}
                   onChange={handleChange}
                   className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 ></textarea>
                 {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                  </p>
)}               
               </div>
    
               {/* Submit */}
               <button
                 type="submit"
                 className="w-full bg-primary text-white hover:bg-white hover:text-primary border-1 font-semibold py-3 rounded-lg transition duration-300"
               >
                {/* <Link href='/'> */}
                 ارسال پیام
                {/* </Link> */}
               </button>
             </form>
             
           </div>

           
  </div>
  <div className="mx-auto max-xl:w-full w-7/12 p-6 ">
    <iframe
      className="w-full rounded-2xl shadow-lg mt-4 h-96"
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3362.2011568422595!2d51.339939!3d32.574159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDM0JzI3LjAiTiA1McKwMjAnMjMuOCJF!5e0!3m2!1sfa!2s!4v1784127900033!5m2!1sfa!2s"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
        </div>
    </div>
     );
}
 
export default ContacMe;