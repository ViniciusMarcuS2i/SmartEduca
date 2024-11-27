import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { List } from "react-ionicons";
import lampSvg from "@/assets/lampIcon.svg";
import criancaMorena from "@/assets/estudante.png";

export function Header() {
  return (
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
        <nav className="max-xl:hidden items-center flex gap-10">
          <a
            target="_blank"
            className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
          >
            Aprendizado
          </a>
          <a
            target="_blank"
            className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
          >
            Cuidados
          </a>
          <a className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]">
            Preços
          </a>
          <a
            href="https://smarteduca-admin.vercel.app/sign-in"
            target="_blank"
            className="font-light text-white cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-[#FFFF00] hover:text-[#FFFF00]"
          >
            Sou professor/gestor
          </a>
          <a
            href="https://www.mediafire.com/file/3h2zlwwrpkykul6/app-release.apk/file"
            target="_blank"
            className="bg-primary font-light text-white cursor-pointer "
          >
            <Button className="border-[1px] hover:border-secondary hover:text-secondary border-white  text-white">
              Baixe o aplicativo!
            </Button>
          </a>
        </nav>
        <Sheet>
          <SheetTrigger className="xl:hidden">
            {" "}
            <Button
              className="bg-primary border-2 border-white hover:bg-blue-800 active:opacity-60"
              size="icon"
            >
              <List color="#fff" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle>
                <p className="text-[#006fff] text-2xl font-bold">SmartEduca</p>
              </SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
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
        Facilitando o acompanhamento escolar e promovendo a conexão entre pais,
        professores e alunos!
      </motion.p>
    </header>
  );
}
