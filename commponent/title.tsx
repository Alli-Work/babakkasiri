type item = {title:String}
const Title = ({title}:item) => {
    return ( <div className="flex justify-center align-center my-8">
                <hr className="text-primary bg-primary h-0.5 rounded  w-32 my-auto" />
                <h4 className="text-4xl  max-sm:text-2xl font-bold mx-4">{title}</h4>
                <hr className="text-primary bg-primary h-0.5 rounded w-32 my-auto" />
            </div> );
}
 
export default Title;