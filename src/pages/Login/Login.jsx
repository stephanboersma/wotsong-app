import React, { useRef } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../contexts/AuthContext';
const Login = () => {
  let form = useRef(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    login(payload.email, payload.password);
    //   console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 {-- h-screen --}">
        <div className="mx-auto flex justify-center md:items-center relative md:h-full">
          <div className="absolute top-0 right-0 pt-2 mr-4">
            <svg width={200} height={144} xmlns="http://www.w3.org/2000/svg">
              <g fill="#667EEA" fillRule="evenodd">
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
          <form
            id="login"
            className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-gray-800 mb-32 sm:mb-0 my-40 sm:my-12 px-2 sm:px-0"
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="px-2 flex flex-col items-center justify-center mt-8 sm:mt-0">
              <svg
                className="w-24 h-24"
                id="logo"
                enableBackground="new 0 0 300 300"
                height={44}
                viewBox="0 0 300 300"
                width={43}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    fill="#4c51bf"
                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                  />
                </g>
              </svg>
              <h2 className="text-4xl dark:text-gray-100 leading-tight pt-8">
                WotSong
              </h2>
            </div>
            <div className="pt-16 px-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold dark:text-gray-100 leading-tight">
                Login To Your Account
              </h3>
            </div>
            <div className="mt-12 w-full px-2 sm:px-6">
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="email"
                  className="text-lg font-semibold dark:text-gray-100 leading-tight"
                >
                  Email
                </label>
                <input
                  required
                  name="email"
                  id="email"
                  className="h-10 px-2 w-full rounded mt-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow"
                  type="email"
                />
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold dark:text-gray-100 fleading-tight"
                >
                  Password
                </label>
                <input
                  required
                  name="password"
                  id="password"
                  className="h-10 px-2 w-full rounded mt-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-600 focus:outline-none focus:border focus:border-indigo-700 border-gray-300 border shadow"
                  type="password"
                />
              </div>
            </div>
            <div className="pt-6 w-full flex justify-between px-2 sm:px-6">
              {/* <div className="flex items-center ">
                <input
                  id="rememberme"
                  name="rememberme"
                  className="w-3 h-3 mr-2 bg-white dark:bg-gray-800"
                  type="checkbox"
                />
                <label
                  htmlFor="rememberme"
                  className="text-xs dark:text-gray-100"
                >
                  Remember Me
                </label>
              </div> */}
              <a className="text-xs text-indigo-600" href="javascript: void(0)">
                Forgot Password?
              </a>
            </div>
            <div className="px-2 mb-16 sm:mb-56 md:mb-16 sm:px-6">
              <button className="focus:outline-none w-full bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm mt-6">
                Login
              </button>
              <p className="mt-16 text-xs text-center dark:text-gray-100">
                Don’t Have An Account?{' '}
                <a
                  className="underline text-indigo-600"
                  onClick={() => navigate('/register')}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
          <div className="absolute bottom-0 left-0 pb-2 ml-4">
            <svg width={200} height={144} xmlns="http://www.w3.org/2000/svg">
              <g fill="#667EEA" fillRule="evenodd">
                <rect width={4} height={4} rx={2} />
                <rect x={23} width={4} height={4} rx={2} />
                <rect x={45} width={4} height={4} rx={2} />
                <rect x={68} width={4} height={4} rx={2} />
                <rect x={90} width={4} height={4} rx={2} />
                <rect x={113} width={4} height={4} rx={2} />
                <rect x={135} width={4} height={4} rx={2} />
                <rect x={158} width={4} height={4} rx={2} />
                <rect x={181} width={4} height={4} rx={2} />
                <rect x={203} width={4} height={4} rx={2} />
                <rect y={18} width={4} height={4} rx={2} />
                <rect x={23} y={18} width={4} height={4} rx={2} />
                <rect x={45} y={18} width={4} height={4} rx={2} />
                <rect x={68} y={18} width={4} height={4} rx={2} />
                <rect x={90} y={18} width={4} height={4} rx={2} />
                <rect x={113} y={18} width={4} height={4} rx={2} />
                <rect x={135} y={18} width={4} height={4} rx={2} />
                <rect x={158} y={18} width={4} height={4} rx={2} />
                <rect x={181} y={18} width={4} height={4} rx={2} />
                <rect x={203} y={18} width={4} height={4} rx={2} />
                <rect y={35} width={4} height={4} rx={2} />
                <rect x={23} y={35} width={4} height={4} rx={2} />
                <rect x={45} y={35} width={4} height={4} rx={2} />
                <rect x={68} y={35} width={4} height={4} rx={2} />
                <rect x={90} y={35} width={4} height={4} rx={2} />
                <rect x={113} y={35} width={4} height={4} rx={2} />
                <rect x={135} y={35} width={4} height={4} rx={2} />
                <rect x={158} y={35} width={4} height={4} rx={2} />
                <rect x={181} y={35} width={4} height={4} rx={2} />
                <rect x={203} y={35} width={4} height={4} rx={2} />
                <rect y={53} width={4} height={4} rx={2} />
                <rect x={23} y={53} width={4} height={4} rx={2} />
                <rect x={45} y={53} width={4} height={4} rx={2} />
                <rect x={68} y={53} width={4} height={4} rx={2} />
                <rect x={90} y={53} width={4} height={4} rx={2} />
                <rect x={113} y={53} width={4} height={4} rx={2} />
                <rect x={135} y={53} width={4} height={4} rx={2} />
                <rect x={158} y={53} width={4} height={4} rx={2} />
                <rect x={181} y={53} width={4} height={4} rx={2} />
                <rect x={203} y={53} width={4} height={4} rx={2} />
                <rect y={70} width={4} height={4} rx={2} />
                <rect x={23} y={70} width={4} height={4} rx={2} />
                <rect x={45} y={70} width={4} height={4} rx={2} />
                <rect x={68} y={70} width={4} height={4} rx={2} />
                <rect x={90} y={70} width={4} height={4} rx={2} />
                <rect x={113} y={70} width={4} height={4} rx={2} />
                <rect x={135} y={70} width={4} height={4} rx={2} />
                <rect x={158} y={70} width={4} height={4} rx={2} />
                <rect x={181} y={70} width={4} height={4} rx={2} />
                <rect x={203} y={70} width={4} height={4} rx={2} />
                <rect y={88} width={4} height={4} rx={2} />
                <rect x={23} y={88} width={4} height={4} rx={2} />
                <rect x={45} y={88} width={4} height={4} rx={2} />
                <rect x={68} y={88} width={4} height={4} rx={2} />
                <rect x={90} y={88} width={4} height={4} rx={2} />
                <rect x={113} y={88} width={4} height={4} rx={2} />
                <rect x={135} y={88} width={4} height={4} rx={2} />
                <rect x={158} y={88} width={4} height={4} rx={2} />
                <rect x={181} y={88} width={4} height={4} rx={2} />
                <rect x={203} y={88} width={4} height={4} rx={2} />
                <rect y={105} width={4} height={4} rx={2} />
                <rect x={23} y={105} width={4} height={4} rx={2} />
                <rect x={45} y={105} width={4} height={4} rx={2} />
                <rect x={68} y={105} width={4} height={4} rx={2} />
                <rect x={90} y={105} width={4} height={4} rx={2} />
                <rect x={113} y={105} width={4} height={4} rx={2} />
                <rect x={135} y={105} width={4} height={4} rx={2} />
                <rect x={158} y={105} width={4} height={4} rx={2} />
                <rect x={181} y={105} width={4} height={4} rx={2} />
                <rect x={203} y={105} width={4} height={4} rx={2} />
                <rect y={123} width={4} height={4} rx={2} />
                <rect x={23} y={123} width={4} height={4} rx={2} />
                <rect x={45} y={123} width={4} height={4} rx={2} />
                <rect x={68} y={123} width={4} height={4} rx={2} />
                <rect x={90} y={123} width={4} height={4} rx={2} />
                <rect x={113} y={123} width={4} height={4} rx={2} />
                <rect x={135} y={123} width={4} height={4} rx={2} />
                <rect x={158} y={123} width={4} height={4} rx={2} />
                <rect x={181} y={123} width={4} height={4} rx={2} />
                <rect x={203} y={123} width={4} height={4} rx={2} />
                <rect y={140} width={4} height={4} rx={2} />
                <rect x={23} y={140} width={4} height={4} rx={2} />
                <rect x={45} y={140} width={4} height={4} rx={2} />
                <rect x={68} y={140} width={4} height={4} rx={2} />
                <rect x={90} y={140} width={4} height={4} rx={2} />
                <rect x={113} y={140} width={4} height={4} rx={2} />
                <rect x={135} y={140} width={4} height={4} rx={2} />
                <rect x={158} y={140} width={4} height={4} rx={2} />
                <rect x={181} y={140} width={4} height={4} rx={2} />
                <rect x={203} y={140} width={4} height={4} rx={2} />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
