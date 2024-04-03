import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { iconsVariants } from "@/constans";

export default function Tech() {
  return (
    <div className="p-3 my-40 ">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 2 }}
        className="mb-5 text-3xl text-center"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -30 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-2 px-5 md:grid-cols-5 md:gap-x-5"
      >
        <motion.div
          variants={iconsVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center p-3 border rounded-lg bg-stone-800"
        >
          <FaReact className="text-5xl text-sky-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 3.5,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center p-3 border rounded-lg bg-stone-800"
        >
          <SiTypescript className="text-5xl bg-white text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconsVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 3,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center p-3 border rounded-lg bg-stone-800"
        >
          <SiRecoil className="text-5xl text-white " />
        </motion.div>
        <motion.div
          variants={iconsVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 2.5,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center p-3 border rounded-lg bg-stone-800"
        >
          <SiTailwindcss className="text-5xl text-sky-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants}
          initial="initial"
          animate="animate"
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
          className="flex items-center justify-center p-3 border rounded-lg bg-stone-800"
        >
          <TbBrandFramerMotion className="text-5xl text-pink-500 " />
        </motion.div>
      </motion.div>
    </div>
  );
}
