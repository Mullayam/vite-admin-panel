import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="container">
        <div>
          <div className="lg:w-1/2 mx-auto mb-6">
            <div className="bg-white shadow-md p-12 rounded-s col-span-6">
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
                Reset Password
              </h6>
              <p className="text-gray-500 text-sm/[1.6] mt-1 mb-6">
                Enter your email address and we'll send you an email with
                instructions to reset your password.
              </p>
              <form action="#">
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
                    placeholder="Email"
                  />
                </div>
                <div className="pt-4 text-center">
                  <button
                    className="w-full bg-primary text-white font-medium leading-6 text-center align-middle select-none py-2 px-4 text-base rounded-md transition-all hover:shadow-lg hover:shadow-primary/30"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full text-center">
            <p className="text-gray-500 leading-6 text-base">
              Back to{" "}
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

  )
}

export default ForgetPassword