// import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetail from "./pages/EventDetail";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import ComparePage from "./pages/ComparePage";
import { useAuth0 } from "@auth0/auth0-react";
import SignupPage from "./pages/SignupPage";

function App() {
  const {user} = useAuth0();
  return (
    <div className="p-5 bg-gradient-to-br from-black via-indigo-950  to-blue-900 min-h-screen text-white">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <HomePage /> : <SignupPage/>} />
          <Route path="/event/:id" element={user ? <EventDetail /> : <SignupPage/>} />
          <Route path="/compare" element={user ? <ComparePage/> : <SignupPage/>} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  );
}

export default App;
