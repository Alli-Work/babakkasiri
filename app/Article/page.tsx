

const Article = () => {
  return (
    <div className="   flex flex-col  linear-base">
    
    <main>
      
    <img src="/babakkasiri/img_card.png" alt="" className="absolute w-full max-sm:h-8/12 max-lg:h-9/12 max-md:h-8/12  max-2xl:h-10/12 h-9/12 -z-10  xl:-mt-12 " />
      {/* <img src="/hero_md.png" alt="" className="absolute min-xl:hidden max-sm:hidden w-full  max-sm:h-8/12 max-lg:h-9/12 max-md:h-8/12  max-2xl:h-10/12 h-9/12 -z-10  xl:-mt-12 " />
      <img src="/hero_sm.png" alt="" className="absolute min-xl:hidden w-full  max-sm:h-8/12 max-lg:h-9/12 max-md:h-8/12  max-2xl:h-10/12 h-9/12 -z-10  xl:-mt-12 " /> */}
      
    <div
      className=" mt-32  bg-gray-50/35 shadow rounded-3xl xl:max-w-9/12 w-full mx-auto px-6 py-10"
      dir="rtl"
    >
      {/* تصویر شاخص */}

      {/* عنوان */}
      <header className="mt-8">
        <span className="text-black font-semibold">
          فناوری
        </span>

        <h1 className="text-5xl font-bold mt-3 leading-relaxed">
          راهنمای کامل توسعه وب با Next.js و TypeScript
        </h1>

        <div className="flex gap-6 text-dark mt-4 flex-wrap">
          <span>👤 علی رضایی</span>
          <span>📅 ۲۵ تیر ۱۴۰۴</span>
          <span>⏱️ ۸ دقیقه مطالعه</span>
        </div>
      </header>

      {/* مقدمه */}
      <section className="mt-10">
        <p className="text-lg leading-9 text-black text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
          در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
          نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
        </p>
      </section>

      {/* بخش اول */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-5">
          چرا Next.js انتخاب مناسبی است؟
        </h2>

        <p className="leading-9 text-black text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
          این فریمورک امکانات متعددی را برای توسعه‌دهندگان فراهم می‌کند و
          باعث افزایش سرعت توسعه و بهبود عملکرد برنامه می‌شود.
        </p>

        <ul className="list-disc mt-6 space-y-3 pr-6">
          <li>رندر سمت سرور (SSR)</li>
          <li>تولید صفحات استاتیک (SSG)</li>
          <li>پشتیبانی کامل از TypeScript</li>
          <li>سیستم مسیریابی قدرتمند</li>
          <li>بهینه‌سازی خودکار تصاویر</li>
        </ul>
      </section>

      {/* نقل قول */}
      <blockquote className="border-r-4 border-blue-600 pr-6 italic text-xl my-12 text-gray-800">
        «تکنولوژی زمانی ارزشمند است که بتواند زندگی انسان‌ها را ساده‌تر و
        کارآمدتر کند.»
      </blockquote>

      {/* بخش دوم */}
      <section>
        <h2 className="text-3xl font-bold mb-5">
          مراحل توسعه یک پروژه
        </h2>

        <p className="leading-9 text-black text-justify">
          برای داشتن یک پروژه موفق بهتر است مراحل توسعه را به صورت منظم و
          برنامه‌ریزی‌شده انجام دهید.
        </p>

        <ol className="list-decimal mt-6 space-y-3 pr-6">
          <li>تحلیل نیازمندی‌ها</li>
          <li>طراحی رابط کاربری</li>
          <li>پیاده‌سازی صفحات</li>
          <li>اتصال به API</li>
          <li>تست و انتشار پروژه</li>
        </ol>
      </section>

      {/* جدول */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          مقایسه React و Next.js
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">ویژگی</th>
                <th className="border p-3">Next.js</th>
                <th className="border p-3">React</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">مسیریابی</td>
                <td className="border p-3">داخلی</td>
                <td className="border p-3">نیازمند کتابخانه</td>
              </tr>

              <tr>
                <td className="border p-3">SSR</td>
                <td className="border p-3">✅</td>
                <td className="border p-3">❌</td>
              </tr>

              <tr>
                <td className="border p-3">بهینه‌سازی تصاویر</td>
                <td className="border p-3">✅</td>
                <td className="border p-3">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* نتیجه گیری */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-5">
          جمع‌بندی
        </h2>

        <p className="leading-9 text-gray-700 text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
          استفاده از Next.js در کنار React و TypeScript باعث افزایش کیفیت،
          امنیت و سرعت توسعه پروژه‌های مدرن وب می‌شود و تجربه کاربری بهتری
          را برای کاربران فراهم می‌کند.
        </p>
      </section>

      {/* برچسب ها */}
      <section className="mt-12 flex flex-wrap gap-3">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "برنامه‌نویسی",
          "وب"
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-gray-100 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </section>
    </div>
    </main>
    
    </div>
  );
}
export default Article;
