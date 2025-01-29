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
      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
    >
      <div className="bg-gradient-to-r from-rose-400 to-rose-100 px-14 py-12">
        <div className="flex flex-col gap-12 lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center relative hover:scale-110 transition-all delay-75">
              {avatarImages.map((avatar, index) => (
                <div
                  className={`${index > 0 ? "ml-[-40px]" : ""}`}
                  key={avatar}
                >
                  <AvatarImage src={avatar} />
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-xs lg:text-base text-center text-gray-800">
                Join{" "}
                <span className="underline text-white font-extrabold">
                  +10.000
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
