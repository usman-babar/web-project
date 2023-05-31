import { useState } from "react";
import ErrorPopup from "../ErrorPopup";
import backgroundImage from "../../website-parallax-background-C.jpg";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/admin/all")
      .then((response) => response.json())
      .then((data) => {
        const admin = data.find((admin) => admin.username === username);

        if (!admin) {
          setErrorPopupOpen(true);
        } else if (admin.password === password) {
          console.log("Login successful");
          onLogin();
        } else {
          setErrorPopupOpen(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div>
        <h1 style={{ color: 'white' }}>Admin Login</h1>
        <br/>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid gray', fontSize: '16px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid gray', fontSize: '16px' }}
          />
          <button
            type="submit"
            style={{ padding: '0.5rem 1rem', borderRadius: '4px', backgroundColor: 'red', color: 'white', border: 'none' , fontSize: '20px'} }
          >
            Login
          </button>
        </form>
      </div>

      <ErrorPopup isOpen={errorPopupOpen} onClose={closeErrorPopup} />
    </div>
  );
}

export default LoginPage;
