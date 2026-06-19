import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../services/auth.service";


function ResetPasswordForm() {

  const navigate = useNavigate();

  const [params] = useSearchParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const token = params.get("token");


  const handleSubmit = async (e) => {

    e.preventDefault();


    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }


    const res = await resetPassword({

      token,

      newPassword: password

    });


    if(res?.success){

      navigate("/login");

    }

  };


  return (

    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >


      <input

        className="auth-input"

        type="password"

        placeholder="New Password"

        value={password}

        onChange={(e)=>setPassword(e.target.value)}

      />


      <input

        className="auth-input"

        type="password"

        placeholder="Confirm Password"

        value={confirmPassword}

        onChange={(e)=>setConfirmPassword(e.target.value)}

      />


      <button
        className="auth-button"
        type="submit"
      >

        Reset Password

      </button>


    </form>

  );

}


export default ResetPasswordForm;