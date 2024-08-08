import BannerLayout from "../../../Layouts/BannerLayout";
import Image from "next/image";
import eventLogo from "@/app/components/images/event.png";

export default function BannerEvents(){
    return(
        <BannerLayout>
            <BannerLayout.Logo>
            <Image 
                    src={eventLogo}
                    className="object-cover w-[300px] h-[300px]"
                    alt="background"
                />
            </BannerLayout.Logo>
            <BannerLayout.Text title="Events">
                Kegiatan yang kita lakukan di CSC!
            </BannerLayout.Text>
        </BannerLayout>
    );
}