"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../_components/ui/input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../_lib/firebase";
import { useContext, useEffect } from "react";
import { SidebarContext } from "../_context/app-context";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { user } = useContext(SidebarContext);
  const router = useRouter();

  const handleSignIn = async (data: signInSchemaType) => {
    try {
      const signIn = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      console.log(signIn.user);
      reset();
      return signIn;
    } catch (error) {
      console.log(error);
    }
  };

  type signInSchemaType = z.infer<typeof signInSchema>;

  const signInSchema = z.object({
    email: z.string().email("Insira um e-mail válido"),
    password: z.string().min(1, "Digite sua senha"),
  });

  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (user) {
      router.push("/");
    } else {
      return;
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
          Login
        </h2>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  id="email"
                  value={value}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              )}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  type="password"
                  id="password"
                  value={value}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              )}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-primary py-3 text-white transition-opacity duration-150 hover:opacity-80"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Não tem conta?{" "}
          <a href="#" className="text-primary">
            Cadastrar
          </a>
        </p>
      </div>
    </div>
  );
}
