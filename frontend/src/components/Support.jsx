import SectionHeading from "./SectionHeading";
import InputElement from "./InputElement";
import PlaceholderLogo from "./PlaceholderLogo";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
function Support() {
  return (
    <SectionContainer>
      <div className="w-full shadow-xl p-6 pl-12" id="support">
        <SectionHeading>Support</SectionHeading>
        <h3 className="mt-4 font-fontHeading text-rose-400 font-extrabold text-center">
          Here to help whenever you need us!
        </h3>
        <div className="flex flex-col  md:flex-row items-center justify-center gap-6 mt-2">
          <form action="" className="text-xl flex flex-col gap-4 mt-4">
            <h3 className="mt-4 font-fontHeading text-rose-600  text-3xl tracking-tight">
              Contact us
            </h3>
            <div className="relative">
              <PlaceholderLogo
                d={
                  "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                }
              />
              <InputElement placeholder="Name" pl={36} />
            </div>
            <div className="relative">
              <PlaceholderLogo
                d={
                  "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                }
              />
              <InputElement placeholder="E-posta" pl={36} />
            </div>
            <div className="relative">
              <PlaceholderLogo
                d={
                  "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                }
              />
              <InputElement placeholder="Message" pl={36} py={12} />
            </div>
            <Button>Send Message</Button>
          </form>
          <img src="minilogo.png" alt="fto-logo" className=" md:w-60 w-32" />
        </div>
      </div>
    </SectionContainer>
  );
}

export default Support;
