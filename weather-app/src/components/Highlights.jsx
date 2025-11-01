export const Highlights = ({ today, day }) => {
  return (
    <>
      <div className="card bg-light bg-opacity-75 border-0 shadow-sm mb-4">
        <div className="card-body">
          <h3 className="fw-semibold mb-3">Today's Highlights</h3>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <p className="text-secondary mb-1">UV Index</p>
                <h4>{today.uvindex}</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <p className="text-secondary mb-1">Wind Status</p>
                <h4>{today.windspeed} km/h</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <p className="text-secondary mb-1">Sunrise & Sunset</p>
                <h6>
                  {day.sunrise} / {day.sunset}
                </h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <p className="text-secondary mb-1">Humidity</p>
                <h4>{today.humidity}%</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <p className="text-secondary mb-1">Visibility</p>
                <h4>{today.visibility} km</h4>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <p className="text-secondary mb-1">Air Quality</p>
                <h4>{today.winddir}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
