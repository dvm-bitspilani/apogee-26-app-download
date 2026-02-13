import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="scanline"></div>

      <header>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="logo">
            APOGEE<span style={{ color: "var(--neon-pink)" }}>2026</span>
          </div>
        </div>
      </header>

      <main className="container">
        <h1 className={mounted ? "glitch-active" : ""}>
          ENTIRE FEST AT
          <br />
          <span style={{ color: "var(--neon-cyan)" }}>YOUR FINGERTIPS!</span>
        </h1>

        <h2>DOWNLOAD THE APP NOW</h2>

        <div className="btn-group">
          <a href="#" className="cyber-btn" onClick={(e) => e.preventDefault()}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.97-.5-2.08-.5-3.08 0-1.2.6-2 .45-3-.5-4.38-4.35-3.7-11.66 1.48-11.75 1.3-.08 2.27.75 3.03.75.7 0 1.95-1 3.25-.8 4.3 0 5.6 3.15 5.63 3.2-.06.05-3.32 1.88-3.3 5.7.02 3.8 3.38 5.5 3.4 5.53-.02.1-1.28 4-2.83 6.47-.85 1.5-1.95 2.5-1.5 1zm-3.03-16.7c.65-1.55 3-2.05 3.9-2.08.2 1.7-1.35 4.3-3.9 4.2-.2-1.6 1.1-3.6 0-2.12z" />
            </svg>
            Download For iOS
          </a>

          <a
            href="#"
            className="cyber-btn secondary"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM6.47659 15.3414C6.47659 15.3414 6.47659 15.3414 6.47659 15.3414C6.47659 15.3414 6.47659 15.3414 6.47659 15.3414C6.47659 15.3414 6.47659 15.3414 6.47659 15.3414ZM7.08399 20.3069C6.67156 20.3069 6.33595 19.9713 6.33595 19.5589V17.5678H17.6636V19.5589C17.6636 19.9713 17.328 20.3069 16.9156 20.3069C16.5032 20.3069 16.1676 19.9713 16.1676 19.5589V18.1568H7.83199V19.5589C7.83199 19.9713 7.49639 20.3069 7.08399 20.3069ZM18.9189 7.90623C18.667 7.46166 18.0932 7.3082 17.6486 7.56019L15.3782 8.8465C14.3725 8.35821 13.2206 8.08154 11.9998 8.08154C10.7789 8.08154 9.62709 8.35821 8.62136 8.8465L6.35099 7.56019C5.90642 7.3082 5.33265 7.46166 5.08066 7.90623C4.82867 8.3508 4.98213 8.92457 5.4267 9.17656L7.49692 10.3497C5.81971 11.5176 4.67508 13.342 4.49666 15.4851H19.5029C19.3245 13.3421 18.18 11.5176 16.5027 10.3497L18.5729 9.17656C19.0175 8.92457 19.1709 8.3508 18.9189 7.90623ZM7.92556 12.8716C7.51313 12.8716 7.17752 12.536 7.17752 12.1236C7.17752 11.7111 7.51313 11.3755 7.92556 11.3755C8.33799 11.3755 8.6736 11.7111 8.6736 12.1236C8.6736 12.536 8.33799 12.8716 7.92556 12.8716ZM16.074 12.8716C15.6616 12.8716 15.326 12.536 15.326 12.1236C15.326 11.7111 15.6616 11.3755 16.074 11.3755C16.4865 11.3755 16.822 11.7111 16.822 12.1236C16.822 12.536 16.4865 12.8716 16.074 12.8716Z" />
            </svg>
            Download For Android
          </a>
        </div>
      </main>

      <footer>
        <p>
          MADE WITH <span className="heart">❤</span> BY DVM
        </p>
      </footer>
    </>
  );
}

export default App;
