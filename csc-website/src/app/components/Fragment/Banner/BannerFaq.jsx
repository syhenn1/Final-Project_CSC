import BannerLayout from "../../../Layouts/BannerLayout";
import Image from "next/image";
import faqlogo from "@/app/components/images/question.png"

export default function BannerEvents(){
    return(
        <BannerLayout>
            <BannerLayout.Logo>
            <Image 
                    src={faqlogo}
                    className="object-cover w-[300px] h-[300px]"
                    alt="background"
                />
            </BannerLayout.Logo>
            <BannerLayout.Text title="Frequently Asked Question">
                Hal-hal yang sering ditanyakan terkait CSC!!
            </BannerLayout.Text>
        </BannerLayout>
    );
}