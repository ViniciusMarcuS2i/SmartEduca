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
import { addDoc, collection, getDocs } from "firebase/firestore";
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

interface StudentType {
  uid: string;
  name: string;
  birth: number;
  registration: string;
}

const addStudentSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  birth: z.string().min(1, "Data de nascimento é obrigatória"),
});

type addStudentType = z.infer<typeof addStudentSchema>;

function ClassesPage() {
  const [students, setStudents] = useState<StudentType[]>([] as StudentType[]);
  const [isOpen, setIsOpen] = useState(false);

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<addStudentType>({
    resolver: zodResolver(addStudentSchema),
    defaultValues: { name: "", birth: "" },
  });

  const randomNumber = Math.floor(10000 + Math.random() * 90000).toString();

  const handleAddNewStudent = async (data: addStudentType) => {
    const s = collection(firestore, "students");
    await addDoc(s, {
      name: data.name,
      birth: data.birth,
      registration: `033${randomNumber}`,
    });
    reset();
    setIsOpen(false);
  };

  async function getClasses() {
    const c = collection(firestore, "students");
    const q = (await getDocs(c)).docs.map((doc) => {
      return { ...doc.data(), uid: doc.id };
    });
    setStudents(q as StudentType[]);
  }

  useEffect(() => {
    getClasses();
  }, [isOpen]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex w-screen flex-col bg-[#f2f2f2]">
        <header className="flex items-center gap-3 bg-primary py-8 pl-9">
          <NotebookPenIcon size={24} className="text-white" />
          <span className="text-xl text-white">Turmas existentes</span>
        </header>
        <div className="mx-4 mt-4 rounded-xl bg-white px-9 py-9">
          <div className="mb-12 flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-primary">Alunos</h1>
            <Button onClick={() => setIsOpen(true)}>
              <PlusIcon />
              Adicionar novo aluno
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Data de nascimento</TableHead>
                <TableHead>Matrícula</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.uid}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell className="font-medium">{student.birth}</TableCell>
                  <TableCell className="font-medium">
                    {student.registration}
                  </TableCell>
                  <TableCell className="text-right font-medium">0</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total de alunos</TableCell>
                <TableCell className="text-right">{students.length}</TableCell>
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
                Nome do aluno
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="name"
                    className="w-full rounded-lg border-2 px-4 py-2"
                    placeholder="Ex: Vitor Manuel"
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
              <label className="text-sm" htmlFor="birth">
                Data de nascimento
              </label>
              <Controller
                name="birth"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Input
                    id="birth"
                    className="w-full rounded-lg border-2 px-4 py-2"
                    placeholder="dd/mm/yyyy"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              {errors.birth && (
                <span className="text-xs text-red-500">
                  {errors.birth.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-10 flex justify-end gap-4">
            <DialogClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DialogClose>
            <Button onClick={handleSubmit(handleAddNewStudent)}>
              Adicionar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  );
}

export default ClassesPage;
