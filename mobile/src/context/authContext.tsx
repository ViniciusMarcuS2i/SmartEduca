import { createContext, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface AuthContextData {
  isAuth: any;
  setIsAuth: any;
  connectedUser: any;
  userData: IUserData | null;
}

interface IUserData {
  name: string;
  email: string;
}

export function ContextProvider({ children }: any) {
  const [isAuth, setIsAuth] = useState(true);
  const [connectedUser, setConnectedUser] =
    useState<FirebaseAuthTypes.User | null>(null);
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    const subcribe = auth().onAuthStateChanged((user: any) => {
      setIsAuth(!!user);
      const u: any = auth().currentUser;
      setConnectedUser(u);
    });

    return subcribe;
  }, []);

  useEffect(() => {
    if (connectedUser) {
      const loadUserData = async () => {
        const userDoc = await firestore()
          .collection("users")
          .doc(connectedUser.uid)
          .get();
        if (userDoc.exists) {
          setUserData(userDoc.data() as any);
        } else {
          setUserData(null);
        }
      };
      loadUserData();
    }
  }, [connectedUser]);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, connectedUser, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
