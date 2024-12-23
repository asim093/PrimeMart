import React, { useState } from "react";
import AuthLayout from "../../Components/Layout/Auth_Layout";
import styles from "./auth.module.scss";
import Text_inputs from "../../Components/Inputs/Text_inputs";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import { Helpers } from "../../services/helper";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/user-slice";
import Eyebutton from "../../Components/Eyebutton/Eyebutton";

const LoginPage = () => {
  const [Eyeshow, SetEyeshow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    let emailError,
      passwordError = "";

    if (!Helpers.validateEmail(email)) {
      emailError = "Invalid Email";
    }
    if (!Helpers.validatePassword(password)) {
      passwordError = "Password must be atleast 8 characters";
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setLoader(true);
      try {
        const payload = { email, password };
        const response = await axios.post(
          "https://dev-mart-server.vercel.app/api/user/login",
          payload
        );

        console.log(response?.data?.data, "<-- login response");
        dispatch(addUser(response?.data?.data));
        setErrors({ email: "", password: "" });
        navigate("/");
        setLoader(false);
      } catch (error) {
        console.log(error.response);
        console.log("------------");
        setAuthError(error?.response?.data?.message);
        setLoader(false);
      }
    }
  };

  return (
    <AuthLayout>
      <div>
        <h1 className="auth_heading">Log into Dev Mart</h1>
        <p className="auth_title mt-3">Enter your details below</p>
        <form className="mt-3">
          <Text_inputs
            styles={{ marginBottom: "0px" }}
            value={email}
            onChange={setEmail}
            placeholder="Email"
            type="email"
            required
            err_msg={errors.email}
          ></Text_inputs>

          <Text_inputs
            styles={{ marginBottom: "5px", marginTop: "20px" }}
            err_msg={errors.password}
            required
            value={password}
            onChange={setPassword}
            placeholder="Password"
            type={Eyeshow ? "text" : "password"}
            isIcon={<Eyebutton showEye={Eyeshow} showEyeFunc={SetEyeshow} />}
          />

          <small className={styles.small}>
            <Link className={styles.forget_password_link} to="/Auth/Login">
              Forgot Password
            </Link>
          </small>
          <div className={styles.button_wrapper}>
            {authError && (
              <div className="text-end text-danger">
                <small>{authError}</small>
              </div>
            )}
            <PrimaryButton
              loading={loader ? true : false}
              disabled={loader ? true : false}
              onClick={onSubmitLogin}
            >
              Log In
            </PrimaryButton>
          </div>
        </form>
        <span>
          Create a New Account?{" "}
          <Link className={styles.login_link} to="/Auth/Signup">
            Sign Up
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
