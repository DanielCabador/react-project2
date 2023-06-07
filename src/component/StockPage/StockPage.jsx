import React, { useEffect, useState } from "react";
import "./StockPage.css";

const StockPage = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = () => {
    const API_KEY = "0RJV2PCETKFARW34";
    const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Process the data as needed
        setStockData(data);
      })
      .catch((error) => {
        console.log("Error fetching stock data:", error);
      });
  };

  return (
    <div>
      <h2 className="text-center text-dark">This is the stock page</h2>
      
      {stockData && (
        <div>
        
          <h3>Stock Data:</h3>
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default StockPage;