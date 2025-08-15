// import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetail from "./pages/EventDetail";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-5 bg-gradient-to-br from-black via-indigo-950  to-blue-900 min-h-screen text-white">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
