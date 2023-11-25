import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div>
          <div className="bg-white shadow rounded mb-6">
            <div className="grid md:grid-cols-12">
              <div className="bg-white shadow-md p-12 rounded-s xl:col-span-5 md:col-span-6">
                <div className="mb-12">
                  <Link to="/">
                    <img
                      src="/logo-dark.svg"
                      alt="logo-img"
                      className="h-8"
                    />
                  </Link>
                </div>
                <h6 className="text-base/[1.6] font-semibold text-gray-600 mb-0 mt-4">
                  Create Your Account
                </h6>
                <p className="text-gray-500 text-sm/[1.6] mt-1 mb-6">
                  Don't have an account? Create your account, it takes less than a
                  minute.
                </p>
                <form action="#">
                  <div className="mb-4">
                    <label
                      htmlFor="input-label"
                      className="block text-sm font-medium mb-1 text-gray-600"
                    >
                      Your Name <small>*</small>
                    </label>
                    <input
                      type="text"
                      id="input-label"
                      className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray-600"
                    >
                      Email <small>*</small>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-1 text-gray-600"
                    >
                      Password <small>*</small>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="mb-0 text-center">
                    <button
                      className="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="py-4 text-center">
                  <span className="fs-13 fw-bold">OR</span>
                </div>
                <div className="w-full">
                  <a
                    href=""
                    className="block border text-gray-500 font-medium leading-6 text-center align-middle select-none py-2 px-4 text-sm rounded-md transition-all hover:shadow-md"
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github icon icon-xs me-2"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Sign Up with Github
                    </span>
                  </a>
                </div>
              </div>
              <div className="hidden md:block xl:col-span-7 md:col-span-6">
                <div className="max-w-[80%] mx-auto">
                  <div className="my-12 py-12">
                    <div className="flex items-center justify-center h-full">
                    <img
                                            src="/logo-dark.svg"
                                            alt="logo-img"
                                            
                                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full text-center">
            <p className="text-gray-500 leading-6 text-base">
              Already have an account?{" "}
              <Link
                to="/authentication/sign-in"
                className="text-primary font-semibold ms-1"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;
