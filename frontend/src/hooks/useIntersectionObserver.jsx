import { useEffect, useState, useRef } from "react";

export const useIntersectionObserver = (threshold) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current); // which element we watching?
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  });
  return { sectionRef, isVisible };
};
