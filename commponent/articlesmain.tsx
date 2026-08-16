import Card from "./article";
import Content from "./content";
import Title from "./title";


const ArticlesMain = () => {
    return ( 
        <div className=" linear-base py-10">
    {/* <Title title={'مقالات'}/>            
     */}
<div className="mx-auto flex  xl:max-w-9/12   mb-12  justify-end px-6  mb-3 ">
      <Content description="مقالات حقوقی با بررسی قوانین و مسائل حقوقی، به افزایش آگاهی و شناخت بهتر حقوق و تکالیف افراد کمک می‌کنند." lable="مقالات حقوقی" title="مقالات تخصصی" />
</div>
    <div className="mx-auto flex flex-wrap xl:max-w-9/12   xl:gap:12 md:gap-8  justify-between ">
           
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            {/* <Card/> */}
        
    </div> 
    </div> 
);
}
 
export default ArticlesMain;