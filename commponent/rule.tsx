import Card from "./article";
import CardRule from "./CardRule";
import Content from "./content";
import Title from "./title";


const Rule = () => {
    return ( 
        <div className=" ">
    {/* <Title title={'مقالات'}/>            
     */}
<div className="mx-auto flex  xl:max-w-9/12   mb-12  justify-end px-6  mb-3 mt-4">
      <Content description="قوانین حقوقی چارچوبی برای تنظیم روابط افراد و حفظ حقوق و مسئولیت‌های آنان در جامعه هستند." lable="قوانین حقوقی" title="قوانین تخصصی" />
</div>
    <div className="mx-auto flex flex-wrap xl:max-w-9/12   xl:gap:12 md:gap-8  justify-between ">
           
            <CardRule/>
            <CardRule/>
            <CardRule/>
            {/* <Card/> */}
        
    </div> 
    </div> 
);
}
 
export default Rule;