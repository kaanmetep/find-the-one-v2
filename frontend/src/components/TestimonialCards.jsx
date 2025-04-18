import { Quote } from "lucide-react";
import { motion } from "framer-motion";

function TestimonialCards() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ scale: 0.9, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.7, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 mt-12 tracking-wide">
        {/* Elizabeth's Card */}
        <div className="flex flex-col gap-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
          <div className="p-6 flex-1">
            <Quote className="size-8 mb-4 text-rose-300" />
            <p className="text-center mt-4 text-slate-700 leading-relaxed">
              I was hesitant about trying online dating, but this platform made
              it so simple and safe. The safety guidelines were especially
              helpful as I navigated meeting new people. After a month, I
              connected with someone wonderful who shares my passion for rock
              climbing and traveling. We've been together for six months now and
              couldn't be happier!
            </p>
          </div>
          <div className="h-28 bg-gradient-to-r from-rose-200 to-rose-100 relative flex items-center justify-center mt-auto">
            <img
              src="pp1.jpg"
              alt="Elizabeth profile avatar"
              className="block w-24 h-24 object-cover rounded-full border-white border-4 shadow-lg absolute top-[-48px]"
            />
            <p className="mt-12 text-slate-700 font-medium text-lg">
              Elizabeth P.
            </p>
          </div>
        </div>

        {/* Daniel's Card */}
        <div className="flex flex-col gap-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-2 border-rose-200">
          <div className="p-6 flex-1">
            <Quote className="size-8 mb-4 text-rose-400" />
            <p className="text-center mt-4 text-slate-700 leading-relaxed">
              After my divorce, I thought I'd never find connection again. This
              platform not only helped me meet interesting people, but also
              regain my confidence. The interface was intuitive, and the
              matching system introduced me to people who genuinely matched my
              interests and values. I'm now in a relationship that brings so
              much joy to my life. Thank you for helping me start this new
              chapter!
            </p>
          </div>
          <div className="h-28 bg-gradient-to-r from-rose-300 to-rose-200 relative flex items-center justify-center mt-auto">
            <img
              src="pp3.jpg"
              alt="Daniel profile avatar"
              className="block w-24 h-24 object-cover rounded-full border-white border-4 shadow-lg absolute top-[-48px]"
            />
            <p className="mt-12 text-slate-700 font-medium text-lg">
              Daniel O.
            </p>
          </div>
        </div>

        {/* Arya's Card */}
        <div className="flex flex-col gap-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
          <div className="p-6 flex-1">
            <Quote className="size-8 mb-4 text-rose-300" />
            <p className="text-center mt-4 text-slate-700 leading-relaxed">
              As someone with a busy career, I rarely had time to meet new
              people. This platform fit perfectly into my lifestyle, letting me
              connect with others at my own pace. The verification system gave
              me peace of mind knowing who I was talking to was genuine. Three
              months in, I met my partner who understands my schedule and shares
              my ambitions. We're planning our future together now!
            </p>
          </div>
          <div className="h-28 bg-gradient-to-r from-rose-100 to-pink-50 relative flex items-center justify-center mt-auto">
            <img
              src="pp4.jpg"
              alt="Arya profile avatar"
              className="block w-24 h-24 object-cover rounded-full border-white border-4 shadow-lg absolute top-[-48px]"
            />
            <p className="mt-12 text-slate-700 font-medium text-lg">Arya S.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCards;
