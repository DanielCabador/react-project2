import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StockPage.css";

const StockPage = () => {
  const [marketData, setMarketData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Check if the data is already cached
        const cachedData = localStorage.getItem("marketData");
        if (cachedData) {
          setMarketData(JSON.parse(cachedData));
          return;
        }

        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=Php&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setMarketData(response.data);
        localStorage.setItem("marketData", JSON.stringify(response.data));
        console.log(response.data);
      } catch (error) {
        console.log(error);
        // Retry the request after a delay (exponential backoff strategy)
        setTimeout(fetchMarketData, 2000);
      }
    };

    fetchMarketData();
  }, []);

  const getColorClass = (value) => {
    if (value > 0) {
      return "positive";
    } else if (value < 0) {
      return "negative";
    } else {
      return "neutral";
    }
  };

  const getChangeIndicator = (value) => {
    if (value > 0) {
      return <span className="change-indicator">&#9650;</span>; // Up arrow
    } else if (value < 0) {
      return <span className="change-indicator">&#9660;</span>; // Down arrow
    } else {
      return <span className="change-indicator">&#9679;</span>; // Neutral circle
    }
  };

  const formatPrice = (price, currency) => {
    const options = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    if (currency === "bitcoin") {
      return `${(price / 1000000).toLocaleString("en-US", options)} Php`;
    } else if (price >= 1000000) {
      return `${(price / 1000000).toLocaleString("en-US", options)} Php`;
    } else if (price >= 1000) {
      return `${(price / 1000).toLocaleString("en-US", options)} Php`;
    } else {
      return price.toLocaleString("en-US", options) + " Php";
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = marketData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="market-section-label text-start ml-5">Market Section</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="🔍 Search CryptoCurrencies"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div className="market-container">
        {filteredCoins.map((coin) => (
          <div className="coin-box" key={coin.id}>
            <div className="coin-item">
              <div className="coin-image-container">
                <img src={coin.image} alt={coin.name} className="coin-image" />
              </div>
              <div className="coin-text">
                <p className="coin-name">{coin.name}</p>
                <p className={`coin-price ${getColorClass(coin.price_change_24h)}`}>
                  {formatPrice(coin.current_price, coin.name)}
                </p>
                <p className={`coin-marketcap ${getColorClass(coin.market_cap_change)}`}>
                  {formatPrice(coin.market_cap, coin.name)}
                </p>

                <p className={`coin-change ${getColorClass(coin.price_change_percentage_24h)}`}>
                  {getChangeIndicator(coin.price_change_percentage_24h)} {coin.price_change_percentage_24h}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockPage;

