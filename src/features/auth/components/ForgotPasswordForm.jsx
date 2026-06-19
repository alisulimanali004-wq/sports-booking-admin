import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/auth.service";


function ForgotPasswordForm() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [sent, setSent] = useState(false);


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const res = await forgotPassword({
        email
      });


      if (res?.data?.success) {

        setSent(true);


        // مؤقت للاختبار
        // بعد ما يجيك الايميل الحقيقي
        // الرابط رح يفتح reset-password

        setTimeout(() => {

          navigate("/reset-password");

        }, 1200);


      }


    } catch (error) {

      console.log(
        "Forgot password error:",
        error
      );

    }

  };



  return (

    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >


      <input

        className="auth-input"

        type="email"

        placeholder="Email Address"

        value={email}

        onChange={(e)=>
          setEmail(e.target.value)
        }

      />



      <button

        className="auth-button"

        type="submit"

      >

        Send Reset Link

      </button>



      {

        sent &&

        <p
          style={{
            color:"#64748b",
            fontSize:"14px"
          }}
        >

          Reset link sent successfully

        </p>

      }


    </form>

  );

}


export default ForgotPasswordForm;