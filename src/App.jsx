import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { ApiProvider } from "./context/ContextApi";


const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <Navbar />

      <ApiProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
      </ApiProvider>
    </div>
  );
};
export default App;
