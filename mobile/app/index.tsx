import "./global.css";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "./_contexts/authContext";

function Index() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Redirect href="/auth/first-apresentation" />;
  }

  return <Redirect href="/logged/home" />;
}

export default Index;
