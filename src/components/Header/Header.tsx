import logo from "../../assets/images/DG_BODYWORKS-logowhite.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div className="flex flex-wrap items-center justify-between py-6">
        <div className="w-1/2 md:w-auto flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="/"
              className="md:w-32 w-24 h-auto object-contain"
            />
          </a>
        </div>
        <label htmlFor="menu-toggle" className="block pointer-cursor md:hidden">
          <svg
            className="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden w-full md:block md:w-auto" id="menu">
          <nav className="w-full px-6 py-4 mt-4 text-center bg-white rounded shadow-lg md:bg-transparent md:p-0 md:mt-0 md:shadow-none">
            <ul className="items-center md:flex">
              <li>
                <a
                  className="inline-block py-2 font-semibold md:text-white md:hidden lg:block"
                  href="#service"
                >
                  About Us
                </a>
              </li>
              <li className="md:ml-4">
                <a
                  className="inline-block py-2 font-semibold md:text-white md:px-2"
                  href="#"
                >
                  Treatments
                </a>
              </li>
              <li className="md:ml-4">
                <a
                  className="inline-block py-2 font-semibold md:text-white md:px-2"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
              <li className="md:ml-4 md:hidden lg:block">
                <a
                  className="inline-block py-2 font-semibold md:text-white md:px-2"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li className="md:ml-4">
                <a
                  className="inline-block py-2 font-semibold md:text-white md:px-2"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li className="mt-3 md:ml-6 md:mt-0">
                <a
                  className="inline-block px-4 py-2 font-semibold text-white bg-blue-600 border border-white rounded md:bg-transparent md:text-white hover:bg-gray-500 hover:border-gray-500"
                  href="#"
                >
                  Book a Service
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
