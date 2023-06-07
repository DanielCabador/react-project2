import HeroPage from "./HeroPage";
import Update from "./component/update/Update";
import TypeOfStocks from "./component/type/TypeOfStocks";
import StocksLayout from "./component/stocks/StocksLayout";
export const Layout = () => {
  return (
    <div>
      <HeroPage />
      <TypeOfStocks />
      <br />
      <Update />
      <StocksLayout />
      <br />
    </div>
  );
};
