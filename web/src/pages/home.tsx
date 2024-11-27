import { CheckmarkCircle } from "react-ionicons";
import crianca from "@/assets/crianca.png";
import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import HomeCards from "@/components/HomeCards";
import { HomeOnlyMobileButton } from "@/components/HomeOnlyMobileButton";

export function Home() {
  return (
    <>
      <Header />
      <HomeOnlyMobileButton />
      <h1 className="lg:text-4xl text-center mt-16 text-2xl text-[#006fff] ">
        Como estão as notas?
      </h1>
      <h1 className="lg:text-4xl text-center text-2xl text-[#006fff] font-bold">
        Fique por dentro de tudo!
      </h1>
      <HomeCards />
      <div className="w-full bg-[#1FCDFF] pt-20 lg:px-48 px-10 relative">
        <motion.h1
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="lg:text-start lg:text-4xl text-2xl text-center text-[#FFFF00] "
        >
          Fique por dentro de cada evolução do
          <br />
          <h1 className="text-2xl lg:text-4xl font-extrabold z-10 relative">
            seu filho
          </h1>
        </motion.h1>
        <ul className="text-start flex gap-4 pb-24 flex-col mt-12">
          <motion.li
            initial={{ translateX: -700 }}
            whileInView={{ translateX: 0 }}
            viewport={{ once: true }}
            className="gap-3 text-white flex flex-row"
          >
            <CheckmarkCircle color="white" />
            Estará junto da evolução de seu filho
          </motion.li>
          <motion.li
            initial={{ translateX: -700 }}
            whileInView={{ translateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="gap-3 text-white flex flex-row"
          >
            <CheckmarkCircle color="white" />
            Saiba suas notas a qualquer momento
          </motion.li>
          <motion.li
            initial={{ translateX: -700 }}
            whileInView={{ translateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.09 }}
            className="gap-3 text-white flex flex-row"
          >
            <CheckmarkCircle color="white" />
            Não perca uma reunião
          </motion.li>
          <motion.li
            initial={{ translateX: -700 }}
            whileInView={{ translateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="gap-3 text-white flex flex-row"
          >
            <CheckmarkCircle color="white" />
            Esteja sempre por dentro do que está acontecendo
          </motion.li>
        </ul>
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="absolute max-lg:hidden object-contain h-96 right-0 bottom-0"
          src={crianca}
        />
      </div>
    </>
  );
}
