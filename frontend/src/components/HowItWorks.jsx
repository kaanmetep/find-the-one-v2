import SectionHeading from "./SectionHeading";
function HowItWorksHeading({ children }) {
  return <h2 className="text-3xl mb-2">{children}</h2>;
}
function HowItWorksSpan({ children }) {
  return (
    <span className="bg-gradient-to-r from-red-300 to-red-400 p-1 rounded-sm px-2 rounded-tr-xl rounded-bl-xl">
      {children}
    </span>
  );
}
function HowItWorksText({ children }) {
  return (
    <p className="mt-4 leading-7 text-slate-700 font-semibold">{children}</p>
  );
}
function HowItWorks() {
  return (
    <div className="mt-8 flex justify-center p-12 text-sm">
      <div className="w-full" id="howitworks">
        <SectionHeading>How it works</SectionHeading>
        <div className="mt-4 flex flex-col gap-8">
          <div>
            <div className="w-1/2">
              <HowItWorksHeading>
                Fill in your <HowItWorksSpan>details</HowItWorksSpan>
              </HowItWorksHeading>
              <HowItWorksText>
                Our AI-powered platform starts by getting to know you through a
                few essential details. Share your age, interests, hobbies, and
                what you’re looking for in a match. This information forms the
                basis of your unique profile. Don’t worry; your data is secure
                and used only to find the best match for you. The more accurate
                your details, the better our AI can work for you. Ready to
                begin? Let's start shaping your journey to meaningful
                connections.
              </HowItWorksText>
            </div>
          </div>
          <div>
            <div className="w-1/2 ml-auto">
              <HowItWorksHeading>
                Find your <HowItWorksSpan>perfect match</HowItWorksSpan>
              </HowItWorksHeading>
              <HowItWorksText>
                Once your profile is complete, our AI analyzes your information
                to find the most compatible matches. Using advanced algorithms,
                it scans and compares countless profiles to deliver options
                tailored to your preferences. The AI considers everything from
                personality traits to hobbies, making sure every match
                suggestion resonates with your interests. Our goal is to take
                the guesswork out of dating and let AI guide you to someone
                special. Let the power of AI bring you closer to your perfect
                match!
              </HowItWorksText>
            </div>
          </div>
          <div>
            <div className="w-1/2">
              <HowItWorksHeading>
                Start the <HowItWorksSpan>conversation</HowItWorksSpan>
              </HowItWorksHeading>
              <HowItWorksText>
                Now that you've found someone interesting, it's time to break
                the ice! Our AI-powered system encourages genuine, engaging
                conversations by matching you with those who share your values.
                You can chat and explore common interests in a safe and friendly
                environment. With AI monitoring to maintain a respectful space,
                you can focus on getting to know each other without worries.
                Start chatting and see where the connection leads!
              </HowItWorksText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
