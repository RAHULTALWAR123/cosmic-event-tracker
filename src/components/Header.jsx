import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";

function Header() {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      auth0Logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      login();
    }
  };

  return (
    <div className="sm:w-3/4 mx-auto p-4 rounded-3xl bg-transparent/45 backdrop-blur-sm border border-white/20 shadow-lg">
      <div className="flex justify-between items-center text-white">
        
        <p className="font-bold font-mono text-2xl">Cosmic</p>

        <div className="flex gap-6 items-center">
         

          <button
            onClick={handleAuthClick}
            disabled={isLoading}
            className="px-4 py-2 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 transition disabled:opacity-50"
          >
            {isLoading
              ? "Loading..."
              : isAuthenticated
              ? `Welcome, ${user?.name || "User"}`
              : "Login / Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
