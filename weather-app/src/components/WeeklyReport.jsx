import React from "react";

export const WeeklyReport = ({ days, unit }) => {
  const tempSymbol = unit === "metric" ? "°C" : "°F";

  const fmt = (iso) =>
    new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: "short" })
      .format(new Date(iso));

  return (
    <div className="row gy-3 gx-3">
      {days.slice(0, 7).map((d, idx) => (
        <div
          key={idx}
          className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
        >
          <div className="w-100 bg-white rounded shadow-sm p-3">
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0 small text-secondary">{fmt(d.datetime)}</p>
              <img
                src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${d.icon}.png`}
                alt={d.icon}
                width="36"
                height="36"
              />
            </div>

            <div className="d-flex align-items-end justify-content-between mt-3">
              <div>
                <div className="fw-semibold">
                  {Math.round(d.tempmax)}{tempSymbol}
                  <span className="text-secondary ms-1">
                    / {Math.round(d.tempmin)}{tempSymbol}
                  </span>
                </div>
                <div className="small text-secondary mt-1">
                  {d.conditions}
                </div>
              </div>
              <div className="text-end small text-secondary">
                <div>💧 {Math.round(d.precipprob || 0)}%</div>
                <div>🌬️ {Math.round(d.windspeed || 0)} {unit === "metric" ? "km/h" : "mph"}</div>
                <div>☀️ UV {Math.round(d.uvindex || 0)}</div>
              </div>
            </div>

            <div className="progress mt-3" style={{ height: 6 }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${Math.min(100, (d.precipprob || 0))}%`
                }}
                aria-valuenow={Math.round(d.precipprob || 0)}
                aria-valuemin="0"
                aria-valuemax="100"
                title={`Precipitation chance: ${Math.round(d.precipprob || 0)}%`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
