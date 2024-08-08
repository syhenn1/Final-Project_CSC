import BannerLayout from "../../../Layouts/BannerLayout";
import Image from "next/image";
import cscLogo from "@/app/components/images/media.png";

export default function BannerAbout() {
    return (
        <BannerLayout>
            <BannerLayout.Logo>
                <Image 
                    src={cscLogo}
                    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
                    alt="CSC Logo"
                />
            </BannerLayout.Logo>
            <BannerLayout.Text title="About Us">
                Temukan informasi lengkap mengenai Computer Student Club
            </BannerLayout.Text>
        </BannerLayout>
    );
}
