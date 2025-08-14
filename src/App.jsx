// import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetail from "./pages/EventDetail";
import Header from "./components/Header";

function App() {
  // const {
  //   isLoading, // Loading state, the SDK needs to reach Auth0 on load
  //   isAuthenticated,
  //   error,
  //   loginWithRedirect: login, // Starts the login flow
  //   logout: auth0Logout, // Starts the logout flow
  //   user, // User profile
  // } = useAuth0();

  // const signup = () =>
  //   login({ authorizationParams: { screen_hint: "signup" } });

  // const logout = () =>
  //   auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  // if (isLoading) return "Loading...";

  return  (
    <div className="p-5 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      {/* <p>Logged in as {user.email}</p>

      <h1>User Profile</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      <button onClick={signup}>Signup</button>

      <button onClick={login}>Login</button> */}
      <Header/>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/event/:id" element={<EventDetail/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
