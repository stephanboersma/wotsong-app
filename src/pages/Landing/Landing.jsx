import React, { useState } from 'react';
import { Button } from '../../components';

const Landing = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-gray-100 ">
      <div className="mx-auto container relative px-6 xl:px-0">
        <nav>
          <div className="lg:flex justify-between w-full py-12 hidden">
            <div aria-label="WotSong logo">
              <h1 className="font-baloo font-bold text-coral text-2xl">
                WotSong
              </h1>
              <Button label="Test" isInverted={true} />
            </div>
            <div className="lg:w-2/3 xl:w-1/2">
              <ul className="font-normal text-lg flex justify-between items-center text-gray-700">
                <li className="text-lg font-semibold leading-none text-indigo-700 cursor-pointer">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="cursor-pointer text-lg tracking-wider leading-none text-gray-600 hover:text-indigo-700">
                  <a href="javascript:void(0)">Insurances</a>
                </li>
                <li className="cursor-pointer text-lg tracking-wider leading-none text-gray-600 hover:text-indigo-700">
                  <a href="javascript:void(0)">Claims</a>
                </li>
                <li className="cursor-pointer text-lg tracking-wider leading-none text-gray-600 hover:text-indigo-700">
                  <a href="javascript:void(0)">Testimonials</a>
                </li>
                <li className="cursor-pointer text-lg tracking-wider leading-none text-gray-600 hover:text-indigo-700">
                  <a href="javascript:void(0)">FAQ’s</a>
                </li>
                <li className="cursor-pointer text-lg tracking-wider leading-none text-gray-600 hover:text-indigo-700">
                  <a href="javascript:void(0)">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="lg:hidden py-4">
          <div className="flex py-2 justify-between items-center">
            <div aria-label="WotSong-logo">
              <h1 className="font-baloo font-bold">WotSong</h1>
            </div>
            <div className="visible flex items-center">
              <button
                id="open"
                className={` ${
                  show ? 'hidden' : ''
                } xl:hidden focus:outline-none focus:ring-2 focus:ring-gray-600`}
                onClick={() => setShow(!show)}
              >
                <img
                  className={` `}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_illustration_Svg3.svg"
                  alt="menu"
                />
              </button>
              <ul
                id="list"
                className={`${
                  show ? '' : 'hidden'
                } py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20`}
              >
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <a
                    href="javascript:void(0)"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Home</span>
                  </a>
                </li>
                <li
                  className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                  onClick="dropdownHandler(this)"
                >
                  <a
                    href="javascript:void(0)"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Insurances</span>
                  </a>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <a
                    href="javascript:void(0)"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Claims</span>
                  </a>
                </li>
                <li
                  className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                  onClick="dropdownHandler(this)"
                >
                  <a
                    href="javascript:void(0)"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Testimonials</span>
                  </a>
                </li>
                <li
                  className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                  onClick="dropdownHandler(this)"
                >
                  <a
                    href="javascript:void(0)"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">FAQ’s</span>
                  </a>
                </li>
                <li
                  className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                  onClick="dropdownHandler(this)"
                >
                  <a
                    href="javascript:void(0)"
                    className="ml-2 focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <span className="font-bold">Pricing</span>
                  </a>
                </li>
              </ul>
              <div className="xl:hidden">
                <button
                  id="close"
                  className={`${
                    show ? '' : 'hidden'
                  } close-m-menu focus:outline-none focus:ring-2 focus:ring-gray-600`}
                  onClick={() => setShow(!show)}
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_illustration_Svg2.svg"
                    alt="close"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center pb-40">
          <div className="hidden md:block xl:mt-8">
            <div className="text-4xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-semibold leading-10">
              <div>
                <h1 className="mt-2 lg:mt-0 font-baloo font-bold">
                  Guess the Song...
                </h1>
              </div>
              <h1 className="mt-2 lg:mt-0 text-coral font-baloo font-bold">
                Be Fast or Be Last
              </h1>
            </div>
            <h2 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-400 font-baloo">
              A Music Guessing Game that integrates with Chrome Cast Challenge
              your on-demand knowledge about music titles and artists with
              WotSong. This game introduces a little light competition inbetween
              friends at gatherings where you can compete in identifying songs
              the fastest. A game session can be started and cast to your
              chromecast device on your television. Join game sessions on the
              mobile and quiz on your personally created playlists from
              Spotify... Stay tuned :-)
            </h2>
            <button className="hover:opacity-90 flex items-center relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral justify-center mt-5 lg:mt-10 text-base md:text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-coral rounded">
              Sign up
              <img
                className="ml-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_illustration_Svg4.svg"
                alt="arrow"
              />
            </button>
          </div>

          <div className="md:hidden xl:mt-8">
            <div className="text-4xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-semibold leading-10">
              <div>
                <h1 className="mt-2 lg:mt-0">Trustworthy</h1>
              </div>
              <h1 className="mt-2 lg:mt-0 text-indigo-700">Insurance</h1>
              <h1 className="mt-2 lg:mt-0">Providers</h1>
            </div>
            <h2 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
              Providing best insurance packages to families and individuals all
              around the globe
            </h2>
            <button className="hover:opacity-90 flex items-center relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 justify-center mt-5 lg:mt-10 text-base md:text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-indigo-700 rounded">
              Get a quote ...
              <img
                className="ml-8"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_with_illustration_Svg4.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
