import { useContext } from "react";
import { ForecastContext } from "../contexts/ForecastContext";

function Day() {
  const { results } = useContext(ForecastContext);

  return results.slice(1).map((result, i) => {
    return (
      <div className="forecast-item">
        <div className="day">
          <h4>{result.dayShort}</h4>
        </div>
        <div className="forecast">
          <h4> Maksimum Sıcaklık: {result.maxTemp} ºC</h4>
          <h4> Minimum Sıcaklık: {result.minTemp} ºC</h4>
        </div>
      </div>
    );
  });
}

export default Day;
