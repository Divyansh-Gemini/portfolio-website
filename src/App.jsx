import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import HangingSocials from "./components/HangingSocials";
import { Outlet } from "react-router-dom";

function App() {
  // Vercel Speed Insights
  injectSpeedInsights();

  // Vercel Analytics
  inject();

  // enabling scrolling
  document.body.style.overflow = "auto";

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
