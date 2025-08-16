import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Chat from "./components/Chat";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import NotFound from "./components/not-found";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/:persona" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
