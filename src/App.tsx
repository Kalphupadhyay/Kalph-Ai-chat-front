import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Chat from "./pages/Chat";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import NotFound from "./components/not-found";
import NotebookPage from "./pages/notebook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:persona" element={<Chat />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
