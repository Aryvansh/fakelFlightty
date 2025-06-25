import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import HotelsPage from "./pages/HotelsPage";
import ResultsPage from "./pages/ResultsPage";
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
        title = "Travel";
        metaDescription =
          '<meta charset="UTF-8">   <meta name="description" content="Free Web tutorials">   <meta name="keywords" content="HTML, CSS, JavaScript">   <meta name="author" content="John Doe">   <meta name="viewport" content="width=device-width, initial-scale=1.0">';
        break;
      case "/hotels-page":
        title = "Travel";
        metaDescription =
          '<meta charset="UTF-8">   <meta name="description" content="Cheap tickets">   <meta name="keywords" content="HTML, CSS, JavaScript">   <meta name="author" content="cheapairticketusa">   <meta name="viewport" content="width=device-width, initial-scale=1.0">';
        break;
      case "/results-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/hotels-page" element={<HotelsPage />} />

      <Route path="/results-page" element={<ResultsPage />} />
    </Routes>
  );
}
export default App;
