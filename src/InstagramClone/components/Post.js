import React from 'react';

const Instacard = ({ imgURL = 'https://bit.ly/2UmzIL4' }) => {
  return (
    <div className="flex flex-col w-full md:w-3/6">
      <CardBase>
        <div className="flex flex-row items-center px-2 pt-3 mb-2">
          <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-tr from-yellow-500 to-blue-400 rounded-full">
            <img
              src="https://bit.ly/38HJkrV"
              alt="profile pic of kid"
              className="object-cover w-10 h-10 rounded-full ring-0 ring-offset-2"
            />
          </div>
          <div className="pl-4 font-medium text-md">Beautiful Destinations</div>
          <div className="ml-auto font-bold text-md">...</div>
        </div>
        <img
          src={imgURL}
          alt="citylife of norway"
          className="object-cover w-full h-64 md:h-96"
        />
        <div className="flex flex-row p-2 w-full h-12">
          <div className="mr-2 w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="mr-2 w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <div className="ml-auto w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </div>
        </div>
      </CardBase>
    </div>
  );
};

const CardBase = ({ children }) => (
  <div className="flex flex-col w-auto h-auto bg-white border-t border-gray-50 shadow-md">
    {children}
  </div>
);

export default Instacard;
