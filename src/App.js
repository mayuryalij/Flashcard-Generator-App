import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Button from "./Components/Button";
import CreateNew from "./Pages/1stpage/CreateNew";
import MyFlashcard from "./Pages/2ndpage/MyFlashcard";
import FlashcardDetails from "./Pages/3rdpage/FlashcardDetails";

function App() {
  const flashstate = useSelector((state) => state.Reducer.showNum);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="px-0 lg:px-40 sm:px-8">
        <Button />
        <Routes>
          <Route path="/" element={<CreateNew />} />
          <Route path="/myflashcard" element={<MyFlashcard />} />
          <Route
            path={`/flashcardDetails${flashstate}`}
            element={<FlashcardDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
