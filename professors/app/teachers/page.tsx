"use client";

import { useEffect, useState } from "react";
import AppSidebar from "../_components/app-sidebar";
import { SidebarProvider } from "../_components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../_components/ui/table";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../_lib/firebase";
import { NotebookPenIcon, PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../_components/ui/dialog";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface TeacherType {
  uid: string;
  name: string;
  birth: number;
  registration: string;
}

const addStudentSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail é obrigatório"),
});

type addTeacherType = z.infer<typeof addStudentSchema>;

function ClassesPage() {
  const [teachers, setTeachers] = useState<TeacherType[]>([] as TeacherType[]);
  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<addTeacherType>({
    resolver: zodResolver(addStudentSchema),
    defaultValues: { name: "", email: "" },
  });

  const handleAddNewTeacher = async (data: addTeacherType) => {
    const s = collection(firestore, "users");
    await addDoc(s, {
      name: data.name,
      email: data.email,
      user_type: "teacher",
      created_at: new Date().toISOString(),
    });
    reset();
    setIsOpen(false);
  };

  async function getTeachers() {
    const c = query(
      collection(firestore, "users"),
      where("user_type", "==", "teacher"),
    );
    const q = (await getDocs(c)).docs.map((doc) => {
      return { ...doc.data(), uid: doc.id };
    });
    setTeachers(q as TeacherType[]);
  }

  useEffect(() => {
    getTeachers();
  }, [isOpen]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-screen flex-col bg-[#f2f2f2]">
        <header className="flex items-center gap-3 bg-primary py-8 pl-9">
          <NotebookPenIcon size={24} className="text-white" />
          <span className="text-xl text-white">Professores existentes</span>
        </header>
        <div className="mx-4 mt-4 rounded-xl bg-white px-9 py-9">
          <div className="mb-12 flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-primary">Professores</h1>
            <Button onClick={() => setIsOpen(true)}>
              <PlusIcon />
              Adicionar novo professor
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3}>Nenhum professor encontrado</TableCell>
                </TableRow>
              )}
              {teachers.map((teacher) => (
                <TableRow key={teacher.uid}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total de professores</TableCell>
                <TableCell className="text-right">{teachers.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-full max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="mb-4 text-center text-xl text-primary">
              Adicionar novo aluno
            </DialogTitle>
          </DialogHeader>
          <div className="grid w-full grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <label className="text-sm" htmlFor="name">
                Nome do professor
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="name"
                    className="w-full rounded-lg border-2 px-4 py-2"
                    placeholder="Ex: Eduardo Silva"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="email"
                    className="w-full rounded-lg border-2 px-4 py-2"
                    placeholder="exemplo@email.com"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-10 flex justify-end gap-4">
            <DialogClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DialogClose>
            <Button onClick={handleSubmit(handleAddNewTeacher)}>
              Adicionar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}

export default ClassesPage;
