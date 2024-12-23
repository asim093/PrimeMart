import React, { useState } from 'react'
import AuthLayout from '../../Components/Layout/Auth_Layout'
import Text_inputs from '../../Components/Inputs/Text_inputs'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../../Components/Buttons/PrimaryButton'
import styles from './Auth.module.scss'
import Eyebutton from '../../Components/Eyebutton/Eyebutton'
import { Helpers } from '../../services/helper'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/features/user-slice'

const Signup = () => {
  const [Eyeshow, SetEyeshow] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [loader, Setloader] = useState(false);

  const dispatch = useDispatch();
  const [Errors, SetErrors] = useState({ Name: "", Email: "", Password: "" });

  const navigate = useNavigate();
  const onSubmitsignup = async (e) => {
    e.preventDefault();

    // ===========  Signup Authentication start  ============ 

    let EmailError, NameError, PasswordError = "";
    if (!Helpers.validateName(name)) {
      NameError = "Name must be Atleast 4 character ";
    }
    if (!Helpers.validataEmail(email)) {
      EmailError = "Invalid email format";
    }

    if (!Helpers.validatePassword(password)) {
      PasswordError = "Password must be at least 8 characters";
    }

    if (NameError || EmailError || PasswordError) {
      SetErrors({ name: NameError, email: EmailError, password: PasswordError });
    } else {

      Setloader(true)
      try {
        const payload = { name, email, password };
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/signup", payload);
        console.log(response, "login response");
        dispatch(addUser(response.data))
        
        console.log(name, email, password);
        swal({
          title: "User SignUp Successfully",
          icon: "success",
          button: "OK",
        });
        navigate("/")
        Setloader(false)
        SetErrors({ name: "", email: "", password: "" });
      } catch (error) {
        Setloader(false);
        const errorMessage = error.response?.data?.message || "An unexpected error occurred. Please try again later.";
        
        console.log(errorMessage); 
        swal({
          title: errorMessage,
          icon: "error",
          button: "OK",
        });
        
      }
    }

    // ======== Signup Auth end  ========== 
  }
  return (
    <AuthLayout>
      <div>
        <h1 className='auth_heading'>Create An Account </h1>
        <p className='auth_title mt-3'>Enter Your details below</p>
        <form onSubmit={onSubmitsignup}>
          <Text_inputs styles={{ marginTop: "18px" }} err_msg={Errors.name} required value={name} onChange={SetName} placeholder="Name" type="text" />
          <Text_inputs styles={{ marginTop: "18px" }} err_msg={Errors.email} required value={email} onChange={SetEmail} placeholder="Email" type="email" />
          <Text_inputs styles={{ marginTop: "18px" }} err_msg={Errors.password} required value={password} onChange={Setpassword} placeholder="Password" type={Eyeshow ? "text" : "password"}
            isIcon={<Eyebutton showEye={Eyeshow} showEyeFunc={SetEyeshow} />} />
          <div className={styles.button_wrapper}>
            <PrimaryButton loading={loader ? true : false} disabled={false} >Create Account</PrimaryButton>
          </div>
        </form>
        <span>Already Have An Account? <Link className={styles.login_link} to="/Auth/Login"> Login </Link> </span>
      </div>
    </AuthLayout>
  )
}

export default Signup