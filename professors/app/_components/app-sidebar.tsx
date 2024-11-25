"use client";

import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { BookDownIcon, LogOut, NotebookPenIcon, Settings } from "lucide-react";
import { useContext, useState } from "react";
import { SidebarContext } from "../_context/app-context";
import { signOut } from "firebase/auth";
import { auth } from "../_lib/firebase";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const AppSidebar = () => {
  const { index, setIndex, setUser } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSignOutClick = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sidebar>
        <SidebarContent className="bg-white px-6 pt-7">
          <SidebarGroup>
            <SidebarGroupLabel>
              <Image
                alt="SmartEduca"
                width={300}
                height={55}
                src="/sidebar-header.png"
              />
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-10">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => {
                      setIndex(1);
                      router.push("/");
                    }}
                    size="lg"
                    className={`hover:opacity-2 text-primary transition-colors duration-200 hover:bg-primary hover:text-white active:bg-primary active:text-white ${
                      index === 1 && "bg-primary text-white"
                    }`}
                    asChild
                  >
                    <a href="#">
                      <NotebookPenIcon />
                      <span>Gestão de turmas</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="opacity-50">
                  <SidebarMenuButton
                    className={`text-primary transition-colors duration-200 hover:bg-primary hover:text-white active:bg-primary active:text-white ${
                      index === 2 && "bg-primary text-white"
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="#">
                      <BookDownIcon />
                      <span>Documentos</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="opacity-50">
                  <SidebarMenuButton
                    className={`hover:opacity-2 text-primary transition-colors duration-200 hover:bg-primary hover:text-white active:bg-primary active:text-white ${
                      index === 3 && "bg-primary text-white"
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="#">
                      <Settings />
                      <span>Configurações</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-white px-6 pb-7">
          <SidebarMenuButton
            className="transition-colors duration-150 hover:cursor-pointer hover:bg-red-100"
            size="lg"
            asChild
            onClick={() => setIsOpen(true)}
          >
            <a>
              <LogOut className="text-red-600" />
              <span className="text-red-600">Sair da conta</span>
            </a>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4 text-center text-primary">
              Deseja sair da sua conta?
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-center gap-4">
            <DialogClose>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-white hover:text-primary"
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button
              onClick={handleSignOutClick}
              variant="destructive"
              className="px-10"
            >
              Sair
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppSidebar;
