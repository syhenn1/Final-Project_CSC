import BannerLayout from "../../../Layouts/BannerLayout";
import Image from "next/image";
import cscLogo from "@/app/components/images/media.png";

export default function BannerAbout(){
    return(
        <BannerLayout>
            <BannerLayout.Logo>
                <Image 
                    src={cscLogo}
                    className=" md:max-lg:w[300px] md:max-lg:h-[300px] lg:w-[500px] lg:h-[500px]"
                    alt="background"
                />
            </BannerLayout.Logo>
            <BannerLayout.Text title="About Us">
                Temukan informasi lengkap mengenai Computer Student Club
            </BannerLayout.Text>
        </BannerLayout>
    );
}