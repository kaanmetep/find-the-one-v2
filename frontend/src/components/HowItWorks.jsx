import SectionHeading from "./SectionHeading";
import SectionContainer from "./SectionContainer";
import { PenLine, UsersRound, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HowItWorksHeading({ children, step }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="md:text-3xl text-2xl mb-2 text-slate-900 font-bold">
        {children}
      </h2>
      {step === 1 && <PenLine className="size-8 text-rose-500" />}
      {step === 2 && <UsersRound className="size-8 text-rose-500" />}
      {step === 3 && <MessageCircle className="size-8 text-rose-500" />}
    </div>
  );
}

function HowItWorksSpan({ children }) {
  return (
    <span className="bg-gradient-to-r from-red-300 to-red-500 p-1 rounded-sm px-3 rounded-tr-xl rounded-bl-xl text-white relative">
      {children}
      <motion.div
        className="absolute -inset-0.5 rounded-tr-xl rounded-bl-xl bg-red-200 -z-10 opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </span>
  );
}

function HowItWorksText({ children }) {
  return (
    <p className="mt-4 leading-7 text-slate-600 font-medium">{children}</p>
  );
}

function HowItWorksContainer({ children, className, step }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: step * 0.1,
      }}
      className={`lg:w-1/2 bg-gradient-to-r from-white to-red-50 shadow-lg p-6 rounded-lg border-2 border-r-[10px] border-b-8 border-red-200 relative hover:scale-105 transition-all delay-100 ${className} relative`}
    >
      {children}
      <span
        className={`absolute ${
          step % 2 === 0 ? "-right-5" : "-left-5"
        } -top-5 bg-gradient-to-br from-red-300 to-red-500 w-12 h-12 flex items-center justify-center text-xl text-white rounded-lg rotate-6 font-bold shadow-lg`}
      >
        {step}
        <Sparkles className="absolute -top-1 -left-1 size-4 text-yellow-600" />
      </span>
    </motion.div>
  );
}

function HowItWorks() {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <div className="w-full p-6 lg:p-0" id="howitworks">
        <SectionHeading>How it works</SectionHeading>

        <div className="flex flex-col gap-12 relative pt-10">
          {/* Daha belirgin ve parlayan çizgi */}
          <motion.hr
            className="hidden lg:block w-[70%] rotate-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[3px] -z-10 bg-gradient-to-b from-red-300 via-rose-400 to-red-300"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div>
            <HowItWorksContainer step={1}>
              <HowItWorksHeading step={1}>
                Fill in your <HowItWorksSpan>details</HowItWorksSpan>
              </HowItWorksHeading>
              <HowItWorksText>
                Our AI-powered platform starts by getting to know you through a
                few essential details. Share your age, interests, hobbies, and
                what you're looking for in a match. This information forms the
                basis of your unique profile. Don't worry; your data is secure
                and used only to find the best match for you. The more accurate
                your details, the better our AI can work for you. Ready to
                begin? Let's start shaping your journey to meaningful
                connections.
              </HowItWorksText>
            </HowItWorksContainer>
          </div>

          <div>
            <HowItWorksContainer className="lg:ml-auto lg:mr-[2px]" step={2}>
              <HowItWorksHeading step={2}>
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
            </HowItWorksContainer>
          </div>

          <div>
            <HowItWorksContainer step={3}>
              <HowItWorksHeading step={3}>
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
            </HowItWorksContainer>
          </div>

          {/* Call to action düğmesi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <button
              className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 mt-8"
              onClick={() => navigate("/register")}
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default HowItWorks;
