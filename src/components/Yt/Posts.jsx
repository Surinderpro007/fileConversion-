import {useState} from 'react'

const Posts = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Flowbite
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <input
              type="text"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">All</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Gaming</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">News</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Music</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Movies</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Live</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Sports</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Trending</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Podcasts</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Fashion & Beauty</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Tech</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Science</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Entertainment</span>
          <span class="bg-gray-100 text-gray-800 text-[16px] font-medium me-2 px-3 py-1.5 rounded-md dark:bg-gray-700 dark:text-gray-300">Food & Cooking</span>
      
    </div>
      
   
  )
}

export default Posts
