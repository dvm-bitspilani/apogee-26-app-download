import "./App.css";

import { useGlitch } from "react-powerglitch";

function App() {
  const glitch = useGlitch();

  return (
    <>
      <div className="scanline"></div>

      <header>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src="/images/logo.svg" alt="APOGEE 2026" className="main-logo" />
        </div>
      </header>

      <main className="container">
        <h1 ref={glitch.ref}>
          ENTIRE FEST AT
          <br />
          <span style={{ color: "var(--neon-cyan)" }}>YOUR FINGERTIPS!</span>
        </h1>

        <h2>DOWNLOAD THE APP NOW</h2>

        <div className="btn-group">
          <a
            href="https://apps.apple.com/in/app/apogee-2026/id6758733305"
            target="_blank"
            className="cyber-btn"
            // onClick={(e) => e.preventDefault()}
          >
            {/* <img
              src="/images/Apple_logo_black.svg"
              alt="Apple"
              className="btn-icon"
            /> */}
            <svg
              className="btn-icon apple-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Download For iOS
          </a>

          <a
            href="https://sgp.cloud.appwrite.io/v1/storage/buckets/6989f36b003e78eeb2af/files/698f45a700224b928619/download?project=690ba549001e1fcf8e38&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbklkIjoiNjk4ZjQ2MjI4Yjk5M2I0NmZlMTYiLCJyZXNvdXJjZUlkIjoiNjk4OWYzNmIwMDNlNzhlZWIyYWY6Njk4ZjQ1YTcwMDIyNGI5Mjg2MTkiLCJyZXNvdXJjZVR5cGUiOiJmaWxlcyIsInJlc291cmNlSW50ZXJuYWxJZCI6IjI5MjE6MSIsImlhdCI6MTc3MDk5NzI4MiwiZXhwIjoxNzcxNTQ1NjAwfQ.0--gIRspQPh6qnIaBHrozuZW6PSJhYwOYRdwzJJk6QI"
            className="cyber-btn secondary"
            // onClick={(e) => e.preventDefault()}
          >
            {/* <img
              src="/images/android_logo_black.svg"
              alt="Android"
              className="btn-icon"
            /> */}
            <svg
              className="btn-icon android-icon"
              viewBox="0 0 14 14"
              role="img"
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m 5.478365,3.5600962 q 0.11538,0 0.19832,-0.08293 0.0829,-0.08293 0.0829,-0.198317 0,-0.115385 -0.0829,-0.198317 -0.0829,-0.08293 -0.19832,-0.08293 -0.11539,0 -0.19471,0.08293 -0.0793,0.08293 -0.0793,0.198317 0,0.115385 0.0793,0.198317 0.0793,0.08293 0.19471,0.08293 z m 3.04327,0 q 0.11538,0 0.19471,-0.08293 0.0793,-0.08293 0.0793,-0.198317 0,-0.115385 -0.0793,-0.198317 -0.0793,-0.08293 -0.19471,-0.08293 -0.11539,0 -0.19832,0.08293 -0.0829,0.08293 -0.0829,0.198317 0,0.115385 0.0829,0.198317 0.0829,0.08293 0.19832,0.08293 z m -5.85577,1.326923 q 0.30288,0 0.51923,0.216347 0.21635,0.216345 0.21635,0.51923 v 3.100961 q 0,0.310097 -0.21274,0.526443 -0.21275,0.216346 -0.52284,0.216346 -0.3101,0 -0.52644,-0.216346 -0.21635,-0.216346 -0.21635,-0.526443 v -3.100961 q 0,-0.302885 0.21635,-0.51923 0.21634,-0.216347 0.52644,-0.216347 z m 7.64423,0.137019 v 4.802885 q 0,0.3317308 -0.23077,0.5624998 -0.23077,0.230769 -0.55529,0.230769 h -0.54086 v 1.63702 q 0,0.310096 -0.21635,0.526442 Q 8.550475,13 8.240385,13 q -0.3101,0 -0.52644,-0.216346 -0.21635,-0.216346 -0.21635,-0.526442 v -1.63702 h -0.99519 v 1.63702 q 0,0.310096 -0.21635,0.526442 Q 6.069705,13 5.759615,13 5.456725,13 5.240385,12.783654 5.024035,12.567308 5.024035,12.257212 l -0.007,-1.63702 h -0.53365 q -0.33173,0 -0.5625,-0.230769 -0.23077,-0.230769 -0.23077,-0.5624998 v -4.802885 h 6.62019 z m -1.67308,-2.920673 q 0.77164,0.396635 1.23318,1.106971 0.46153,0.710337 0.46153,1.554087 h -6.67067 q 0,-0.84375 0.46154,-1.554087 0.46154,-0.710336 1.24038,-1.106971 l -0.51202,-0.944712 q -0.0505,-0.09375 0.0361,-0.14423 0.0937,-0.04327 0.14423,0.04327 l 0.51923,0.951923 q 0.6851,-0.302885 1.44952,-0.302885 0.76443,0 1.44952,0.302885 l 0.51923,-0.951923 q 0.0505,-0.08654 0.14423,-0.04327 0.0865,0.05048 0.0361,0.14423 z m 3.43991,3.519231 v 3.100961 q 0,0.310097 -0.21635,0.526443 -0.21635,0.216346 -0.52644,0.216346 -0.30289,0 -0.51923,-0.216346 -0.21635,-0.216346 -0.21635,-0.526443 v -3.100961 q 0,-0.310096 0.21635,-0.522836 0.21634,-0.212741 0.51923,-0.212741 0.31009,0 0.52644,0.212741 0.21635,0.21274 0.21635,0.522836 z" />
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
