import { useContext } from "react";
import { GlobalContext } from "../context/Provider";
//import { GlobalProvider } from "./context/Provider";
export default function Header() {
  console.log("" && "baa");
  const { authState } = useContext(GlobalContext);
  return (
    <div>
      <h1>{authState.auth.user} </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
