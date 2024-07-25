import React from "react";
import { Input, Button, Gap, Link } from "../../components";

const Register = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mb-8 sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="">
            <Input
              label="Full name"
              placeholder="Your Full Name"
              name="text"
              type="text"
              autoComplete="text"
            />
            <Gap height="5" />
            <Input
              label="Email"
              placeholder="Your Email"
              name="email"
              type="email"
              autoComplete="email"
            />
            <Gap height="5" />
            <Input
              label="Password"
              placeholder="Your Password"
              name="password"
              type="password"
              autoComplete="password"
            />
            <Gap height="10" />
            <Button title="Register" />
            <Gap height="10" />
            <Link
              situation={"Already Have Account?"}
              title={"Login Here!"}
              onClick={"/login"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
