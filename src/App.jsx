import { injectSpeedInsights } from "@vercel/speed-insights";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import HangingSocials from "./components/HangingSocials";
import { Outlet } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  // Vercel Speed Insights
  injectSpeedInsights();

  // Firebase Analytics
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
