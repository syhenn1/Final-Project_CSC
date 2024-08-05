import SubmitBtn from "../Element/btn/SubmitBtn";
import Link from "next/link";

const Aside =(props)=>{
    const {title} =props;
    return(
        <div className="h-full w-full  text-center flex flex-col justify-between">
            <Body title={title}/>
            <SubmitBtn ExtendedClass="mt-[10px] text-[#3786BD] bg-white border-white">{title=="Sign Up"?"Sudah punya akun ?":"Belum punya akun ?"}</SubmitBtn>
        </div>
    )
}

const Body =(props)=>{
    const {title} =props;
    if(title == "Sign Up"){
        return(
            
            <>
                <h1 className=" text-[30px]">Bergabung Bersama Kami</h1>
                <p>Computer Student Club (CSC) adalah kelompok studi mahasiswa di Politeknik Negeri Jakarta yang berfokus pada ranah keamanan siber, pengembangan perangkat lunak, dan IoT. Kami bertujuan untuk mengembangkan minat dan bakat mahasiswa serta meningkatkan prestasi mereka dalam bidang teknologi.</p>
            </>
        )
    }
    else{
        return (
            <>
                <h1 className=" text-[30px]">Selamat Datang Kembali!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, pariatur quibusdam officia eius cumque odio, quae aliquid repellendus temporibus maiores fugiat illo dolorem facilis quasi asperiores aut eveniet alias veniam!</p>
            </>
        )
    }

}
export default Aside;