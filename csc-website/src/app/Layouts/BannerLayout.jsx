import Image from "next/image";
import background from "@/app/components/images/2302035.jpg";


const BannerLayout= (props)=>{
    const {children} = props;
    return(
        <div className="relative h-[600px]">
            <Image
                src={background}
                className="absolute inset-0 w-full h-full object-cover z-0"
                alt="background"
            />
            <div className="relative lg:px-[100px] py-[100px] flex justify-center items-center ">
                {children}
            </div>
        </div>
    );
}



const Logo = (props)=>{
    const{children} =props;
    return( 
        <>
            {children}
        </>
        
    );
}

const Text = (props)=>{
    const {title,children} = props;
    return(
            <div className="p-8">
                <h1 className="font-black xl:text-[110px] text-white text-[50px] mb-[20px] text-shadow-lg ">
                    {title}
                </h1>
                <h3 className="text-[25px] text-white text-shadow-lg">
                    {children}
                </h3>
            </div>
    ); 
}


BannerLayout.Logo = Logo;
BannerLayout.Text = Text;

export default BannerLayout;