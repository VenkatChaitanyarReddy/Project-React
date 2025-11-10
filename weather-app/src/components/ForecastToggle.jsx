// src/components/ForecastToggle.jsx
import React from "react";

export const ForecastToggle = ({ value, onChange }) => {
  return (
    <div className="btn-group" role="group" aria-label="Forecast view toggle">
      <button
        type="button"
        className={`btn ${value === "hourly" ? "btn-primary" : "btn-outline-primary"}`}
        aria-pressed={value === "hourly"}
        onClick={() => onChange("hourly")}
      >
        Hourly
      </button>
      <button
        type="button"
        className={`btn ${value === "weekly" ? "btn-primary" : "btn-outline-primary"}`}
        aria-pressed={value === "weekly"}
        onClick={() => onChange("weekly")}
      >
        Weekly
      </button>
    </div>
  );
};
