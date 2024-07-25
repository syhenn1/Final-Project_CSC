import Input from "../Element/input/Input";
import Select from "../Element/input/SelectInput";
import SubmitBtn from "../Element/btn/SubmitBtn";

const FormRegister = ()=>{
    return(
        <>
            <form action="" className="flex flex-col gap-4 justify-between">
                <Input type="text" placeholder="Username" name="username"/>
                <Input type="text" placeholder="Email" name="Email"/>
                <Input type="text" placeholder="NIM" name="NIM"/>
                <Select label="Pilih Divisi" opt1="Explore" opt2="SoftDev" opt3="Cybersec"/>
                <SubmitBtn ExtendedClass="w-[150px] mt-[10px]">Daftar Sekarang!</SubmitBtn>
            </form>

        </>    
    )
    
}

export default FormRegister;
