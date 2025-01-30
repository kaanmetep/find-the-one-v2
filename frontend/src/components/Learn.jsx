import SectionHeading from "./SectionHeading";
import TestimonialCards from "./TestimonialCards";
import SectionContainer from "./SectionContainer";
import { motion } from "framer-motion";

function Learn() {
  return (
    <SectionContainer>
      <div id="learn">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut", delay: 2 }}
        >
          <SectionHeading>Learn</SectionHeading>
          <h3 className="mt-4 font-fontHeading text-rose-400 font-extrabold">
            So, Why Choose A Dating App Like Find the One?
          </h3>
          <p className="mt-4 text-gray-600 text-base">
            In a world filled with dating apps, finding the right match can be a
            challenge. But with the power of AI, "Find the One" takes online
            dating to the next level. Our advanced algorithms learn from your
            preferences, making meaningful connections faster and smarter.
            Whether you're looking for a serious relationship, fun
            conversations, or simply exploring new possibilities, our AI-driven
            system ensures you meet people who truly resonate with you.
          </p>
          <p className="mt-4 text-gray-900">
            Experience the future of dating — powered by cutting-edge AI
            technology, designed to help you find your perfect match
            effortlessly.
          </p>
        </motion.div>
        <div>
          <TestimonialCards />
        </div>
      </div>
    </SectionContainer>
  );
}

export default Learn;
