import AuthLayout from "../Layouts/AuthLayout";
import FormRegister from "../components/Fragment/FormRegister";
import SubmitBtn from "../components/Element/btn/SubmitBtn";

export default function RegistPage() {
    return (
        <>
            <AuthLayout formTitle="Sign Up">
                <FormRegister/>
            </AuthLayout>
        </>
    )
}
