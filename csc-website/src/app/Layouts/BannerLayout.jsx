import Image from "next/image";
import background from "@/app/components/images/2302035.jpg";

const BannerLayout = (props) => {
    const { children } = props;
    return (
        <div className="relative h-[600px] flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            <Image
                src={background}
                className="absolute inset-0 w-full h-full object-cover z-0"
                alt="background"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-center items-center">
                {children}
            </div>
        </div>
    );
};

const Logo = (props) => {
    const { children } = props;
    return (
        <div className="mb-8 md:mb-0 md:mr-8">
            {children}
        </div>
    );
};

const Text = (props) => {
    const { title, children } = props;
    return (
        <div className="p-8 max-w-lg md:max-w-full">
            <h1 className="font-black text-white text-[50px] mb-4 text-shadow-lg">
                {title}
            </h1>
            <h3 className="text-white text-[25px] text-shadow-lg">
                {children}
            </h3>
        </div>
    );
};

BannerLayout.Logo = Logo;
BannerLayout.Text = Text;

export default BannerLayout;
