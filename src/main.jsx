import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
<div className="communication">
    <a href="https://github.com/nyankwoga/my-react-app" target="_blank" rel="noopener noreferrer">
  OpenSource
</a> by <a href="https://github.com/nyankwoga">Valentine Kerubo</a> from <a href="https://www.shecodes.io/ecodes">SheCodes</a>
</div>
  </StrictMode>
);
