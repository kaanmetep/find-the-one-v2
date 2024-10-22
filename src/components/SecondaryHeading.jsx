import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import AvatarImage from "./AvatarImage";

const avatarImages = ["pp1.jpg", "pp2.jpg", "pp3.jpg", "pp4.jpg", "pp5.jpg"];

function SecondaryHeading() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Öğeyi görünür yap
            observer.unobserve(entry.target); // Gözlemi durdur (isteğe bağlı)
          }
        });
      },
      { threshold: 0.2 } // %10 görünür olduğunda tetiklenir
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Bellek yönetimi için temizle
      }
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } bg-gradient-to-r from-rose-400 to-rose-100 px-14 py-12 `}
      ref={sectionRef}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col  items-center justify-center gap-2">
          <div className="flex items-center justify-center relative hover:scale-110 transition-all delay-75">
            {avatarImages.map((avatar, index) => (
              <div className={`${index > 0 ? "ml-[-40px]" : ""}`}>
                <AvatarImage src={avatar} />
              </div>
            ))}
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
        <div className="flex  gap-2 items-center justify-center font-bold">
          <h2 className="text-white text-3xl font-fontHeading tracking-tighter">
            Start your love story
          </h2>
          <Logo w={60} />
        </div>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

export default SecondaryHeading;
