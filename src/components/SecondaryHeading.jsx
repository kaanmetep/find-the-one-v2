import Button from "./Button";
function SecondaryHeading() {
  return (
    <div className=" bg-gradient-to-r from-rose-400 to-rose-100 px-14 py-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col  items-center justify-center gap-2">
          <div className="flex items-center justify-center relative hover:scale-110 transition-all delay-75">
            <img
              src="pp1.jpg"
              alt="avatar"
              className="w-24 h-24 rounded-full border-solid border-4"
            />
            <img
              src="pp2.jpg
"
              alt="avatar"
              className="w-24 h-24 rounded-full border-solid border-4 ml-[-32px]"
            />
            <img
              src="pp3.jpg
"
              alt="avatar"
              className="w-24 h-24 rounded-full border-solid border-4 ml-[-32px]"
            />
            <img
              src="pp4.jpg
"
              alt="avatar"
              className="w-24 h-24 rounded-full border-solid border-4 ml-[-32px]"
            />
            <img
              src="pp5.jpg
"
              alt="avatar"
              className="w-24 h-24 rounded-full border-solid border-4 ml-[-32px]"
            />
          </div>
          <div>
            <p className="font-bold">
              Join{" "}
              <span className="underline text-white font-extrabold">
                +10.000
              </span>{" "}
              users now and find your soulmate!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center font-bold">
          <h2 className="text-white text-3xl font-fontHeading tracking-tighter">
            Start your love story
          </h2>
          <h3 className="text-rose-500 font-fontHeading font-extrabold tracking-tight"></h3>
        </div>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default SecondaryHeading;
