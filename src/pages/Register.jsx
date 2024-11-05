import { useState } from "react";
import DatePicker from "react-datepicker";
import InputElement from "../components/InputElement";
import TextArea from "../components/TextArea";
import "react-datepicker/dist/react-datepicker.css";
function Register() {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  return (
    <div className=" h-svh flex items-center justify-center bg-red-50">
      <div className="flex flex-col justify-center items-center gap-6 h-[600px]  w-[80%] mx-auto bg-red-200 rounded-lg ">
        <div className="flex gap-4 items-center">
          <h1 className="text-3xl font-bold italic p-2 rounded-sm text-center ">
            Create an account
          </h1>
          <h2 className="text-black font-bold">{page}/4</h2>
        </div>
        <form
          action=""
          className="flex flex-col gap-2 items-center justify-center"
        >
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
              <h2 className="text-center mb-4 italic font-bold text-black">
                Let's get the important details first.
              </h2>
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
              <h2 className="text-center mb-4 italic font-bold text-black">
                Just to know you better. You're one step away to find the one
                for you!
              </h2>
              <label>Which genre of movies do you like?</label>
              <TextArea />
              <label>How do you usually spend your weekends?</label>
              <TextArea />
              <label>
                What is something you are passionate about that not many people
                know?
              </label>
              <TextArea />
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
              <h2 className="text-center mb-4 italic font-bold text-black">
                Your ideas about relationships.
              </h2>
              <div className="flex flex-col items-center gap-2">
                <label className="text-center">
                  What type of relationship is most valuable to you? (For
                  example, an adventurous partner, a calming bond, a
                  relationship based on strong communication, etc.)
                </label>
                <TextArea />
              </div>
              <div className="flex flex-col items-center gap-2">
                <label>
                  If you could describe your ideal day, what would it look like?
                </label>
                <TextArea />
              </div>
              <div className="flex flex-col items-center gap-2">
                <label htmlFor="">
                  If you could live in any country for a year, where would it
                  be, and why?
                </label>
                <TextArea />
              </div>
              <button onClick={() => setPage((curr) => curr - 1)}>Geri</button>
              <button
                className="mx-auto mt-4 bg-red-300 px-8 py-2 rounded-lg text-white font-bold hover:bg-red-100 hover:text-black transition-all delay-75"
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
