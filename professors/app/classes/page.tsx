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
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../_lib/firebase";
import { NotebookPenIcon, PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";

interface ClassType {
  uid: string;
  name: string;
  year: number;
  teacher_id: string;
  teacher?: {
    name: string;
  };
}

function ClassesPage() {
  const [classes, setClasses] = useState<ClassType[]>([] as ClassType[]);

  async function getClasses() {
    try {
      // const c = collection(firestore, "classes");
      // const q = (await getDocs(c)).docs.map((doc) => {
      //   return { ...doc.data(), uid: doc.id };
      // });
      // setClasses(q as ClassType[]);

      const c = collection(firestore, "classes");
      const classDocs = await getDocs(c);

      const classesWithTeachers = await Promise.all(
        classDocs.docs.map(async (docSnap) => {
          const classData = docSnap.data();
          let teacherId: string | undefined;

          if (classData.teacher_id instanceof Object) {
            teacherId = classData.teacher_id.path;
          } else if (typeof classData.teacher_id === "string") {
            teacherId = classData.teacher_id.startsWith("/")
              ? classData.teacher_id.slice(1)
              : classData.teacher_id;
          }

          if (teacherId) {
            const teacherRef = doc(firestore, teacherId);
            const teacherSnap = await getDoc(teacherRef);

            return {
              ...classData,
              uid: docSnap.id,
              teacher: teacherSnap.exists() ? teacherSnap.data() : null,
            };
          } else {
            console.warn(`teacher_id inválido para classe ${docSnap.id}`);
            return { ...classData, uid: docSnap.id, teacher: null };
          }
        }),
      );

      setClasses(classesWithTeachers as ClassType[]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getClasses();
  }, []);
  useEffect(() => {
    console.log(classes);
  }, [classes]);

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
            <h1 className="text-pri text-3xl font-semibold text-primary">
              Turmas
            </h1>
            <Button>
              <PlusIcon />
              Criar nova turma
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Turma</TableHead>
                <TableHead>Professor</TableHead>
                <TableHead>Ano</TableHead>
                <TableHead className="text-right">Qtd de Alunos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4}>Nenhuma turma encontrada</TableCell>
                </TableRow>
              )}
              {classes.map((c) => (
                <TableRow key={c.name}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="font-medium">
                    {c.teacher?.name}
                  </TableCell>
                  <TableCell className="font-medium">{c.year}</TableCell>
                  <TableCell className="text-right font-medium">0</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total de turmas</TableCell>
                <TableCell className="text-right">{classes.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default ClassesPage;
