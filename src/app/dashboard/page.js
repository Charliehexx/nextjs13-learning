'use client'
const Dashboard = () => {
  return (
    <div>
      <div class="bg-white">
        <header class="bg-white">
          <nav
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
                  <span class="-mt-0.5">DevUI</span>
                </span>
              </a>
            </div>
            <div class="flex lg:hidden">
              <button
                type="button"
                class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Product
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Features
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Marketplace
              </a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Company
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
                Log in
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </nav>
        </header>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center justify-center space-y-8 py-20">
            <p class="text-center text-base font-semibold leading-normal text-purple-700">
              Our blog
            </p>
            <p class="text-center text-5xl font-semibold leading-10 text-gray-900">
              Resources and insights
            </p>
            <p class="text-center text-xl leading-loose text-gray-600">
              The latest industry news, interviews, technologies, and resources.
            </p>
            <div class="ace-x-2 flex w-80 items-center space-x-2 overflow-hidden rounded-lg border border-gray-300 bg-white px-3.5 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-5 w-5 rounded-lg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
              <input
                type="text"
                class="flex-1 bg-white py-3 text-base leading-normal text-gray-500 outline-none focus:outline-none focus:ring-0"
                placeholder="Search"
              />
            </div>
          </div>
          <div class="flex flex-col justify-between space-y-4 md:flex-row">
            <div class="flex items-end overflow-x-scroll scrollbar-hide">
              <div class="whitespace-nowrap border-b-2 border-b-purple-700 px-4 py-2 text-base font-semibold leading-normal text-purple-700">
                View All
              </div>
              <div class="whitespace-nowrap border-b-2 border-b-gray-200 px-4 py-2 text-base font-semibold leading-normal text-gray-500">
                Design
              </div>
              <div class="whitespace-nowrap border-b-2 border-b-gray-200 px-4 py-2 text-base font-semibold leading-normal text-gray-500">
                Product
              </div>
              <div class="whitespace-nowrap border-b-2 border-b-gray-200 px-4 py-2 text-base font-semibold leading-normal text-gray-500">
                Software Engineering
              </div>
              <div class="whitespace-nowrap border-b-2 border-b-gray-200 px-4 py-2 text-base font-semibold leading-normal text-gray-500">
                Customer Success
              </div>
            </div>
            <div class="space-2 flex w-full cursor-pointer justify-between rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow md:ml-2 md:max-w-xs">
              <p class="mr-10 text-base font-medium leading-normal text-gray-900">
                Most recent
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="h-5 w-5 rounded-lg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
            </div>
          </div>
          <div class="grid gap-4 gap-y-8 py-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1469&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Design
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    10 Tips for Crafting the Perfect UX Portfolio
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Learn how to showcase your design skills and stand out in a
                  crowded job market.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg"
                  alt="Emily Lee"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Emily Lee
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    3 April 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Technology
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    The Future of Mobile App Development
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Discover the latest trends and techniques that will shape the
                  future of mobile app development.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="John Smith"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    John Smith
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    1 April 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Business
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    How to Launch a Successful Startup
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Learn the essential steps to launch a successful startup and
                  make your dreams a reality.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Brown"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Sarah Brown
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    28 March 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Health
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    The Benefits of Mindfulness Meditation
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Discover the scientifically proven benefits of mindfulness
                  meditation and how it can improve your health and wellbeing.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/men/46.jpg"
                  alt="David Kim"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    David Kim
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    25 March 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Education
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    Why Learning a Second Language is Important
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Explore the benefits of learning a second language and how it
                  can improve your cognitive abilities.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  alt="Maria Rodriguez"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Maria Rodriguez
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    22 March 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Travel
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    The Best Places to Visit in Europe
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Discover the top destinations in Europe and plan your dream
                  vacation.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/men/99.jpg"
                  alt="Alex Johnson"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Alex Johnson
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    19 March 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1476&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Food
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    How to Make the Perfect Cup of Coffee
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Learn the secrets to making the perfect cup of coffee and
                  impress your friends and family.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/women/63.jpg"
                  alt="Thomas Lee"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Thomas Lee
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    16 March 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Fashion
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    The Latest Fashion Trends for Spring 2023
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Discover the hottest fashion trends for the upcoming spring
                  season and stay ahead of the curve.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/women/47.jpg"
                  alt="Jessica Kim"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Jessica Kim
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    13 March 2023
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between space-y-2">
              <div class="space-y-2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <p class="w-full text-sm font-semibold leading-tight text-purple-700">
                  Sports
                </p>
                <div>
                  <p class="flex-1 text-2xl font-semibold text-gray-900">
                    The Benefits of Yoga for Athletes
                  </p>
                </div>
                <p class="w-full text-base leading-normal text-gray-600">
                  Learn how practicing yoga can improve your athletic
                  performance and prevent injuries.
                </p>
              </div>
              <div class="flex space-x-3">
                <img
                  class="h-full w-10 rounded-lg"
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="Michael Johnson"
                />
                <div>
                  <p class="text-sm font-semibold leading-tight text-gray-900">
                    Michael Johnson
                  </p>
                  <p class="text-sm leading-tight text-gray-600">
                    10 March 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6" />
          <div class="flex w-full justify-center">
            <div class="mx-auto flex">
              <a
                href="#"
                class="mx-1 flex cursor-not-allowed items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 dark:border-gray-800 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  ></path>
                </svg>
              </a>
              <div class="hidden md:flex">
                <a
                  href="#"
                  class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  1
                </a>
                <a
                  href="#"
                  class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  2
                </a>
                <a
                  href="#"
                  class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  3
                </a>
                <a
                  href="#"
                  class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  ...
                </a>
                <a
                  href="#"
                  class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  9
                </a>
                <a
                  href="#"
                  class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
                >
                  10
                </a>
              </div>
              <div class="mx-10 flex flex-1 items-center text-sm leading-tight text-gray-700 md:hidden">
                Page 1 of 10
              </div>
              <a
                href="#"
                class="mx-1 flex items-center rounded-md border border-gray-400 px-4 py-2 text-gray-500 hover:scale-105 dark:border-gray-800 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <footer class="container mx-auto py-10 px-10 md:px-0">
            <div class="flex flex-col md:flex-row md:items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#4F46E5"
                  class="h-10 w-10"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
                </svg>
              </div>
              <div class="mt-4 grow md:mt-0 md:ml-12">
                <p class="text-base font-semibold text-gray-500 dark:text-gray-300">
                  © 2023 DevUI Component Library
                </p>
              </div>
            </div>
            <div class="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                  Company
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                  Our Stores
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                  <li>Washington</li>
                  <li>New Hampshire</li>
                  <li>Maine</li>
                  <li>Texas</li>
                  <li>Indiana</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                  Services
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                  <li>UI / UX Design</li>
                  <li>App Development</li>
                  <li>API reference</li>
                  <li>API status</li>
                  <li>Documentation</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                  Legal
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Cookie Policy</li>
                  <li>Disclaimer</li>
                  <li>Media Policy</li>
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-lg font-semibold text-gray-700 dark:text-gray-100">
                  Social Links
                </p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-gray-400">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Linkedin</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
