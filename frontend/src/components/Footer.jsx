import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50/30 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-lg font-bold text-red-700">Find the One</h1>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              AI-Powered matchmaking to find true love
            </p>
            <p className="text-xs font-medium text-gray-500">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          {/* Links section */}
          <div>
            <h3 className="text-red-700 font-bold text-sm mb-4 uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-600 text-sm hover:text-red-600 transition-colors duration-200"
                >
                  Create an Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h3 className="text-red-700 font-bold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <a
              href="mailto:kaan@kmpcodes.com"
              className="text-red-600 text-sm hover:text-red-800 transition-colors duration-200 inline-block mb-2"
            >
              Contact via e-mail
            </a>
            <p className="text-gray-500 text-xs mb-4">
              I'll get back to you within 24 hours!
            </p>
            <p className="text-gray-500 text-xs">kaan@kmpcodes.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
