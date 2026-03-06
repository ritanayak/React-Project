import { useState } from "react";
import SearchForm from "./components/SearchForm";
import InfoPanel from "./components/InfoPanel";
import MapView from "./components/MapView";
import { useIPData } from "./hooks/useIPData";
import desktopBg from "./assets/images/pattern-bg-desktop.png";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");

  // Fetch IP data
  const { data, loading, error } = useIPData(query);

  return (
    <div className="app-container">
      <header
        className="header"
        style={{ "--bg-image": `url(${desktopBg})` }}
      >
        <h1>IP Address Tracker</h1>

        {/* Search */}
        <SearchForm onSearch={setQuery} />

        {/* Loading */}
        {loading && <p>Loading...</p>}

        {/* Error */}
        {error && <p role="alert">{error}</p>}

        {/* Info Panel */}
        {data && <InfoPanel data={data} />}
      </header>

      {/* Map */}
      <MapView data={data} />

      {/* Footer */}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io">
          Frontend Mentor
        </a>. Coded by Rita Rani Nayak.
      </div>
    </div>
  );
}

export default App;