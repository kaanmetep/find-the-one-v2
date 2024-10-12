import Button from "./Button";
import HomeNav from "./HomeNav";
function Heading() {
  return (
    <div className="flex flex-col h-svh pt-8  text-white bg-gradient-to-l from-black to-stone-700 font-bold pb-8">
      <div className="flex justify-between px-8 items-center h-12 flex-col md:flex-row gap-4">
        <Button>Login</Button>
        <HomeNav />
      </div>
      <div className="flex flex-col items-center pt-40 relative">
        <h1 className="font-fontHeading text-[40px] md:text-[100px] md:tracking-wider bg-gradient-to-r from-stone-700 to-stone-800 w-full text-center">
          find <span className=" px-2 ml-1 rounded-md">the one</span>
        </h1>
        <h2 className="font-roboto text-sm md:text-[20px] md:tracking-wide uppercase mt-4">
          Where You Meet the One Who’s Right for You.
        </h2>
        <div className="mt-12 flex justify-center flex-col items-center ">
          <Button bgcolor="bg-white">Create Account</Button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-auto ">
        <a
          href=""
          className="block w-32 border-b-2 border-white hover:border-transparent transition-all delay-[50ms] text-center"
        >
          Learn more &darr;
        </a>
      </div>
    </div>
  );
}

export default Heading;
