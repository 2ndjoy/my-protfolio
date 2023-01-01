import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { DarkLightContext } from "./Context/DarkLightContext";
import routes from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const { theme, setTheme } = useContext(DarkLightContext);
  return (
    <div data-theme={theme ? "retro" : "luxury"}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
