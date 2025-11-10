import { useState, useEffect } from "react";
import axios from "axios";
import { weatherAssets } from "./utils/weatherIcons";
import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { HourlyForecast } from "./components/HourlyForecast";
import { Highlights } from "./components/Highlights";
import "./index.css";
import { Loader } from "./components/Loader";
import { WeeklyReport } from "./components/WeeklyReport";
import { ForecastToggle } from "./components/ForecastToggle"; 

const API_KEY = "EJ6UBL2JEQGYB3AA4ENASN62J";

export default function App() {
  const [city, setCity] = useState("Hyderadad");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [forecastView, setForecastView] = useState("hourly"); 

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${API_KEY}&contentType=json`
        );
        setWeather(res.data);
      } catch (err) {
        console.error("Weather fetch failed", err);
      }
    }
    fetchWeather();
  }, [city, unit]);

  if (!weather)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  const condition = weather.currentConditions.icon || "default";
  const bg = weatherAssets[condition]?.bg || weatherAssets.default.bg;

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="weather-card">
        {/* Sidebar */}
        <div className="sidebar glass-card">
          <SearchBar setCity={setCity} unit={unit} setUnit={setUnit} />
          <CurrentWeather
            city={city}
            data={weather.currentConditions}
            unit={unit}
          />
        </div>

        {/* Main Section */}
        <div className="main-section">
          {/* Forecast header with toggle */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h3 className="section-title mb-0">
              {forecastView === "hourly" ? "Hourly Forecast" : "Weekly Report"}
            </h3>
            <ForecastToggle value={forecastView} onChange={setForecastView} />
          </div>

          {/* Forecast body (toggles) */}
          <div className="forecast-container">
            {forecastView === "hourly" ? (
              <HourlyForecast
                hours={weather.days[0].hours.slice(0, 24)}
                unit={unit}
              />
            ) : (
              <WeeklyReport days={weather.days} unit={unit} />
            )}
          </div>

          {/* Highlights */}
          <div className="highlights-container mt-4">
            <h3 className="section-title">Today's Highlights</h3>
            <Highlights
              today={weather.currentConditions}
              day={weather.days[0]}
              unit={unit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
