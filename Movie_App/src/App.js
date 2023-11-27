import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import MovieSelfInfo from "./pages/MovieSelfInfo";
import "./styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/movie" element={<MovieSelfInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
