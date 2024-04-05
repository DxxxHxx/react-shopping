import { HERO_IMG } from "@/constans";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse my-24 text-center h-96 md:flex-row md:justify-between md:text-left">
      <div>
        <motion.h1
          className="text-2xl md:text-5xl"
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          dxxxhxx
        </motion.h1>

        <motion.h2
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg font-bold text-transparent md:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1 }}
          className="my-3 text-slate-500"
        >
          description
        </motion.p>
      </div>
      <motion.img
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 1 }}
        src={HERO_IMG}
        className="w-full rounded-lg md:w-1/2"
        alt="img"
      />
    </div>
  );
}
