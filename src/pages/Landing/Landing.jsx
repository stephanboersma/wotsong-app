import React from 'react';
import { DefaultPageLayout } from '../../components';

const Landing = () => {
  return (
    <DefaultPageLayout>
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-center sm:text-5xl sm:leading-none md:text-6xl">
            Stay Tuned for
            <br /> WotSong: Be Fast or Be Last
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            WotSong is a music quiz game that integrates seamlessly with Spotify
            and ChromeCast. Develop quizzes based on your Spotify playlists and
            play with your friends.
          </p>
        </div>
      </div>
    </DefaultPageLayout>
  );
};

export default Landing;
