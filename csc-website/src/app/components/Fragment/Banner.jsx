import Image from "next/image";
import background from "@/app/components/images/2302035.jpg";
import { Children } from "react";
import cscLogo from "@/app/components/images/media.png";

import faqlogo from "@/app/components/images/faqlogo.png"

export default function Banner(props){
    const {title,children} = props
    return (
        <div className="relative h-[800px]">
            <Image
            src={background}
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="background"
            />
            <div className="relative px-[225px] py-[200px] flex self-center">
                <Image 
                    src={title === "About Us" ? cscLogo : title === "Frequently Asked Question" ? faqlogo : eventLogo}
                    className="object-cover w-[500px] h-[500px]"
                    alt="background"
                />
                <div className="p-8 flex flex-col self-center">
                    <h1 className="font-black text-white text-[100px] mb-[50px] text-shadow-lg">
                        {title}
                    </h1>
                    <h3 className="text-[25px] text-white text-shadow-lg">
                        {children}
                    </h3>
                </div>
            </div>
        </div>
    );
}