import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import AvatarImage from "./AvatarImage";
import { motion } from "framer-motion";

const avatarImages = ["pp1.jpg", "pp2.jpg", "pp3.jpg", "pp4.jpg", "pp5.jpg"];

function SecondaryHeading() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      <div className="bg-gradient-to-r from-rose-400 to-rose-100 px-14 py-12">
        <div className="flex flex-col gap-12 lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center relative hover:scale-105 transition-all delay-100">
              {avatarImages.map((avatar, index) => (
                <div
                  className={`${
                    index > 0 ? "ml-[-40px]" : ""
                  } transform transition-all duration-300 ease-in-out `}
                  key={avatar}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    zIndex: avatarImages.length - index,
                  }}
                >
                  <div className="border-2 border-white rounded-full shadow-md">
                    <AvatarImage src={avatar} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <p className="font-bold text-xs lg:text-base text-center text-gray-800">
                Join{" "}
                <span className="relative inline-block text-white font-extrabold">
                  <span className="relative z-10">+10,000</span>
                  <span className="absolute bottom-0 left-0 right-0 h-2 bg-rose-300 opacity-40 rounded-sm"></span>
                </span>{" "}
                users now and find your soulmate!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-center font-bold">
            <h2 className="text-white text-xl lg:text-3xl font-fontHeading tracking-tighter">
              Start your love story
            </h2>
            <Logo w={60} />
          </div>
          <Button onClick={() => navigate("/register")}>Sign Up</Button>
        </div>
      </div>
    </motion.div>
  );
}

export default SecondaryHeading;
