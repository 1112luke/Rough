import { StatusBar } from "expo-status-bar";
import { Login } from "./Pages/Login/Login";
import { Home } from "./Pages/Home/Home";

export default function App(){
  return(
    <>
    <Home></Home>
    <StatusBar style="auto" />
    </>
  );
}