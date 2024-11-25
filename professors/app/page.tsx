"use client";

import {
  Baby,
  NotebookPenIcon,
  Presentation,
  UserRoundPlus,
  Users,
} from "lucide-react";
import Option from "./_components/option";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./_components/ui/dialog";
import { useContext, useEffect, useState } from "react";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { firestore } from "./_lib/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { SidebarProvider } from "./_components/ui/sidebar";
import AppSidebar from "./_components/app-sidebar";
import { SidebarContext } from "./_context/app-context";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./_components/ui/select";

const classScheme = z.object({
  name: z.string().min(3, "O nome da turma deve ter no mínimo 3 caracteres"),
  year: z.string().min(4, "Coloque um ano válido"),
  teacher_id: z.string().min(3, "Escolha um professor"),
});

type classSchemeType = z.infer<typeof classScheme>;

interface TeacherPops {
  uid: string;
  name: string;
  email: string;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [teachers, setTeachers] = useState<TeacherPops[]>([] as TeacherPops[]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<classSchemeType>({
    resolver: zodResolver(classScheme),
    defaultValues: {
      name: "",
      year: "",
      teacher_id: "",
    },
  });

  const handleCreateNewClass = async (data: classSchemeType) => {
    console.log(data);
    reset();
    const teacherRef = doc(firestore, "users", data.teacher_id);
    const classs = collection(firestore, "classes");
    const newClass = await addDoc(classs, {
      name: data.name,
      year: data.year,
      teacher_id: teacherRef,
      created_at: new Date().toISOString(),
    });

    setOpen(false);
    return newClass;
  };

  const { user } = useContext(SidebarContext);

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  useEffect(() => {
    const getUsers = async () => {
      const p = await query(
        collection(firestore, "users"),
        where("user_type", "==", "teacher"),
      );
      const res = (await getDocs(p)).docs.map((doc) => {
        return { ...doc.data(), uid: doc.id } as TeacherPops;
      });

      setTeachers(res as TeacherPops[]);
    };
    getUsers();
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex w-screen flex-col bg-[#f2f2f2]">
          <header className="flex items-center gap-3 bg-primary py-8 pl-9">
            <NotebookPenIcon size={24} className="text-white" />
            <span className="text-xl text-white">Gestão de Turmas</span>
          </header>
          <div className="grid w-full grid-cols-2 gap-4 px-9 py-16">
            <Option
              icon={Users}
              onClick={() => router.push("/classes")}
              title="Turmas existentes"
            />
            <Option
              onClick={() => router.push("/children")}
              icon={Baby}
              title="Crianças"
            />
            <Option
              icon={UserRoundPlus}
              onClick={() => setOpen(true)}
              title="Criar nova turma"
            />
            <Option
              onClick={() => router.push("/teachers")}
              icon={Presentation}
              title="Professores"
            />
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-full max-w-[800px]">
            <DialogHeader>
              <DialogTitle className="mb-4 text-center text-xl text-primary">
                Cadastrar nova turma
              </DialogTitle>
            </DialogHeader>
            <div className="grid w-full grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <label className="text-sm" htmlFor="name">
                  Nome da turma
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input
                      id="name"
                      className="w-full rounded-lg border-2 px-4 py-2"
                      placeholder="Ex: 8° Ano A"
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
                <label className="text-sm" htmlFor="year">
                  Ano Letivo
                </label>
                <Controller
                  name="year"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Input
                      id="year"
                      className="w-full rounded-lg border-2 px-4 py-2"
                      placeholder="Ex: 2024"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.year && (
                  <span className="text-xs text-red-500">
                    {errors.year.message}
                  </span>
                )}
              </div>
              <div>
                <label className="text-sm" htmlFor="professor">
                  Professor Responsável
                </label>
                <Controller
                  name="teacher_id"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select value={value} onValueChange={onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o professor" />
                      </SelectTrigger>
                      <SelectContent>
                        {teachers.map((teacher) => (
                          <SelectItem key={teacher?.uid} value={teacher?.uid}>
                            {teacher.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.teacher_id && (
                  <span className="text-xs text-red-500">
                    {errors.teacher_id.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-10 flex justify-end gap-4">
              <DialogClose asChild>
                <Button variant="destructive">Cancelar</Button>
              </DialogClose>
              <Button onClick={handleSubmit(handleCreateNewClass)}>
                Criar Turma
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </SidebarProvider>
    </>
  );
}
