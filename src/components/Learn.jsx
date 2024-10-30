import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import SectionHeading from "./SectionHeading";
import TestimonialCards from "./TestimonialCards";
function Learn() {
  const { sectionRef, isVisible } = useIntersectionObserver(0.6);
  return (
    <div className="mt-8 flex justify-center p-12 text-sm">
      <div
        className={`shadow-xl p-8 fade-in-section ${
          isVisible ? "is-visible" : ""
        }`}
        ref={sectionRef}
        id="learn"
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
        <div>
          <TestimonialCards />
        </div>
      </div>
    </div>
  );
}

export default Learn;
