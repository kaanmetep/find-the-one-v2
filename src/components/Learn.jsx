import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionHeading from "./SectionHeading";
function Learn() {
  const { sectionRef, isVisible } = useIntersectionObserver(0.7);
  return (
    <div id="learn" className="mt-20 flex justify-center p-8">
      <div
        className={`shadow-md p-4 fade-in-section ${
          isVisible ? "is-visible" : ""
        }`}
        ref={sectionRef}
      >
        <SectionHeading>Learn</SectionHeading>
        <h3 className="mt-4 font-fontHeading text-rose-400 font-extrabold">
          So, Why Choose A Dating App Like Find the One?
        </h3>
        <p className="mt-4">
          In a world filled with dating apps, finding the right match can be a
          challenge. But with the power of AI, "Find the One" takes online
          dating to the next level. Our advanced algorithms learn from your
          preferences, making meaningful connections faster and smarter. Whether
          you're looking for a serious relationship, fun conversations, or
          simply exploring new possibilities, our AI-driven system ensures you
          meet people who truly resonate with you.
        </p>
        <p className="mt-4">
          Experience the future of dating — powered by cutting-edge AI
          technology, designed to help you find your perfect match effortlessly.
        </p>
      </div>
    </div>
  );
}

export default Learn;
