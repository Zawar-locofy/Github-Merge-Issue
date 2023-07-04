import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ZA3 from "./pages/ZA3";
import Loco2 from "./pages/Loco2";
import ZA1 from "./pages/ZA1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loco2":
        title = "";
        metaDescription = "";
        break;
      case "/za1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ZA3 />} />
      <Route path="/loco2" element={<Loco2 />} />
      <Route path="/za1" element={<ZA1 />} />
    </Routes>
  );
}
export default App;
