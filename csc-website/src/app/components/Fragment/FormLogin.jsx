import Input from "../Element/input/Input";
import SubmitBtn from "../Element/btn/SubmitBtn";

const FormLogin = ()=>{
    return(
        <>
            <form action="" className="flex flex-col gap-4 justify-between">
                <Input type="text" placeholder="Username" name="Username" />
                <Input type="password" placeholder="Password" name="Password"/>
                <SubmitBtn ExtendedClass="w-[150px] mt-[10px]">Masuk</SubmitBtn>
            </form>
        </>    
    )
}

export default FormLogin;
