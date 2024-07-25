import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <>
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6"> */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            id="email"
            required
            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...rest}
          />
        </div>
      </div>

      {/* <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Register
            </button>
          </div> */}
      {/* </form> */}

      {/* <p className="mt-10 text-center text-sm text-gray-500">
          Already Have Account?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login Here
          </a>
        </p> */}
      {/* </div> */}
    </>
  );
};

export default Input;
