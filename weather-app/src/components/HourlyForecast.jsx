export const HourlyForecast = ({ hours, unit }) => {
  const tempSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="row gy-3 gx-3">
      {hours.map((hour, index) => (
        <div
          key={index}
          className="col-6 col-sm-4 col-md-2 text-center bg-white rounded shadow-sm p-2 m-2"
        >
          <p className="small text-secondary mb-1">{hour.datetime}</p>
          <img
            src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${hour.icon}.png`}
            alt="icon"
            width="40"
            height="40"
          />
          <p className="fw-semibold mt-1">
            {hour.temp}
            {tempSymbol}
          </p>
        </div>
      ))}
    </div>
  );
};
