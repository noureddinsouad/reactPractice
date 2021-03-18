import "./styles.css";
import { GlobalProvider } from "./context/Provider";
import Header from "./layout/header";
export default function App() {
  return (
    <GlobalProvider>
      <Header />
    </GlobalProvider>
  );
}
