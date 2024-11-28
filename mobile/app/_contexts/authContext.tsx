import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore, { getDoc } from "@react-native-firebase/firestore";

type AuthContextType = {
  user: any;
  currentUser: any;
  child: any;
};

interface UserI {
  email: string;
  childId: string;
}

export const AuthContext = createContext({} as AuthContextType);

function ContextProvider({ children }: any) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState<UserI>({} as UserI);
  const [child, setChild] = useState<any>();

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

  async function getChild() {
    const childRef = currentUser.childId;
    const childSnap = await getDoc(childRef as any);
    setChild(childSnap.data() as any);
  }

  useEffect(() => {
    getChild();
  }, [currentUser]);

  if (initializing) return null;

  return (
    <AuthContext.Provider value={{ user, currentUser, child }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
