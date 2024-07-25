import AuthLayout from "../Layouts/AuthLayout";
import FormLogin from "../components/Fragment/FormLogin";
import SubmitBtn from "../components/Element/btn/SubmitBtn";

export default function LoginPage() {
    return (
        <>
            <AuthLayout formTitle="Sign In">
                <FormLogin/>
            </AuthLayout>
        </>
    )
}
