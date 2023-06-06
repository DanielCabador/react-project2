import HeroPage from "./HeroPage";
import Update from "./component/update/Update";
import TypeOfStocks from "./component/type/TypeOfStocks";
export const Layout = () => {
  return (
    <div>
      <HeroPage />
      <TypeOfStocks />
      <Update />
    </div>
  );
};
