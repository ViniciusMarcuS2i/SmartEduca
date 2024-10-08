import { Button } from "@/components/ui/button";
import { CheckmarkCircle, List } from "react-ionicons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import crianca from "@/assets/crianca.png";
import criancaMorena from "@/assets/estudante.png";
import lampSvg from "@/assets/lampIcon.svg";
import { motion } from "framer-motion";

import { ChevronRightIcon } from "@radix-ui/react-icons";

export function Home() {
  return (
    <>
      <header className="flex flex-col px-6 lg:px-48 pt-6 pb-16 bg-[#1FCDFF] relative">
        <motion.img
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-32 object-cover absolute right-36 bottom-56 max-lg:hidden"
          src={lampSvg}
        />
        <motion.img
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          className="max-lg:hidden object-cover w-96 absolute -bottom-8 right-40"
          src={criancaMorena}
        />
        <div className="flex justify-between items-center">
          <p className="text-white text-3xl font-bold">SmartEduca</p>
          <nav className="max-xl:hidden flex gap-10">
            <a
              href="https://www.instagram.com/chicopretoam/"
              target="_blank"
              className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
            >
              Aprendizado
            </a>
            <a
              href="https://www.instagram.com/chicopretoam/"
              target="_blank"
              className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
            >
              Cuidados
            </a>
            <a className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]">
              Contato
            </a>
            <a
              href="https://www.instagram.com/chicopretoam/"
              target="_blank"
              className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
            >
              Preços
            </a>
            <a
              href="https://www.instagram.com/chicopretoam/"
              target="_blank"
              className=" font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
            >
              Quero saber mais
            </a>
          </nav>
          <Sheet>
            <SheetTrigger className="xl:hidden">
              {" "}
              <Button
                className="bg-[#fff] hover:bg-blue-800 active:opacity-60"
                size="icon"
              >
                <List color="#1fcdff" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetHeader>
                <SheetTitle>
                  <p className="text-[#006fff] text-2xl font-bold">
                    SmartEduca
                  </p>
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <motion.h1
          initial={{ translateX: -500 }}
          animate={{ translateX: 0 }}
          className="z-10 lg:mt-32 lg:self-start lg:text-start lg:text-5xl text-center text-2xl text-[#FFFF00] font-extrabold mt-10 self-center"
        >
          Sistema de <br />
          Gestão Parental
        </motion.h1>
        <motion.p
          initial={{ translateX: -600 }}
          animate={{ translateX: 0 }}
          transition={{ delay: 0.2 }}
          className="z-10 lg:w-96 lg:text-start text-[#fff] text-center mt-6"
        >
          Como posso eu voar sem ter asas? Por que voaria eu sem asas? Deveria
          eu mesmo, de mim memso, voar sem ter asas alguma?
        </motion.p>
      </header>
      <a
        target="_blank"
        href="https://www.instagram.com/chicopretoam/"
        className="w-full flex -mt-5 justify-center items-center"
      >
        <Button className="z-10 lg:hidden bg-[#006fff] px-6 py-6 shadow-lg hover:bg-blue-800 rounded-lg font-light">
          Quero saber mais!{" "}
          <ChevronRightIcon className="ml-4" width={17} height={17} />
        </Button>
      </a>
      <h1 className="lg:text-4xl text-center mt-16 text-2xl text-[#006fff] ">
        Como estão as notas?
      </h1>
      <h1 className="lg:text-4xl text-center text-2xl text-[#006fff] font-bold">
        Fique por dentro de tudo!
      </h1>
      <div className="p-4 pb-14 mt-16 grid grid-cols-1 px-6 gap-4 lg:px-48 lg:grid-cols-2 xl:grid-cols-3 z-10 relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#f8f8f8] rounded-md w-full overflow-hidden flex items-center py-5 flex-col px-8 gap-8"
        >
          <img
            className="w-72 h-72"
            src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-education.jpg"
          />
          <p className="text-center font-light text-sm">
            Como voar sem ter asas, como posso eu voar? Se asa não tenho?
            Deveria eu voar, sem voar voando? Porque a vida é feita de avoar
            Como voar sem ter asas, como posso eu voar? Se asa não tenho?
            Deveria eu voar, sem voar voando? Porque a vida é feita de avoar
          </p>
          <Button
            onClick={() => alert("EI JUIZ! VAI TOMAR NO C*!")}
            className="bg-[#1FCDFF] hover:bg-[#006fff]"
          >
            Baixe nosso Aplicativo
          </Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#f8f8f8] rounded-md w-full overflow-hidden flex items-center py-5 flex-col px-8 gap-8"
        >
          <img
            className="w-72 h-72"
            src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-education.jpg"
          />
          <p className="text-center font-light text-sm">
            Como voar sem ter asas, como posso eu voar? Se asa não tenho?
            Deveria eu voar, sem voar voando? Porque a vida é feita de avoar
            Como voar sem ter asas, como posso eu voar? Se asa não tenho?
            Deveria eu voar, sem voar voando? Porque a vida é feita de avoar
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#f8f8f8] rounded-md w-full overflow-hidden flex items-center py-5 flex-col px-8 gap-8"
        >
          <img
            className="w-72 h-72"
            src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/importance-of-education.jpg"
          />
          <p className="text-center font-light text-sm">
            Como voar sem ter asas, como posso eu voar? Se asa não tenho?
            Deveria eu voar, sem voar voando? Porque a vida é feita de avoar
            Como voar sem ter asas, como posso eu voar? Se asa não tenho?
            Deveria eu voar, sem voar voando? Porque a vida é feita de avoar
          </p>
        </motion.div>
      </div>
      <div className="w-full bg-[#1FCDFF] pt-20 lg:px-48 px-10 relative">
        <h1 className="lg:text-start lg:text-4xl text-2xl text-center text-[#FFFF00] ">
          Saiba como está seu filho:
          <br />
          <h1 className="text-2xl lg:text-4xl font-extrabold z-10 relative">
            SOMETHING
          </h1>
        </h1>
        <ul className="text-start flex gap-4 pb-24 flex-col mt-12">
          <li className="gap-3 text-white flex flex-row">
            <CheckmarkCircle color="white" />
            Estará junto da evolução de seu filho
          </li>
          <li className="gap-3 text-white flex flex-row">
            <CheckmarkCircle color="white" />
            Aqui você está junto de seu filho
          </li>
          <li className="gap-3 text-white flex flex-row">
            <CheckmarkCircle color="white" />I WANNA FLY
          </li>
          <li className="gap-3 text-white flex flex-row">
            <CheckmarkCircle color="white" />
            Corinthians 2x campeão mundiaaaaaal
          </li>
        </ul>
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="absolute max-lg:hidden object-contain h-96 right-0 bottom-0"
          src={crianca}
        />
      </div>
    </>
  );
}
