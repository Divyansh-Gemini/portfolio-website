import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import HangingSocials from "./components/HangingSocials";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <HangingSocials />
      <main className="w-3/4 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
