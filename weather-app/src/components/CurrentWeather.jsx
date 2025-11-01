import { weatherAssets } from "../utils/weatherIcons";

export const CurrentWeather = ({ city, data, unit }) => {
  const condition = data.icon || "default";
  const icon = weatherAssets[condition]?.icon || weatherAssets.default.icon;

  const tempSymbol = unit === "metric" ? "°C" : "°F";
  const windSymbol = unit === "metric" ? "km/h" : "mph";

  return (
    <div className="card bg-light bg-opacity-75 border-0 shadow-sm mb-4">
      <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <img src={icon} alt="weather" width="90" height="90" />
          <div>
            <h2 className="fw-bold display-6">
              {data.temp}
              {tempSymbol}
            </h2>
            <p className="text-muted mb-0">{data.conditions}</p>
            <small className="text-secondary">{city}</small>
          </div>
        </div>
        <div className="text-end mt-3 mt-md-0">
          <p>
            Feels Like: {data.feelslike}
            {tempSymbol}
          </p>
          <p>
            Wind: {data.windspeed} {windSymbol}
          </p>
          <p>Humidity: {data.humidity}%</p>
        </div>
      </div>
    </div>
  );
};
