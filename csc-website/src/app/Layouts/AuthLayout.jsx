import Aside from "../components/Fragment/Aside";
const AuthLayout = (props) => {
    const{children, formTitle} = props
    return(
            <div className="w-full min-h-screen flex justify-center items-center   bg-[url(../../public/main-bg.png)] ">
                <div className="md:block lg:flex lg:w-[800px] md:w-1/2 mx-auto bg-white h-full">
                    <div className=" flex-1 bg-[#3786BD] p-11 text-white  flex flex-col justify-between" >
                           <Aside title={formTitle}/>
                    </div>
                    <div className="flex-1 p-11 items-center flex  flex-col justify-between">
                        <h1 className="text-[50px] mb-10 text-center text-[#3786BD]">{formTitle}</h1>
                        {children}  
                    </div>
                </div>
                
            </div>
    )
}

export default AuthLayout;