import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "./Hero.css";

let stockName = "MSFT";

const HeroPage = () => {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = () => {
    const API_KEY = "GETYOUROWN";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then((response) => response.json())
      .then((data) => {
        for (var key in data["Time Series (Daily)"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key]["1. open"]
          );
        }

        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);

        if (!stockName) {
          document.getElementById("demo").innerHTML =
            "Nothing available at this time";
        }
      });
  };

  return (
    <div className="App container p-4 dark-mode">
      <br />
      <div className="row">
        <div className="col-md-7 container" style={{ borderRadius: "2rem" }}>
          <h1 className="text-success">Resolute Stock Market Chart</h1>
          <h4 className="text-light">
            Stock Symbol: <span>Resolute..</span>
          </h4>
          <div className="dark-gradient"></div>
          <Plot
            data={[
              {
                x: stockChartXValues,
                y: stockChartYValues,
                type: "scatter",
                mode: "lines+markers",
                line: { color: "green" },
                marker: { color: "orange" },
              },
            ]}
            layout={{
              width: "60%",
              height: 440,
              title: "Latest Data as of 2023",
              paper_bgcolor: "#333",
              plot_bgcolor: "#333",
              font: {
                color: "orange",
              },
            }}
            config={{
              responsive: true,
              displayModeBar: false,
            }}
          />
        </div>
        <div className="col-md-5">
          <h2 className="text-light ">
            Empower your investments with{" "}
            <b style={{ color: "green" }}>Resolute</b>.
          </h2>
          <h5 className="text-light">
            Navigate the Stock Market with Confidence.
          </h5>
          <div className="white-gradient"></div>
          <div className="p-4 mt-3">
            <img src="./swiperE.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
