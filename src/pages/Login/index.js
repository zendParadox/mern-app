import React from "react";
import { Input, Gap, Link, Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="h-screen flex items-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login with your account
            </h2>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="">
              <Input label="Email" placeholder="Your Email" />
              <Gap height="5" />
              <Input label="Password" placeholder="Your Password" />
              <Gap height="10" />
              <Button title="Login" />
              <Gap height="10" />
              <Link
                situation={"Don't Have Account?"}
                title={"Register Here!"}
                onClick={{ navigateToHome }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
