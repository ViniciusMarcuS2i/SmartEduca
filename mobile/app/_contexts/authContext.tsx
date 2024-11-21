import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

type AuthContextType = {
  user: any;
  currentUser: any;
};

interface UserI {
  email: string;
}

export const AuthContext = createContext({} as AuthContextType);

function ContextProvider({ children }: any) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState<UserI>({} as UserI);

  function onAuthhStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthhStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (user) {
      const u = auth().currentUser;
      const fetchUser = async () => {
        const fireUser = await firestore()
          .collection("users")
          .where("email", "==", `${u?.email}`)
          .get();
        setCurrentUser(fireUser.docs[0].data() as any);
      };

      fetchUser();
    }
  }, []);

  if (initializing) return null;

  return (
    <AuthContext.Provider value={{ user, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
