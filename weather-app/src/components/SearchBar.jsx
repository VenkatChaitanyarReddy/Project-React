import { useState } from "react";

export const SearchBar = ({ setCity, unit, setUnit }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
      setInput("");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <form onSubmit={handleSearch} className="d-flex gap-2 flex-grow-1">
          <input
            type="text"
            placeholder="Search city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>

        <div className="btn-group" role="group">
          <button
            onClick={() => setUnit("metric")}
            className={`btn ${
              unit === "metric" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            °C
          </button>
          <button
            onClick={() => setUnit("us")}
            className={`btn ${
              unit === "us" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
};
