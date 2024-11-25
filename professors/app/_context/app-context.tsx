"use client";

import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { firestore } from "../_lib/firebase";
import { auth } from "../_lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface User {
  uid: string;
  name: string;
  email: string;
  user_type: string;
}

interface SidebarContextProps {
  index: number;
  setIndex: (index: number) => void;
  user: User | null;
  currentUser: User | null;
  setUser: (user: User | null) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  index: 1,
  setIndex: () => {},
  user: null,
  currentUser: null,
  setUser: () => {},
} as SidebarContextProps);

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [index, setIndex] = useState(1);

  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user as never);
    }
  });

  async function getUser() {
    const u = query(
      collection(firestore, "users"),
      where("email", "==", user?.email),
    );
    const getUser = await getDocs(u);
    setCurrentUser(getUser.docs[0].data() as User);
  }

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  return (
    <SidebarContext.Provider
      value={{ index, setIndex, user, currentUser, setUser }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
