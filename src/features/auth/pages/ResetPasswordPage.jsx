import MainLayout from "../../../layouts/MainLayout";

import AuthCard from "../components/AuthCard";

import ResetPasswordForm from "../components/ResetPasswordForm";

import "../styles/auth.css";


function ResetPasswordPage(){

return (

<MainLayout>


<AuthCard

title="Reset Password"

subtitle="Create your new password"


>


<ResetPasswordForm />


</AuthCard>


</MainLayout>

);

}


export default ResetPasswordPage;