import { useState } from "react";
import DatePicker from "react-datepicker";
import InputElement from "../components/InputElement";
import "react-datepicker/dist/react-datepicker.css";
function Register() {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  return (
    <div className=" h-svh flex items-center justify-center bg-red-50">
      <div className="flex flex-col justify-center items-center gap-6 p-24 w-[80%] mx-auto bg-red-200 rounded-lg ">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold italic p-2 rounded-sm text-center ">
            Create an account
          </h1>
          <h2 className="text-black font-bold">{page}/4</h2>
        </div>
        <form action="" className="flex flex-col gap-2">
          {page === 1 && (
            <>
              <InputElement placeholder="E-mail" pl={20} py={6} />
              <InputElement placeholder="Password" pl={20} py={6} />
              <InputElement
                placeholder="Re-enter your password"
                pl={20}
                py={6}
              />
              <button
                className="ml-auto mt-4 bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((curr) => curr + 1);
                }}
              >
                Continue &rarr;
              </button>
            </>
          )}
          {page === 2 && (
            <>
              <InputElement placeholder="Name" pl={20} />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Birthday date MM/DD/YYYY"
                className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
              />
              <select
                className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
                required
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
              <select
                className={`shadow-lg border-2 border-rose-200 px-2 pl-5 rounded-md py-1 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
                transition-all duration-300 focus:outline-none
                focus:ring
                focus:ring-rose-200
                focus:ring-opacity-50 text-black`}
                required
              >
                <option value="" disabled selected>
                  Interested Gender
                </option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
              </select>
              <button
                className="ml-auto mt-4 bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((curr) => curr + 1);
                }}
              >
                Continue &rarr;
              </button>
            </>
          )}
          {page === 3 && (
            <>
              <InputElement
                placeholder="Which genre of movies do you like?"
                pl={20}
                py={24}
              />
              <InputElement
                placeholder="How do you usually spend your weekends?"
                pl={20}
                py={24}
              />
              <button
                className="ml-auto mt-4 bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((curr) => curr + 1);
                }}
              >
                Continue &rarr;
              </button>
            </>
          )}
          {page === 4 && (
            <>
              <InputElement
                placeholder="What type of relationship is most valuable to you? (For example, an adventurous partner, a calming bond, a relationship based on strong communication, etc.)"
                pl={20}
                py={12}
              />
              <InputElement
                placeholder="If you could describe your ideal day, what would it look like?"
                pl={20}
                py={12}
              />
              <InputElement
                placeholder="If you could live in any country for a year, where would it be, and why?"
                pl={20}
                py={32}
              />
              <button
                className="ml-auto mt-4 bg-red-300 px-5 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((curr) => curr + 1);
                }}
              >
                Complete
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
